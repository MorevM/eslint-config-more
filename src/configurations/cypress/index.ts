import { pluginCypress } from '#plugins';
import type { CypressConfigurationOptions } from '#types';
import { GLOB_CYPRESS } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

import cypress from './rules/cypress';

export default function configurationCypress(options: Partial<CypressConfigurationOptions> = {}) {
	const {
		files = [...GLOB_CYPRESS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/cypress/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/cypress/core',
			languageOptions: {
				globals: {
					...pluginCypress.environments!.globals.globals,
				},
			},
			files,
			ignores,
			...mergeParts(
				cypress,
				{
					rules: overrides,
				},
			),
		}),
		defineConfigurationPart({
			name: 'morev/cypress/overrides',
			files,
			ignores,
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
	];
}
