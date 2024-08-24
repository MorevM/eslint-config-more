import type { VitestConfigurationOptions } from '#types';
import { GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { mergeParts } from '#utils';
import vitest from './rules/vitest';
import { pluginVitest } from '#plugins';
import { parserTypescript } from '#parsers';

export default function configurationVitest(options: Partial<VitestConfigurationOptions> = {}) {
	const {
		files = [...GLOB_TESTS],
		overrides = {},
		ignores = [...GLOB_CYPRESS],
	} = options;

	return [
		{
			name: 'morev/vitest',
			languageOptions: {
				globals: {
					...pluginVitest.environments.env.globals,
				},
				parser: parserTypescript,
				parserOptions: {
					project: true,
					projectService: true,
					tsconfigRootDir: process.cwd(),
				},
			},
			settings: {
				vitest: {
					typecheck: true,
				},
			},
			files,
			ignores,
			...mergeParts(
				vitest,
				{
					rules: overrides,
				},
			),
		},
		{
			name: 'morev/vitest/overrides',
			files,
			ignores,
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	];
}
