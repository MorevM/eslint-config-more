import { pluginVue } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vue: pluginVue,
	},
	rules: {
		// Require key attribute for conditionally rendered repeated components (autofixable)
		// https://eslint.vuejs.org/rules/v-if-else-key.html
		'vue/v-if-else-key': 'error',
	},
});
