import { pluginVue } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vue: pluginVue,
	},
	rules: {
		// Enforce order of `defineEmits` and `defineProps` compiler macros (autofixable)
		// https://eslint.vuejs.org/rules/define-macros-order.html
		'vue/define-macros-order': ['warn', {
			order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
			defineExposeLast: true,
		}],

		// Disallow using deprecated `$delete` and `$set` (in Vue.js 3.0.0+)
		// https://eslint.vuejs.org/rules/no-deprecated-delete-set.html
		'vue/no-deprecated-delete-set': 'error',

		// Disallow deprecated `model` definition (in Vue.js 3.0.0+)
		// https://eslint.vuejs.org/rules/no-deprecated-model-definition.html
		'vue/no-deprecated-model-definition': ['error', {
			allowVue3Compat: false,
		}],

		// Enforce use of `defineOptions` instead of default export (autofixable)
		// https://eslint.vuejs.org/rules/prefer-define-options.html
		'vue/prefer-define-options': 'warn',

		// Require declare public properties using `expose`
		// https://eslint.vuejs.org/rules/require-expose.html
		'vue/require-expose': 'error',

		// Require type definitions in emits
		// https://eslint.vuejs.org/rules/require-emit-validator.html
		'vue/require-emit-validator': 'error',

		// Require slots to be explicitly defined
		// https://eslint.vuejs.org/rules/require-explicit-slots.html
		'vue/require-explicit-slots': 'off',

		// Enforce valid `defineOptions` compiler macro
		// https://eslint.vuejs.org/rules/valid-define-options.html
		'vue/valid-define-options': 'error',
	},
});
