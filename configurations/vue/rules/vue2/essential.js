module.exports = {
	rules: {
		// Disallow reserved names in props
		// https://eslint.vuejs.org/rules/no-reserved-props.html
		'vue/no-reserved-props': ['error', {
			vueVersion: 2,
		}],

		// Disallow custom modifiers on v-model used on the component
		// https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
		'vue/no-custom-modifiers-on-v-model': 'error',

		// Disallow adding multiple root nodes to the template
		// https://eslint.vuejs.org/rules/no-multiple-template-root.html
		'vue/no-multiple-template-root': 'error',

		// Disallow `key` attribute on `<template v-for>`
		// https://eslint.vuejs.org/rules/no-v-for-template-key.html
		'vue/no-v-for-template-key': 'error',

		// Disallow adding an argument to v-model used in custom component
		// https://eslint.vuejs.org/rules/no-v-model-argument.html
		'vue/no-v-model-argument': 'error',

		// Require valid keys in model option
		// https://eslint.vuejs.org/rules/valid-model-definition.html
		'vue/valid-model-definition': 'error',

		// Enforce valid `.sync` modifier on `v-bind` directives
		// https://eslint.vuejs.org/rules/valid-v-bind-sync.html
		'vue/valid-v-bind-sync': 'error',
	},
};
