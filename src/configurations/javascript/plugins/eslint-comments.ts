import eslintPluginComments from 'eslint-plugin-eslint-comments';
import eslintPluginNoAutofix from 'eslint-plugin-no-autofix';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig({
	plugins: {
		'eslint-comments': eslintPluginComments,
		'no-autofix': eslintPluginNoAutofix,
	},
	rules: {
		// Require a `eslint-enable` comment for every `eslint-disable` comment
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
		'eslint-comments/disable-enable-pair': ['error', {
			allowWholeFile: true,
		}],

		// Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
		'eslint-comments/no-aggregating-enable': 'error',

		// Disallow duplicate `eslint-disable` comments
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
		'eslint-comments/no-duplicate-disable': 'error',

		// Disallow `eslint-disable` comments without rule names
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
		// Note: It's usually obvious what's wrong here
		'eslint-comments/no-unlimited-disable': 'off',

		// Disallow unused `eslint-disable` comments (autofixable but confusing)
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
		'eslint-comments/no-unused-disable': 'off',
		'no-autofix/eslint-comments/no-unused-disable': 'warn',

		// Disallow unused `eslint-enable` comments
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
		'eslint-comments/no-unused-enable': 'error',

		// Disallow `eslint-disable` comments about specific rules
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
		'eslint-comments/no-restricted-disable': 'off',

		// Disallow ESLint directive-comments
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
		'eslint-comments/no-use': ['warn', {
			allow: [
				'eslint-disable',
				'eslint-disable-line',
				'eslint-disable-next-line',
				'eslint-enable',
				'global',
				'globals',
			],
		}],

		// Require include descriptions in ESLint directive-comments
		// https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
		// Note: Usually it's obvious
		'eslint-comments/require-description': 'off',
	},
})
