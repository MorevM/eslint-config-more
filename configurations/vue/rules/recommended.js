/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
	rules: {
		// Enforce order of attributes (autofixable)
		// https://eslint.vuejs.org/rules/attributes-order.html
		'+vue/attributes-order': ['warn', {
			order: [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'OTHER_DIRECTIVES',
				'GLOBAL',
				'UNIQUE',
				'TWO_WAY_BINDING',
				'ATTR_STATIC',
				'ATTR_SHORTHAND_BOOL',
				'ATTR_DYNAMIC',
				'EVENTS',
				'CONTENT',
			],
			alphabetical: false,
		}],

		// Enforce order of component top-level elements (autofixable)
		// https://eslint.vuejs.org/rules/component-tags-order.html
		'+vue/component-tags-order': ['warn', {
			order: ['template', 'script', 'style', 'i18n'],
		}],

		// Disallow unnecessary `<template>`
		// https://eslint.vuejs.org/rules/no-lone-template.html
		'vue/no-lone-template': ['error', {
			ignoreAccessible: false, // no effect in vue2 but let this thing be here
		}],

		// Disallow to pass multiple arguments to scoped slots
		// https://eslint.vuejs.org/rules/no-multiple-slot-args.html
		'vue/no-multiple-slot-args': 'error',

		// Disallow use of v-html to prevent XSS attack
		// https://eslint.vuejs.org/rules/no-v-html.html
		'vue/no-v-html': 'off',

		// Enforce order of properties in components (autofixable)
		// https://eslint.vuejs.org/rules/order-in-components.html
		'+vue/order-in-components': ['warn', {
			order: [
				'el',
				'name',
				'inheritAttrs',
				'key',
				'parent',
				'functional',
				'extends',
				'mixins',
				['delimiters', 'comments'],
				['components', 'directives', 'filters'],
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
				'validate',
				'scrollToTop',
				'transition',
				'loading',
				'model',
				['props', 'propsData'],
				'emits',
				'setup',
				'fetch',
				'asyncData',
				'data',
				'head',
				'computed',
				'watch',
				'watchQuery',
				'methods',
				'LIFECYCLE_HOOKS',
				['template', 'render'],
				'renderError',
			],
		}],

		// Disallow usage of this in template (autofixable)
		// https://eslint.vuejs.org/rules/this-in-template.html
		'+vue/this-in-template': ['warn', 'never'],
	},
};
