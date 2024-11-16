import { pluginVitest } from '#plugins';
import { parserTypescript } from '#parsers';
import type { VitestConfigurationOptions } from '#types';
import { GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { hasTsconfig, mergeParts } from '#utils';

import vitest from './rules/vitest';

export default function configurationVitest(options: Partial<VitestConfigurationOptions> = {}) {
	const {
		files = [...GLOB_TESTS],
		overrides = {},
		ignores = [...GLOB_CYPRESS],
		globals = true,
	} = options;

	const languageOptions: Record<string, any> = {};

	if (globals) {
		languageOptions.globals = {
			...pluginVitest.environments.env.globals,
		};
	}

	if (hasTsconfig()) {
		languageOptions.parser = parserTypescript;
		languageOptions.parserOptions = {
			project: true,
			projectService: true,
			tsconfigRootDir: process.cwd(),
		};
	}

	const settingsVitest = hasTsconfig()
		? { typecheck: true }
		: {};

	return [
		{
			name: 'morev/vitest',
			languageOptions,
			settings: {
				vitest: settingsVitest,
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
