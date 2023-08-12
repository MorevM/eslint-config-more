module.exports = {
	rules: {
		// Disallow reserved names in props
		// https://eslint.vuejs.org/rules/no-reserved-props.html
		'vue/no-reserved-props': ['error', {
			vueVersion: 3,
		}],

		// Disallow using deprecated object declaration on `data`(autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
		'+vue/no-deprecated-data-object-declaration': 'error',

		// Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks
		// (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
		'+vue/no-deprecated-destroyed-lifecycle': 'error',

		// Disallow using deprecated `$listeners`
		// https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
		'vue/no-deprecated-dollar-listeners-api': 'error',

		// Disallow using deprecated `$scopedSlots` (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
		'+vue/no-deprecated-dollar-scopedslots-api': 'error',

		// Disallow using deprecated events api
		// https://eslint.vuejs.org/rules/no-deprecated-events-api.html
		'vue/no-deprecated-events-api': 'error',

		// Disallow using deprecated filters syntax
		// https://eslint.vuejs.org/rules/no-deprecated-filter.html
		'vue/no-deprecated-filter': 'error',

		// Disallow using deprecated the `functional` template
		// https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
		'vue/no-deprecated-functional-template': 'error',

		// Disallow using deprecated the `is` attribute on HTML elements
		// https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
		'vue/no-deprecated-html-element-is': 'error',

		// Disallow using deprecated `inline-template` attribute
		// https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
		'vue/no-deprecated-inline-template': 'error',

		// Disallow deprecated `this` access in props default function
		// https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
		'vue/no-deprecated-props-default-this': 'error',

		// Disallow using deprecated `tag` property on `RouterLink`
		// https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
		'vue/no-deprecated-router-link-tag-prop': ['error', {
			components: ['RouterLink', 'NuxtLink'],
		}],

		// Disallow deprecated `scope` attribute (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
		'+vue/no-deprecated-scope-attribute': 'error',

		// Disallow deprecated `slot` attribute (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
		'+vue/no-deprecated-slot-attribute': 'error',

		// Disallow deprecated `slot-scope` attribute (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
		'+vue/no-deprecated-slot-scope-attribute': 'error',

		// Disallow use of deprecated `.sync` modifier on `v-bind` directive
		// (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
		'+vue/no-deprecated-v-bind-sync': 'error',

		// Disallow deprecated `v-is` directive (autofixable but seems broken)
		// https://eslint.vuejs.org/rules/no-deprecated-v-is.html
		'!vue/no-deprecated-v-is': 'error',

		// Disallow using deprecated `.native` modifiers
		// https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
		'vue/no-deprecated-v-on-native-modifier': 'error',

		// Disallow using deprecated number (keycode) modifiers (autofixable)
		// https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
		'vue/no-deprecated-v-on-number-modifiers': 'error',

		// Disallow using deprecated `Vue.config.keyCodes`
		// https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
		'vue/no-deprecated-vue-config-keycodes': 'error',

		// Disallow `export` in `<script setup>`
		// https://eslint.vuejs.org/rules/no-export-in-script-setup.html
		'vue/no-export-in-script-setup': 'error',

		// Disallow asynchronously registered lifecycle hooks
		// https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
		'vue/no-lifecycle-after-await': 'error',

		// Disallow use of value wrapped by `ref()` (Composition API) as an operand
		// (autofixable)
		// https://eslint.vuejs.org/rules/no-ref-as-operand.html
		'+vue/no-ref-as-operand': 'error',

		// Disallow destructuring of props passed to setup
		// https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html
		// Reason to off: https://github.com/vuejs/eslint-plugin-vue/issues/2259
		'vue/no-setup-props-reactivity-loss': 'off',

		// Disallow key of `<template v-for>` placed on child elements
		// https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
		'vue/no-v-for-template-key-on-child': 'error',

		// Disallow asynchronously registered `watch`
		// https://eslint.vuejs.org/rules/no-watch-after-await.html
		'vue/no-watch-after-await': 'error',

		// Enforce import from `vue` instead of import from `@vue/*`
		// https://eslint.vuejs.org/rules/prefer-import-from-vue.html
		'vue/prefer-import-from-vue': 'error',

		// Enforce properties of `$slots` to be used as a function
		// https://eslint.vuejs.org/rules/require-slots-as-functions.html
		'vue/require-slots-as-functions': 'error',

		// Require control the display of the content inside `<transition>`
		// https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
		'vue/require-toggle-inside-transition': 'warn',

		// Enforce that a return statement is present in emits validator
		// https://eslint.vuejs.org/rules/return-in-emits-validator.html
		'vue/return-in-emits-validator': 'error',

		// Enforce valid `defineEmits` compiler macro
		// https://eslint.vuejs.org/rules/valid-define-emits.html
		'vue/valid-define-emits': 'error',

		// Enforce valid `defineProps` compiler macro
		// https://eslint.vuejs.org/rules/valid-define-props.html
		'vue/valid-define-props': 'error',

		// Enforce valid `v-is` directives
		// https://eslint.vuejs.org/rules/valid-v-is.html
		'vue/valid-v-is': 'error',

		// Enforce valid `v-memo` directives
		// https://eslint.vuejs.org/rules/valid-v-memo.html
		'vue/valid-v-memo': 'error',
	},
};
