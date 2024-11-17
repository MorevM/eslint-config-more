import { isEmpty } from '@morev/utils';
import { GLOB_TS, GLOB_TSX } from '#globs';
import { parserTypescript } from '#parsers';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import stylistic from './plugins/stylistic';

import typescript from './rules/typescript';

import type { TypescriptConfigurationOptions } from '#types';

export default function configurationTypescript(options: Partial<TypescriptConfigurationOptions> = {}) {
	const {
		overrides = {},
		ignores = [],
		extraFileExtensions = [],
	} = options;

	const files = options.files ?? [
		GLOB_TS,
		GLOB_TSX,
		...extraFileExtensions.map((extension) => `../*.${extension}`),
	];

	return [
		defineConfigurationPart({
			name: 'morev/typescript/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/typescript/core',
			languageOptions: {
				parser: parserTypescript,
				ecmaVersion: 'latest',
				sourceType: 'module',
				parserOptions: {
					extraFileExtensions: extraFileExtensions.map((extension) => `.${extension}`),
					project: true,
					projectService: true,
					tsconfigRootDir: process.cwd(),
				},
			},
			files,
			ignores,
			...mergeParts(
				typescript,
				stylistic,
			),
		}),
		defineConfigurationPart({
			name: 'morev/typescript/disables',
			files,
			ignores,
			rules: {
				'no-undef': 'off',
				'no-duplicate-imports': 'off',
				'unicorn/prefer-json-parse-buffer': 'off',
				'jsdoc/require-returns-type': 'off',
				'jsdoc/require-param-type': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/typescript/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
