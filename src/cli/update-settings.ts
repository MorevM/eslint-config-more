import fs from 'node:fs';
import path from 'node:path';
import { confirm, isCancel, log } from '@clack/prompts';
import { formatSlashes, mergeObjects, sleep } from '@morev/utils';
import { parse } from 'jsonc-parser';
import { formatCliMessage } from './utils';
import type { PlainObject } from '@morev/utils';
import type { StepOptions } from './types';

const DIRECTORY_NAME = `.vscode`;
const FILE_NAME = `settings.json`;
const FULL_FILE_NAME = `${DIRECTORY_NAME}/${FILE_NAME}`;

const PROCESS_CONTINUE_MESSAGE = `
	<y>The process can continue</y>, and you will be able to create
	a file yourself with the provided content.
`;
const CONTINUE_QUESTION_MESSAGE = `Continue the process?`;

const SETTINGS = {
	'prettier.enable': false,
	'editor.codeActionsOnSave': {
		'source.fixAll.eslint': 'explicit',
	},
	'eslint.validate': [
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
		'vue',
		'astro',
		'html',
		'markdown',
		'json',
		'json5',
		'jsonc',
		'yaml',
	],
	'eslint.rules.customizations': [
		{ rule: '@stylistic/*', severity: 'warn', fixable: true },
		{ rule: '*-indent', severity: 'warn', fixable: true },
		{ rule: '*-spacing', severity: 'warn', fixable: true },
		{ rule: '*-spaces', severity: 'warn', fixable: true },
		{ rule: '*-order', severity: 'warn', fixable: true },
		{ rule: '*-dangle', severity: 'warn', fixable: true },
		{ rule: '*-newline', severity: 'warn', fixable: true },
		{ rule: '*quotes', severity: 'warn', fixable: true },
		{ rule: '*semi', severity: 'warn', fixable: true },
	],
};

export const updateSettings = async (stepOptions: StepOptions) => {
	const { delay, smallDelay } = stepOptions;

	const cwd = process.cwd();
	const directoryPath = path.join(cwd, DIRECTORY_NAME);
	const filePath = path.join(directoryPath, FILE_NAME);

	log.info(formatCliMessage(`Looking for an existed <c>${DIRECTORY_NAME}</c> directory...`));
	await sleep(delay);

	let isDirectoryFound = false;
	if (!fs.existsSync(directoryPath)) {
		log.warning(
			formatCliMessage(`
				<y>The \`${DIRECTORY_NAME}\` directory does not exists.</y>
				<y>Now you will be prompted to create a directory.</y>

				The process <y>will continue</y> even if you answer "No" -
				then you will see the contents of the file and you can create it yourself.
			`),
		);

		const shouldCreateDirectory = await confirm({
			message: formatCliMessage(`
				Create <c>${DIRECTORY_NAME}</c> directory by path <c>${formatSlashes(directoryPath, { to: `/` })}</c>?
			`),
		});

		if (isCancel(shouldCreateDirectory)) return;

		if (shouldCreateDirectory) {
			try {
				fs.mkdirSync(directoryPath, { recursive: true });
				log.success(
					formatCliMessage(`
						<g>The \`${DIRECTORY_NAME}\` directory has been created.</g>
						Directory path: <c>${formatSlashes(directoryPath, { to: `/` })}</c>
					`),
				);
			} catch {
				log.error(
					formatCliMessage(`
						<r>Failed to create the \`${DIRECTORY_NAME}\` directory.</r>
						${PROCESS_CONTINUE_MESSAGE}
					`),
				);

				const shouldContinue = await confirm({
					message: CONTINUE_QUESTION_MESSAGE,
				});
				if (!shouldContinue || isCancel(shouldContinue)) return;
			}
		}
	} else {
		isDirectoryFound = true;
		log.step(
			formatCliMessage(`
				Found existed <c>${DIRECTORY_NAME}</c> directory.
				Path: <c>${formatSlashes(directoryPath, { to: `/` })}</c>
			`),
		);
	}

	await sleep(smallDelay);

	let existedVscodeSettings = null;
	let isFileFound = false;

	if (isDirectoryFound) {
		log.info(formatCliMessage(`Looking for an existed <c>${FULL_FILE_NAME}</c> file...`));
		await sleep(delay);

		if (fs.existsSync(filePath)) {
			log.step(
				formatCliMessage(`
				Found existed <c>${FULL_FILE_NAME}</c> file.
				Path: <c>${formatSlashes(filePath, { to: `/` })}</c>
			`),
			);
			await sleep(smallDelay);
			isFileFound = true;

			try {
				log.info(formatCliMessage(`Trying to read the <c>${FULL_FILE_NAME}</c> file...`));
				await sleep(delay);

				const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });

				log.step(formatCliMessage(`File <c>${FULL_FILE_NAME}</c> has been read.`));

				try {
					log.info(formatCliMessage(`Trying to parse the contents of the <c>${FULL_FILE_NAME}</c> file...`));
					await sleep(delay);

					// TODO: Try to save the existing file comments and other JSONC formatting
					// https://www.npmjs.com/package/jsonc-parser
					existedVscodeSettings = parse(fileContents) as PlainObject;
					log.step(
						formatCliMessage(`
						Parsed the contents of the <c>${FULL_FILE_NAME}</c> file.
					`),
					);
				} catch {
					log.error(
						formatCliMessage(`
						<r>Failed to parse the content of existing \`${FULL_FILE_NAME}\` as JSON.</r>
						${PROCESS_CONTINUE_MESSAGE}
					`),
					);

					const shouldContinue = await confirm({
						message: `Continue the process?`,
					});
					// eslint-disable-next-line max-depth -- Well, this is just step-by-step utility
					if (!shouldContinue || isCancel(shouldContinue)) return;
				}
			} catch {
				log.error(
					formatCliMessage(`
					<r>Failed to fetch the content of existing \`${FULL_FILE_NAME}\`.</r>
					${PROCESS_CONTINUE_MESSAGE}
				`),
				);

				const shouldContinue = await confirm({
					message: `Continue the process?`,
				});
				if (!shouldContinue || isCancel(shouldContinue)) return;
			}
		} else {
			log.info(formatCliMessage(`The existed <c>${FULL_FILE_NAME}</c> file was not found.`));
			await sleep(smallDelay);
		}
	}

	log.info(formatCliMessage(`Forming the new contents of the <c>${FULL_FILE_NAME}</c> file...`));
	await sleep(delay);

	const mergedSettings = mergeObjects(existedVscodeSettings ?? {}, SETTINGS);

	// eslint-disable-next-line no-autofix/prefer-template -- Better to do this way here
	const newContents = JSON.stringify(mergedSettings, null, '\t') + '\n';
	const newContentsWithComments = newContents
		// Prepend comments
		.replace(/(\t"prettier\.enable")/, '\t// ESLint handles formatting.\n$1')
		.replace(/(\t"editor\.codeActionsOnSave")/, '\n\t// Turn autofix on.\n$1')
		.replace(/(\t"eslint\.validate")/, '\n\t// Enable ESLint for all files that could\n\t// potentially be processed by ESLint.\n$1')
		.replace(/(\t"eslint\.rules\.customizations")/, '\n\t// Just warn about stylistic errors that will be fixed automatically on save.\n$1')
		// Put each customization on one line
		.replaceAll(/{\s*"rule.*?}/gs, (substring) => substring.replaceAll(/\s+/g, ' '))
		// Append trailing commas
		.replaceAll(/(\n\s*[\]}])/g, ',$1');

	log.success(formatCliMessage(`New contents of the <c>${FULL_FILE_NAME}</c> file:`));
	log.message(newContentsWithComments);

	const verb = isFileFound ? 'Update' : 'Create';
	const shouldCreateFile = await confirm({
		message: formatCliMessage(`${verb} the <c>${FULL_FILE_NAME}</c> file with the content above?`),
	});

	if (!shouldCreateFile || isCancel(shouldCreateFile)) return;

	if (shouldCreateFile) {
		try {
			fs.mkdirSync(directoryPath, { recursive: true });
			fs.writeFileSync(filePath, newContentsWithComments);
			log.success(
				formatCliMessage(`
					<g>The \`${FULL_FILE_NAME}\` file has been ${verb.toLowerCase()}d.</g>
					File path: <c>${formatSlashes(filePath, { to: `/` })}</c>
				`),
			);
		} catch {
			log.error(formatCliMessage(`
				<r>Failed to create the \`${FULL_FILE_NAME}\` file.</r>
				Please create the file yourself using the content above.
			`));
		}
	}
};
