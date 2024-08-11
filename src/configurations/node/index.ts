import globals from 'globals';

import node from './rules/node';

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
		name: 'morev/node',
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
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
			node,
			{
				rules: overrides,
			},
		),
	};
}
