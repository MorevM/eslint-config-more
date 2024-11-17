import fs from 'node:fs';
import { confirm, isCancel, log, select, text } from '@clack/prompts';
import { formatSlashes, isEmpty, mergeObjects, quote, sleep, tsObject  } from '@morev/utils';
import { formatCliMessage, getPackageJson, getPackageJsonPath } from './utils';
import type { PackageJson } from '@morev/utils';
import type { StepOptions } from './types';

export const addScripts = async (stepOptions: StepOptions) => {
	const { delay } = stepOptions;

	const packageJsonContents = getPackageJson();
	if (!packageJsonContents) {
		log.warning(
			formatCliMessage(`
				<y>We were unable to fetch the contents of your</y> <c>package.json</c> <y>file.</y>
				The process will continue, but you will have
				to make the suggested changes manually.
			`),
		);
		await sleep(delay);
	}

	const FILE_NAME = 'package.json';

	let existedNpmScripts: PackageJson['scripts'] = {};
	let shouldRemoveExistingScripts = false;
	let eslintRelatedEntries: any[] = [];
	if (packageJsonContents) {
		log.info(formatCliMessage(`Looking for an existed <c>npm scripts</c>...`));
		await sleep(delay);

		existedNpmScripts = packageJsonContents?.scripts ?? {};

		eslintRelatedEntries = tsObject.entries(existedNpmScripts)
			.filter(([key, value]) => value?.includes('eslint'));

		if (!isEmpty(eslintRelatedEntries)) {
			const longestEntryKey = Math.max(...eslintRelatedEntries.map(([key]) => key.length));
			const eslintRelatedEntriesString = eslintRelatedEntries
				.map(([key, value]) => {
				// `+ 3` = 2 quotes + 1 colon
					const formattedKey = `${quote(key, '"')}:`.padEnd(longestEntryKey + 3, ' ');
					const formattedValue = quote(value ?? '', '"');

					return `<y>${formattedKey} ${formattedValue}</y>`;
				})
				.join('\n\t\t\t');

			log.warning(formatCliMessage(`
			Found existing <c>npm scripts</c> that may relate to <c>eslint</c>, here they are:

			${eslintRelatedEntriesString}
		`));

			const whatToDo = await select({
				message: 'What to do with them?',
				options: [
					{
						label: 'Keep entries',
						hint: 'the recommended scripts will be APPENDED to the `scripts` section',
						value: 'keep',
					},
					{
						label: 'Remove entries',
						hint: 'the recommended scripts will be inserted INSTEAD of existing ones',
						value: 'remove',
					},
				],
			});

			if (isCancel(whatToDo)) return;
			shouldRemoveExistingScripts = whatToDo === 'remove';
		}
	}

	const lintScriptName = await text({
		message: 'How to name `npm script` for linting?',
		initialValue: 'lint:eslint',
		defaultValue: 'lint:eslint',
		placeholder: '',
		validate: (value) => {
			if (!value) return 'Value is required';
		},
	});

	if (isCancel(lintScriptName)) return;

	const lintFixScriptName = await text({
		message: 'How to name `npm script` for linting with autofixing?',
		initialValue: 'lint:eslint:fix',
		defaultValue: 'lint:eslint:fix',
		placeholder: '',
		validate: (value) => {
			if (!value) return 'Value is required';
		},
	});

	if (isCancel(lintFixScriptName)) return;

	log.info(formatCliMessage(`Forming the new content of <c>npm scripts</c>...`));
	await sleep(delay);

	if (shouldRemoveExistingScripts) {
		eslintRelatedEntries.forEach(([key]) => delete existedNpmScripts[key]);
	}

	existedNpmScripts[lintScriptName] = `eslint .`;
	existedNpmScripts[lintFixScriptName] = `eslint . --fix`;

	const newContents = JSON.stringify(existedNpmScripts, null, '\t')
		.replace(/("lint:eslint": .*$)/m, '<g>$1</g>')
		.replace(/("lint:eslint:fix": .*$)/m, '<g>$1</g>');

	log.success(formatCliMessage(`The new contents of the <c>${FILE_NAME} > scripts</c> section:`));
	log.message(formatCliMessage(newContents));

	if (!packageJsonContents) {
		log.info(
			formatCliMessage(`
				Since we failed to read the content of your <c>package.json</c>,
				we can't write it automatically.

				<y>Insert the scripts generated above yourself.</y>
			`),
		);
		return;
	}
	const shouldWriteFile = await confirm({
		message: formatCliMessage(`Update the <c>${FILE_NAME}</c> file with the content above?`),
	});
	if (!shouldWriteFile || isCancel(shouldWriteFile)) return;

	if (shouldWriteFile) {
		try {
			const fileContents = JSON.stringify(
				mergeObjects(packageJsonContents ?? {}, { scripts: existedNpmScripts }),
				null,
				'\t',
			);

			// eslint-disable-next-line no-autofix/prefer-template -- Better to do this way
			fs.writeFileSync(FILE_NAME, fileContents + '\n');
			log.success(
				formatCliMessage(`
					<g>The \`${FILE_NAME}\` file has been updated.</g>
					File path: <c>${formatSlashes(getPackageJsonPath(), { to: `/` })}</c>
				`),
			);
		} catch {
			log.error(formatCliMessage(`
				<r>Failed to update the \`${FILE_NAME}\` file.</r>
				Please update the file yourself using the content above.
			`));
		}
	}
};
