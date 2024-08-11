/* @ts-expect-error -- No types https://github.com/babel/babel/issues/16221 */
import babelEslintParser from '@babel/eslint-parser';

import layoutAndFormatting from './rules/layout-and-formatting';
import possibleProblems from './rules/possible-problems';
import suggestions from './rules/suggestions';

import eslintComments from './plugins/eslint-comments';
import eslintImport from './plugins/import';
import eslintJsdoc from './plugins/jsdoc';
import eslintNoSecrets from './plugins/no-secrets';
import eslintRegexp from './plugins/regexp';
import eslintSonarjs from './plugins/sonarjs';
import eslintStylistic from './plugins/stylistic';
import eslintUnicorn from './plugins/unicorn';
import type { AnyConfigurationOptions } from '#types';
import { GLOB_SRC } from '#globs';
import { mergeParts } from '#utils';

export default function configurationJavascript(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_SRC],
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/javascript',
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: babelEslintParser,
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
			layoutAndFormatting,
			possibleProblems,
			suggestions,
			//
			eslintComments,
			// eslintImport,
			eslintJsdoc,
			eslintNoSecrets,
			eslintRegexp,
			eslintSonarjs,
			eslintStylistic,
			eslintUnicorn,
			{
				rules: overrides,
			},
		),
	};
}
