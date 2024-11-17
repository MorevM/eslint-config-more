import { parserTypescript } from '#parsers';
import type { TypescriptConfigurationOptions } from '#types';
import { GLOB_TS, GLOB_TSX } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

import typescript from './rules/typescript';
import stylistic from './plugins/stylistic';

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
				{
					rules: overrides,
				},
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
	];
}
