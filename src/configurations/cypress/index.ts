import { pluginCypress } from '#plugins';
import type { CypressConfigurationOptions } from '#types';
import { GLOB_CYPRESS } from '#globs';
import { mergeParts } from '#utils';

import cypress from './rules/cypress';

export default function configurationCypress(options: Partial<CypressConfigurationOptions> = {}) {
	const {
		files = [...GLOB_CYPRESS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/cypress',
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
		},
		{
			name: 'morev/cypress/overrides',
			files,
			ignores,
			rules: {
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	];
}
