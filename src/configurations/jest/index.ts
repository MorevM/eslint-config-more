import { pluginJest } from '#plugins';
import { parserTypescript } from '#parsers';
import type { JestConfigurationOptions } from '#types';
import { GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { mergeParts } from '#utils';

import jest from './rules/jest';

export default function configurationJest(options: Partial<JestConfigurationOptions> = {}) {
	const {
		files = [...GLOB_TESTS],
		overrides = {},
		ignores = [...GLOB_CYPRESS],
	} = options;

	return [
		{
			name: 'morev/jest',
			languageOptions: {
				globals: {
					// @ts-expect-errorr -- Trust me they exist
					...pluginJest.environments.globals.globals,
				},
				parser: parserTypescript,
				parserOptions: {
					project: true,
					projectService: true,
					tsconfigRootDir: process.cwd(),
				},
			},
			files,
			ignores,
			...mergeParts(
				jest,
				{
					rules: overrides,
				},
			),
		},
		{
			name: 'morev/jest/overrides',
			files,
			ignores,
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	];
}
