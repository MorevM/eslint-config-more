import globals from 'globals';
import type { AnyConfigurationOptions } from '#types';
import { defineConfigurationPart, mergeParts } from '#utils';
import { GLOB_ANY_CONTAINING_JS } from '#globs';

import { universalRules } from '~configurations/universal-rules';

import unicorn from './rules/unicorn';

export default function configurationBrowser(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_ANY_CONTAINING_JS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/browser/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/browser/core',
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: {
					...globals.browser,
				},
				parserOptions: {
					ecmaFeatures: {
						globalReturn: false,
						impliedStrict: true,
						jsx: true,
					},
				},
			},
			files,
			ignores,
			...mergeParts(
				unicorn,
				{
					rules: overrides,
				},
			),
		}),
	];
}
