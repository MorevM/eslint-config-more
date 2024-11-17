import { isEmpty } from '@morev/utils';
import { GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { parserTypescript } from '#parsers';
import { pluginJest } from '#plugins';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import jest from './rules/jest';

import type { JestConfigurationOptions } from '#types';

export default function configurationJest(options: Partial<JestConfigurationOptions> = {}) {
	const {
		files = [...GLOB_TESTS],
		overrides = {},
		ignores = [...GLOB_CYPRESS],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/jest/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/jest/core',
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
			),
		}),
		defineConfigurationPart({
			name: 'morev/jest/disables',
			files,
			ignores,
			rules: {
				// It's better to be explicit in tests.
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/jest/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
