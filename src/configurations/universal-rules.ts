import { pluginStylistic } from '#plugins';
import { defineConfigurationPart } from '#utils';

/**
 * ESLint rules that can be applied to any file in any format.
 */
export const universalRules = defineConfigurationPart({
	plugins: {
		'@stylistic': pluginStylistic,
	},
	rules: {
		// Require or disallow newline at the end of files (autofixable)
		// https://eslint.style/rules/js/eol-last
		'@stylistic/eol-last': ['warn', 'always'],

		// Enforce consistent linebreak style (autofixable)
		// https://eslint.style/rules/js/linebreak-style
		'@stylistic/linebreak-style': ['error', 'unix'],

		// Disallow multiple empty lines (autofixable)
		// https://eslint.style/rules/js/no-multiple-empty-lines
		// Note: only one newline at the end, and no new lines at the beginning
		'@stylistic/no-multiple-empty-lines': ['warn', {
			max: 2,
			maxBOF: 0,
			maxEOF: 0,
		}],

		// Disallow trailing whitespace at the end of lines (autofixable)
		// https://eslint.style/rules/js/no-trailing-spaces
		'@stylistic/no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// Require or disallow Unicode byte order mark (BOM) (autofixable)
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	},
});
