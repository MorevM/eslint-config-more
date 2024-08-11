import { parser } from 'typescript-eslint';

import typescript from './rules/typescript';

import type { TypescriptConfigurationOptions } from '#types';
import { GLOB_TS, GLOB_TSX } from '#globs';
import { mergeParts } from '#utils';

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

	return {
		name: 'morev/typescript',
		languageOptions: {
			parser,
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
			{
				rules: overrides,
			},
		),
	};
}
