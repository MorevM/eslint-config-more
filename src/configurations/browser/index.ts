/* @ts-expect-error -- No types https://github.com/babel/babel/issues/16221 */
import babelEslintParser from '@babel/eslint-parser';

import globals from 'globals';

import unicorn from './rules/unicorn';

import { AnyConfigurationOptions } from '#types';
import { GLOB_ANY_JS } from '#globs';
import { mergeParts } from '#utils';

export default function configurationNode(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_ANY_JS],
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/browser',
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: babelEslintParser,
			globals: {
				...globals.browser,
			},
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ["@babel/preset-env"]
				},
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: true,
					jsx: true,
				},
			}
		},
		files,
		ignores,
		...mergeParts(
			unicorn,
			{
				rules: overrides,
			}
		),
	}
}
