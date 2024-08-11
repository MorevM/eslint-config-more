import globals from 'globals';

import node from './rules/node';

import type { AnyConfigurationOptions } from '#types';
import { GLOB_SRC } from '#globs';
import { mergeParts } from '#utils';

export default function configurationNode(options: Partial<AnyConfigurationOptions> = {}) {
	// TODO: Option to provide a tsconfig path and (?) to customize `n/file-extension-in-import`
	// to respect `allowImportingTsExtensions` tsconfig.json setting,
	// and maybe for all the rest options in https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/shared-settings.md
	const {
		files = [GLOB_SRC],
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/node',
		settings: {
			node: {
				tsconfigPath: './tsconfig.json',
				tryExtensions: ['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts'],
			},
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
