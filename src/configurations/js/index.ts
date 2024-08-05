import type { FlatESLintConfig } from 'eslint-define-config';
/* @ts-expect-error -- No types https://github.com/babel/babel/issues/16221 */
import babelEslintParser from '@babel/eslint-parser';

import layoutAndFormatting from "./rules/layout-and-formatting";
import possibleProblems from "./rules/possible-problems";
import suggestions from "./rules/suggestions";

import eslintComments from "./plugins/eslint-comments";
import eslintImport from './plugins/import';
import eslintJsdoc from "./plugins/jsdoc";
import eslintNoSecrets from "./plugins/no-secrets";
import eslintRegexp from "./plugins/regexp";
import eslintSonarjs from "./plugins/sonarjs";
import eslintStylistic from "./plugins/stylistic";
import eslintUnicorn from "./plugins/unicorn";
import { arrayUnique, createMergeObjects, mergeObjects } from '@morev/utils';
import { AnyConfigurationOptions } from '#types';
import { GLOB_ANY_JS } from '#globs';

const mergeParts = (...objects: any[]) => {
	return {
		plugins: objects.reduce((acc, curr) => ({ ...acc, ...curr.plugins }), {}),
		rules: objects.reduce((acc, curr) => ({ ...acc, ...curr.rules }), {}),
	}
}

export default function configurationJavascript(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_ANY_JS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/javascript/setup',
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: babelEslintParser,
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
			}
		},
		{
			name: 'morev/javascript/rules',
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
				}
			),
		}
	]
}
