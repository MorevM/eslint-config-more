import { isEmpty } from '@morev/utils';
import type { AnyConfigurationOptions } from '#types';
import { defineConfigurationPart, mergeParts } from '#utils';
import { GLOB_ANY_CONTAINING_JS } from '#globs';

import { universalRules } from '~configurations/universal-rules';

import possibleProblems from './rules/possible-problems';
import suggestions from './rules/suggestions';

import eslintCommand from './plugins/command';
import eslintComments from './plugins/eslint-comments';
import eslintImportX from './plugins/import-x';
import eslintJsdoc from './plugins/jsdoc';
import eslintNoSecrets from './plugins/no-secrets';
import eslintRegexp from './plugins/regexp';
import eslintSonarjs from './plugins/sonarjs';
import eslintStylistic from './plugins/stylistic';
import eslintUnicorn from './plugins/unicorn';

export default function configurationJavascript(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_ANY_CONTAINING_JS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/javascript/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/javascript/core',
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parserOptions: {
					ecmaFeatures: {
						globalReturn: false,
						impliedStrict: true,
						jsx: true,
					},
					ecmaVersion: 'latest',
				},
			},
			settings: {
				'import-x/parsers': {
					'@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
				},
				'import-x/resolver': {
					node: true,
					typescript: true,
				},
				'import-x/extensions': ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx'],
				'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
				'import-x/ignore': ['node_modules'],
			},
			files,
			ignores,
			...mergeParts(
				possibleProblems,
				suggestions,
				//
				eslintComments,
				eslintImportX,
				eslintJsdoc,
				eslintNoSecrets,
				eslintRegexp,
				eslintSonarjs,
				eslintStylistic,
				eslintUnicorn,
				eslintCommand,
			),
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/javascript/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
