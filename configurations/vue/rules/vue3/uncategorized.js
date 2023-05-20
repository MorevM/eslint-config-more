module.exports = {
	rules: {
		// Enforce order of `defineEmits` and `defineProps` compiler macros (autofixable)
		// https://eslint.vuejs.org/rules/define-macros-order.html
		'+vue/define-macros-order': ['warn', {
			order: ['defineProps', 'defineEmits'],
		}],

		// Require declare public properties using `expose`
		// https://eslint.vuejs.org/rules/require-expose.html
		'vue/require-expose': 'error',

		// Require type definitions in emits
		// https://eslint.vuejs.org/rules/require-emit-validator.html
		'vue/require-emit-validator': 'error',
	},
};
