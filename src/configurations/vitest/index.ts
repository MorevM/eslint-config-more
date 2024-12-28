import { isEmpty } from '@morev/utils';
import { GLOB_ANY_JS, GLOB_ANY_TS, GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { parserTypescript } from '#parsers';
import { pluginVitest } from '#plugins';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import vitest from './rules/vitest';

import type { VitestConfigurationOptions } from '#types';

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
			...pluginVitest.environments?.env.globals,
		};
	}

	return [
		defineConfigurationPart({
			name: 'morev/vitest/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/vitest/core-js',
			languageOptions,
			files,
			ignores: [...ignores, GLOB_ANY_TS],
			...mergeParts(vitest),
		}),
		defineConfigurationPart({
			name: 'morev/vitest/core-ts',
			languageOptions: {
				...languageOptions,
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
			ignores: [...ignores, GLOB_ANY_JS],
			...mergeParts(vitest),
		}),
		defineConfigurationPart({
			name: 'morev/vitest/disables',
			files,
			ignores,
			rules: {
				// It's better to be explicit in tests.
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/vitest/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
