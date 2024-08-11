/* @ts-expect-error -- No types https://github.com/babel/babel/issues/16221 */
import babelEslintParser from '@babel/eslint-parser';

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
			parser: babelEslintParser,
			globals: {
				...globals.node,
			},
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ['@babel/preset-env'],
				},
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
