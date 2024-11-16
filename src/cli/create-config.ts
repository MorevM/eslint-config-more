import fs from 'node:fs';
import path from 'node:path';
import { formatSlashes, isArray, pick, quote, sleep, stripIndent, tsObject  } from '@morev/utils';
import type { PlainObject } from '@morev/utils';
import { confirm, isCancel, log, multiselect } from '@clack/prompts';
import { hasTsconfig } from '#utils';
import { formatCliMessage, getPackageJson, loadModule, prependTabs } from './utils';
import type { StepOptions } from './types';

const getVueVersion = async () => {
	const vuePackage = await loadModule('vue');
	return vuePackage?.version.startsWith('2.') ? 2 : 3;
};

const configurationsMapNames = {
	javascript: 'JavaScript',
	browser: 'Browser APIs',
	node: 'Node-specific rules',
	jsx: 'JSX',
	json: 'JSON',
	markdown: 'Markdown',
	yaml: 'YAML',
	html: 'HTML',
	vitest: 'Vitest',
	jest: 'Jest',
	cypress: 'Cypress',
	typescript: 'TypeScript',
	vue: 'Vue',
	astro: 'Astro',
} as const;

export const createConfig = async (stepOptions: StepOptions) => {
	const { delay } = stepOptions;

	const packageJsonContents = getPackageJson();
	if (!packageJsonContents) {
		log.warning(
			formatCliMessage(`
				<y>We were unable to fetch the contents of your</y> <c>package.json</c> <y>file.</y>
				The process will continue, but some heuristics may not work correctly.
			`),
		);
		await sleep(delay);
	}

	const configurations: Record<keyof typeof configurationsMapNames, false | PlainObject> = {
		// The base configuration must always be enabled.
		javascript: {},
		// There's no way to determine for sure, so that is enabled by default too.
		browser: {},
		node: {},
		jsx: {},
		// There is no reason not to enable assistive configurations by default.
		// Even if there are no such files - it doesn't affect the performance,
		// as they are triggered only for subset of files.
		json: {},
		markdown: {},
		yaml: {},
		html: {},
		// The rest is enabled optionally by direct request
		// or based on `package.json` contents.
		vitest: false,
		jest: false,
		cypress: false,
		typescript: false,
		vue: false,
		astro: false,
	};

	// Well, the keys order is not guaranteed,
	// but it seems to always work as it expected.
	const perfectConfigurationsOrder = Object.keys(configurations);

	const fileExtension = (() => {
		if (!packageJsonContents?.type) return 'js';
		if (packageJsonContents.type === 'module') return 'js';
		return 'mjs';
	})();
	const fileName = `eslint.config.${fileExtension}`;
	const filePath = path.join(process.cwd(), fileName);

	log.info(formatCliMessage(`Looking for an existed <c>${fileName}</c> file...`));
	await sleep(delay);

	if (fs.existsSync(filePath)) {
		log.warn(formatCliMessage(`
			<y>Found existed \`${fileName}\` file.</y>

			Continuing the process <r>will overwrite</r> its contents.
			<c>Right now it's just a notification</c> - the actual file update
			will require additional confirmation in the following steps.
		`));

		const shouldContinue = await confirm({
			message: formatCliMessage(`Continue the process?`),
		});
		if (!shouldContinue || isCancel(shouldContinue)) return;
	}

	log.info(formatCliMessage(`Trying to guess what configurations you will need...`));
	await sleep(delay);

	const dependencies = {
		...packageJsonContents?.dependencies,
		...packageJsonContents?.devDependencies,
	};
	const dependenciesList = Object.keys(dependencies);

	// Testing frameworks
	dependenciesList.includes('vitest') && (configurations.vitest = {});
	dependenciesList.includes('jest') && (configurations.jest = {});
	dependenciesList.includes('cypress') && (configurations.cypress = {});

	// Typescript
	if (dependenciesList.includes('typescript') || hasTsconfig()) {
		configurations.typescript = {};
	}

	// Astro
	if (dependenciesList.includes('astro')) {
		configurations.astro = {};
		configurations.typescript && (configurations.typescript.extraFileExtensions = ['astro']);
	}

	// Vue
	if (dependenciesList.includes('vue')) {
		configurations.vue = {
			version: await getVueVersion(),
		};
		if (configurations.typescript) {
			configurations.vue.typescript = true;
			configurations.typescript.extraFileExtensions = ['vue'];
		}
	}

	// Options offered to the user.
	const optionsToAsk = tsObject.entries(configurations)
		// Bloody perfectionism is here :)
		.sort(([name1], [name2]) =>
			perfectConfigurationsOrder.indexOf(name1) - perfectConfigurationsOrder.indexOf(name2))
		.map(([name, value]) => {
			return {
				label: configurationsMapNames[name],
				value: name,
				hint: name === 'javascript' ? 'must always be enabled' : '',
			};
		});

	const initialValues = Object.entries(configurations)
		// Skip disabled ones.
		.filter(([name, value]) => !!value)
		.map(([name]) => name);

	// Prompt the user to adjust the configurations.
	const configurationsToEnable = await multiselect({
		message: 'Choose the configurations to enable:',
		options: optionsToAsk,
		initialValues,
	}) as string[];

	if (isCancel(configurationsToEnable)) return;

	log.info(formatCliMessage(`Forming the contents of the <c>${fileName}</c> file...`));
	await sleep(delay);

	// TODO: Simplify the type of the `pick` utility
	// eslint-disable-next-line no-autofix/prefer-template -- Better to do this way
	const configurationsToAdd = tsObject.entries(pick(configurations, ...configurationsToEnable as any[]))
		// Bloody perfectionism is here :)
		.sort(([name1], [name2]) =>
			perfectConfigurationsOrder.indexOf(name1) - perfectConfigurationsOrder.indexOf(name2))
		.map(([name, options]) => {
			if (Object.keys(options).length === 0) {
				return `defineConfiguration('${name}')`;
			}

			// `JSON.parse()` does not fit because it uses double quotes and does not add a trailing commas.
			// It would be strange if the generated config would require additional formatting by itself, so.. :)
			const optionsString = Object.entries(options)
				.map(([property, value]) => {
					const formattedValue = isArray(value)
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- Intentionally
						? `[${value.map((string) => quote(string, "'"))}]`
						: (value as any).toString();

					return `\t${property}: ${formattedValue},`;
				})
				.join('\n');

			return `defineConfiguration('${name}', {\n${optionsString}\n})`;
		}).join(',\n') + ',';

	const fileContents = stripIndent(`
		import { combine, defineIgnores, defineConfiguration } from '@morev/eslint-config';

		export default combine([
			defineIgnores(),
			{{CONTENTS}}
		]);
	`, { trimTrailingSpacings: false })
		.replace('{{CONTENTS}}', prependTabs(configurationsToAdd).trim());

	log.success(formatCliMessage(`Contents of the <c>${fileName}</c> file:`));
	log.message(fileContents);

	const shouldCreateFile = await confirm({
		message: formatCliMessage(`Create the <c>${fileName}</c> file with the content above?`),
	});
	if (!shouldCreateFile || isCancel(shouldCreateFile)) return;

	if (shouldCreateFile) {
		try {
			fs.writeFileSync(filePath, fileContents);
			log.success(
				formatCliMessage(`
					<g>The \`${fileName}\` file has been created.</g>
					File path: <c>${formatSlashes(filePath, { to: `/` })}</c>
				`),
			);
		} catch {
			log.error(formatCliMessage(`
				<r>Failed to create the \`${fileName}\` file.</r>
				Please create the file yourself using the content above.
			`));
		}
	}
};
