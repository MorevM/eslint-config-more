/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
	rules: {
		// Support comment-directives in <template>
		// https://eslint.vuejs.org/rules/comment-directive.html
		'vue/comment-directive': ['warn', {
			reportUnusedDisableDirectives: true,
		}],

		// Prevent variables used in JSX to be marked as unused
		// https://eslint.vuejs.org/rules/jsx-uses-vars.html
		'vue/jsx-uses-vars': 'error',
	},
};
