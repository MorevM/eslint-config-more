import { pluginVue } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vue: pluginVue,
	},
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
});
