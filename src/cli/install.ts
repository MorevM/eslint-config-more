import type { ExecException } from 'node:child_process';
import { isNull, sleep } from '@morev/utils';
import { confirm, isCancel, log, select, spinner } from '@clack/prompts';
import * as semver from 'semver';
import { detect } from 'package-manager-detector';
import { customExec, formatCliMessage, getPackageJson, loadModule, runAgentCommand } from './utils';
import type { StepOptions } from './types';

export const install = async (options: StepOptions) => {
	const { delay, smallDelay, selfPackageJson } = options;

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

	const MINIMAL_ESLINT_VERSION = selfPackageJson.peerDependencies!.eslint!;
	const MINIMAL_TYPESCRIPT_VERSION = selfPackageJson.peerDependencies!.typescript!;

	log.info(formatCliMessage(`Fetching dependencies list...`));
	await sleep(smallDelay);

	const dependencies = {
		...packageJsonContents?.dependencies,
		...packageJsonContents?.devDependencies,
	};
	const dependenciesList = Object.keys(dependencies);

	const hasEslintDependency = dependenciesList.includes('eslint');
	const [isEslintVersionMatch, eslintVersionInUse] = await (async () => {
		if (!hasEslintDependency) return [false, null];

		const eslintModule = await loadModule('eslint');
		const eslintVersion = eslintModule?.Linter.version ?? semver.clean(dependencies.eslint!);

		return [
			semver.satisfies(eslintVersion, MINIMAL_ESLINT_VERSION),
			eslintVersion as string,
		];
	})();

	const hasConfigDependency = dependenciesList.includes('@morev/eslint-config');

	const hasTypescriptDependency = dependenciesList.includes('typescript');
	const [isTypescriptVersionMatch, typescriptVersionInUse] = await (async () => {
		if (!hasTypescriptDependency) return [false, null];

		const typescriptModule = await loadModule('typescript');
		const typescriptVersion = typescriptModule?.version ?? semver.clean(dependencies.typescript!);

		return [
			semver.satisfies(typescriptVersion, MINIMAL_TYPESCRIPT_VERSION),
			typescriptVersion as string,
		];
	})();

	const mode = hasConfigDependency ? 'update' : 'installation';

	const packageManagerDetect = await detect();
	const packageManager = await select({
		message: 'What package manager would you like to use?\n',
		initialValue: packageManagerDetect?.name,
		options: [
			{
				value: 'npm',
				label: 'npm',
			},
			{
				value: 'yarn',
				label: 'yarn',
			},
			{
				value: 'pnpm',
				label: 'pnpm',
			},
			{
				value: 'bun',
				label: 'bun',
			},
		],
	});
	if (isCancel(packageManager)) return;

	const dependenciesToInstall = [];
	const dependenciesToUpdate = [];
	mode === 'installation' && dependenciesToInstall.push('@morev/eslint-config');

	if (mode === 'update') {
		log.info(formatCliMessage(`Fetching the latest configuration version...`));
		const latestConfigVersion = await customExec(`npm view @morev/eslint-config version`)
			.then((version) => version)
			.catch(() => null);
		const executingConfigVersion = selfPackageJson.version!;

		if (!isNull(latestConfigVersion) && latestConfigVersion !== executingConfigVersion) {
			log.info(
				formatCliMessage(`
					We found that you are not running the latest version of the CLI.
					You are running <c>${executingConfigVersion}</c>, while the latest is <g>${latestConfigVersion}</g>.

					The process <y>can be continued</y>, but it is recommended
					to run a command that will use the <g>latest</g> version of the config.

					More information:
					<c>https://github.com/morevm/eslint-config#automatic-installation-via-cli</c>
				`),
			);

			const shouldContinue = await confirm({
				message: formatCliMessage(`Continue the updating process?`),
			});
			if (!shouldContinue || isCancel(shouldContinue)) return;
		}

		dependenciesToUpdate.push(`@morev/eslint-config@^${latestConfigVersion ?? executingConfigVersion}`);
	}

	if (!hasEslintDependency) {
		dependenciesToInstall.push('eslint');
	} else if (!isEslintVersionMatch) {
		log.warn(
			formatCliMessage(`
				You have a version of <c>ESLint</c> installed that is incompatible
				with the minimum required in this ESLint config.

				You have <c>${eslintVersionInUse!}</c>, minimal required is <c>${MINIMAL_ESLINT_VERSION}</c>.

				While the config <y>may</y> work with an incompatible version, this is not guaranteed
				and it is recommended to update the version of ESLint you are using.
			`),
		);

		const shouldUpdateEslint = await confirm({
			message: formatCliMessage(`Update to <c>eslint@${MINIMAL_ESLINT_VERSION}</c>?`),
		});
		if (isCancel(shouldUpdateEslint)) return;

		if (shouldUpdateEslint) {
			dependenciesToUpdate.push(`eslint@${MINIMAL_ESLINT_VERSION}`);
		}
	}

	if (!hasTypescriptDependency) {
		const shouldInstallTypescript = await confirm({
			message: formatCliMessage('Would you like to use <c>TypeScript</c>?'),
		});

		if (isCancel(shouldInstallTypescript)) return;
		if (shouldInstallTypescript) {
			dependenciesToInstall.push(`typescript`);
		}
	} else if (!isTypescriptVersionMatch) {
		log.warn(
			formatCliMessage(`
				You have a version of <c>TypeScript</c> installed that is incompatible
				with the minimum required in this ESLint config.

				You have <c>${typescriptVersionInUse!}</c>, minimal required is <c>${MINIMAL_TYPESCRIPT_VERSION}</c>.

				While the config <y>may</y> work with an incompatible version, this is not guaranteed
				and it is recommended to update the version of TypeScript you are using.
			`),
		);

		const shouldUpdateTypescript = await confirm({
			message: formatCliMessage(`Update to <c>typescript@${MINIMAL_TYPESCRIPT_VERSION}</c>?`),
		});
		if (isCancel(shouldUpdateTypescript)) return;

		if (shouldUpdateTypescript) {
			dependenciesToUpdate.push(`typescript@${MINIMAL_TYPESCRIPT_VERSION}`);
		}
	}

	const packagesToInstallFormatted = dependenciesToInstall
		.map((dependency) => `<g>${dependency}</g>`)
		.join('\n\t\t');

	const packagesToUpdateFormatted = dependenciesToUpdate
		.map((dependency) => `<y>${dependency}</y>`)
		.join('\n\t\t');

	const installCommand = dependenciesToInstall.length
		&& runAgentCommand(packageManager, 'add-dev', dependenciesToInstall);
	const upgradeCommand = dependenciesToUpdate.length
		&& runAgentCommand(packageManager, 'upgrade', dependenciesToUpdate);
	const allCommands = [installCommand, upgradeCommand].filter(Boolean);

	const installMessage = dependenciesToInstall.length && formatCliMessage(`
		Will install the following packages as <c>devDependencies</c>:

		${packagesToInstallFormatted}

		using the command
		<c>${installCommand}</c>
	`);

	const updateMessage = dependenciesToUpdate.length && formatCliMessage(`
		Will update the following packages:

		${packagesToUpdateFormatted}

		using the command
		<c>${upgradeCommand}</c>
	`);

	const infoMessage = [installMessage, updateMessage]
		.filter(Boolean)
		.join('\n\n-------- and --------\n\n');

	log.info(infoMessage);

	const confirmMessage = allCommands.length === 1
		? formatCliMessage(`Run the command <c>${allCommands[0]}</c>?`)
		: 'Run the commands above?';

	const shouldRunCommand = await confirm({
		message: confirmMessage,
	});

	if (isCancel(shouldRunCommand)) return;

	const installers = allCommands.map((command, index) => {
		const messages = command.includes('add')
			? {
				start: 'Installing dependencies...',
				success: 'Dependencies have been installed.',
				error: 'Failed to install the dependencies.',
			}
			: {
				start: 'Updating dependencies...',
				success: 'Dependencies have been updated.',
				error: 'Failed to update the dependencies.',
			};

		return { spinner: spinner(), messages, command };
	});

	for (const installer of installers) {
		installer.spinner.start(installer.messages.start);

		let error: string | null = null;
		const result = await customExec(installer.command)
			.catch((commandError: ExecException) => {
				error = commandError.message.trim();
				return null;
			});

		const stopMessage = isNull(result)
			? formatCliMessage(`
				<r>${installer.messages.error}</r>
			`)
			: formatCliMessage(`<g>${installer.messages.success}</g>`);
		installer.spinner.stop(stopMessage);

		!isNull(error) && log.error(error);
	}

	await sleep(smallDelay);
};
