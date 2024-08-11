import globals from 'globals';

import unicorn from './rules/unicorn';

import type { AnyConfigurationOptions } from '#types';
import { GLOB_SRC } from '#globs';
import { mergeParts } from '#utils';

export default function configurationNode(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_SRC],
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
		files,
		ignores,
		...mergeParts(
			unicorn,
			{
				rules: overrides,
			},
		),
	};
}
