import type { AnyConfigurationOptions } from '#types';
import { mergeParts } from '#utils';

import layoutAndFormatting from './rules/layout-and-formatting';
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
		files = ['**/*.*'],
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/javascript',
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					globalReturn: false,
					impliedStrict: true,
					jsx: true,
				},
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
			layoutAndFormatting,
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
			{
				rules: overrides,
			},
		),
	};
}
