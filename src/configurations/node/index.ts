import { isEmpty } from '@morev/utils';
import globals from 'globals';
import { GLOB_ANY_CONTAINING_JS } from '#globs';
import { defineConfigurationPart, hasTsconfig, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import node from './rules/node';

import type { AnyConfigurationOptions } from '#types';

const tryExtensions = ['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts'];

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
	hasTsconfig() && (nSettings.tsconfigPath = './tsconfig.json');

	return [
		defineConfigurationPart({
			name: 'morev/node/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/node/core',
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
			),
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/node/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
