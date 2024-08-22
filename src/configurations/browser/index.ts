import globals from 'globals';

import unicorn from './rules/unicorn';

import type { AnyConfigurationOptions } from '#types';
import { mergeParts } from '#utils';

export default function configurationBrowser(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/browser',
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
		ignores,
		...mergeParts(
			unicorn,
			{
				rules: overrides,
			},
		),
	};
}
