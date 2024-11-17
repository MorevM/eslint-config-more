import { pluginVue } from '#plugins';
import { parserVue, parserTypescript } from '#parsers';
import type { VueConfigurationOptions } from '#types';
import { GLOB_VUE } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

import base from './rules/base';
import essential from './rules/essential';
import extension from './rules/extension';
import recommended from './rules/recommended';
import stronglyRecommended from './rules/strongly-recommended';
import uncategorized from './rules/uncategorized';

import essentialVue2 from './rules/vue2/essential';
import stronglyRecommendedVue2 from './rules/vue2/strongly-recommended';
import uncategorizedVue2 from './rules/vue2/uncategorized';

import essentialVue3 from './rules/vue3/essential';
import stronglyRecommendedVue3 from './rules/vue3/strongly-recommended';
import uncategorizedVue3 from './rules/vue3/uncategorized';

export default function configurationVue(options: Partial<VueConfigurationOptions> = {}) {
	const {
		files = [GLOB_VUE],
		overrides = {},
		ignores = [],
		typescript = true,
		version = 3,
	} = options;

	const baseRules = mergeParts(
		base,
		essential,
		extension,
		recommended,
		stronglyRecommended,
		uncategorized,
	);

	const vue2Rules = mergeParts(
		essentialVue2,
		stronglyRecommendedVue2,
		uncategorizedVue2,
	);

	const vue3Rules = mergeParts(
		essentialVue3,
		stronglyRecommendedVue3,
		uncategorizedVue3,
	);

	const rules = version === 2
		? mergeParts(baseRules, vue2Rules)
		: mergeParts(baseRules, vue3Rules);

	return [
		defineConfigurationPart({
			name: 'morev/vue/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/vue/core',
			languageOptions: {
				parser: parserVue,
				sourceType: 'module',
				ecmaVersion: 'latest',
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
					sourceType: 'module',
					extraFileExtensions: ['.vue'],
					parser: typescript ? parserTypescript : null,
				},
			},
			processor: pluginVue.processors!.vue,
			files,
			ignores,
			...mergeParts(
				rules,
				{
					rules: {
						'@stylistic/indent': 'off',
					},
				},
				{
					rules: overrides,
				},
			),
		}),
	];
}
