import fs from 'node:fs';
import path from 'node:path';
import globals from 'globals';
import type { AnyConfigurationOptions } from '#types';
import { mergeParts } from '#utils';
import { GLOB_ANY_CONTAINING_JS } from '#globs';

import node from './rules/node';

const tryExtensions = ['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts'];

const hasTsConfig = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));

export default function configurationNode(options: Partial<AnyConfigurationOptions> = {}) {
	// TODO: Option to provide a tsconfig path and (?) to customize `n/file-extension-in-import`
	// to respect `allowImportingTsExtensions` tsconfig.json setting,
	// and maybe for all the rest options in https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/shared-settings.md
	const {
		files = [GLOB_ANY_CONTAINING_JS],
		overrides = {},
		ignores = [],
	} = options;

	const nSettings: Record<string, any> = {
		tryExtensions: [
			...tryExtensions,
			...tryExtensions.map((extension) => `/index${extension}`),
		],
	};
	hasTsConfig && (nSettings.tsconfigPath = './tsconfig.json');

	return {
		name: 'morev/node',
		settings: {
			n: nSettings,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: true,
					jsx: true,
				},
			},
		},
		files,
		ignores,
		...mergeParts(
			node,
			{
				rules: overrides,
			},
		),
	};
}
