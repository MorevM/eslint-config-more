/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
	rules: {
		// Require component names to be always multi-word
		// https://eslint.vuejs.org/rules/multi-word-component-names.html
		'vue/multi-word-component-names': ['error', {
			ignores: [],
		}],

		// Disallow using arrow functions to define watcher
		// https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
		'vue/no-arrow-functions-in-watch': 'error',

		// Disallow asynchronous actions in computed properties
		// https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
		'vue/no-async-in-computed-properties': 'error',

		// Disallow accessing computed properties in `data`
		// https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
		'vue/no-computed-properties-in-data': 'error',

		// Disallow duplication of field names
		// https://eslint.vuejs.org/rules/no-dupe-keys.html
		'vue/no-dupe-keys': 'error',

		// Disallow duplicate conditions in `v-if` / `v-else-if` chains
		// https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
		'vue/no-dupe-v-else-if': 'error',

		// Disallow duplication of attributes
		// https://eslint.vuejs.org/rules/no-duplicate-attributes.html
		'vue/no-duplicate-attributes': ['error', {
			allowCoexistClass: true,
			allowCoexistStyle: true,
		}],

		// Disallow mutation of component props
		// https://eslint.vuejs.org/rules/no-mutating-props.html
		'vue/no-mutating-props': ['error', {
			shallowOnly: true,
		}],

		// Disallow parsing errors in `<template>`
		// https://eslint.vuejs.org/rules/no-parsing-error.html
		// Note: all default
		'vue/no-parsing-error': ['error', {
			'abrupt-closing-of-empty-comment': true,
			'absence-of-digits-in-numeric-character-reference': true,
			'cdata-in-html-content': true,
			'character-reference-outside-unicode-range': true,
			'control-character-in-input-stream': true,
			'control-character-reference': true,
			'eof-before-tag-name': true,
			'eof-in-cdata': true,
			'eof-in-comment': true,
			'eof-in-tag': true,
			'incorrectly-closed-comment': true,
			'incorrectly-opened-comment': true,
			'invalid-first-character-of-tag-name': true,
			'missing-attribute-value': true,
			'missing-end-tag-name': true,
			'missing-semicolon-after-character-reference': true,
			'missing-whitespace-between-attributes': true,
			'nested-comment': true,
			'noncharacter-character-reference': true,
			'noncharacter-in-input-stream': true,
			'null-character-reference': true,
			'surrogate-character-reference': true,
			'surrogate-in-input-stream': true,
			'unexpected-character-in-attribute-name': true,
			'unexpected-character-in-unquoted-attribute-value': true,
			'unexpected-equals-sign-before-attribute-name': true,
			'unexpected-null-character': true,
			'unexpected-question-mark-instead-of-tag-name': true,
			'unexpected-solidus-in-tag': true,
			'unknown-named-character-reference': true,
			'end-tag-with-attributes': true,
			'duplicate-attribute': true,
			'end-tag-with-trailing-solidus': true,
			'non-void-html-element-start-tag-with-trailing-solidus': false,
			'x-invalid-end-tag': true,
			'x-invalid-namespace': true,
		}],

		// Disallow overwriting reserved keys
		// https://eslint.vuejs.org/rules/no-reserved-keys.html
		'vue/no-reserved-keys': ['error', {
			reserved: [
				'$data', '$props', '$el', '$options', '$parent', '$root', '$children',
				'$slots', '$scopedSlots', '$refs', '$isServer', '$attrs', '$listeners',
				'$watch', '$set', '$delete', '$on', '$once', '$off', '$emit', '$mount',
				'$forceUpdate', '$nextTick', '$destroy',
			],
			groups: [],
		}],

		// Disallow reserved names in props
		// https://eslint.vuejs.org/rules/no-reserved-props.html
		// Note: different between vue 2 and 3, included separately

		// Enforce component's `data` property to be a function (autofixable)
		// https://eslint.vuejs.org/rules/no-shared-component-data.html
		'+vue/no-shared-component-data': 'error',

		// Disallow side effects in computed properties
		// https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
		'vue/no-side-effects-in-computed-properties': 'error',

		// Disallow `key` attribute on `<template>`
		// https://eslint.vuejs.org/rules/no-template-key.html
		'vue/no-template-key': 'error',

		// Disallow mustaches in `<textarea>`
		// https://eslint.vuejs.org/rules/no-textarea-mustache.html
		'vue/no-textarea-mustache': 'error',

		// Disallow registering components that are not used inside templates
		// https://eslint.vuejs.org/rules/no-unused-components.html
		'vue/no-unused-components': ['error', {
			ignoreWhenBindingPresent: true,
		}],

		// Disallow unused variable definitions of v-for directives or scope attributes
		// https://eslint.vuejs.org/rules/no-unused-vars.html
		'vue/no-unused-vars': ['error', {
			ignorePattern: '^_',
		}],

		// Disallow use v-if on the same element as v-for
		// https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
		'vue/no-use-v-if-with-v-for': ['error', {
			allowUsingIterationVar: false,
		}],

		// Disallow useless attribute on `<template>`
		// https://eslint.vuejs.org/rules/no-useless-template-attributes.html
		'vue/no-useless-template-attributes': 'error',

		// Require `v-bind:is` of `<component>` elements
		// https://eslint.vuejs.org/rules/require-component-is.html
		'vue/require-component-is': 'error',

		// Require prop type to be a constructor
		// https://eslint.vuejs.org/rules/require-prop-type-constructor.html
		'vue/require-prop-type-constructor': 'error',

		// Enforce render function to always return value
		// https://eslint.vuejs.org/rules/require-render-return.html
		'vue/require-render-return': 'error',

		// Require v-bind:key with v-for directives
		// https://eslint.vuejs.org/rules/require-v-for-key.html
		'vue/require-v-for-key': 'error',

		// Enforce props default values to be valid
		// https://eslint.vuejs.org/rules/require-valid-default-prop.html
		'vue/require-valid-default-prop': 'error',

		// Enforce that a return statement is present in computed property
		// https://eslint.vuejs.org/rules/return-in-computed-property.html
		'vue/return-in-computed-property': ['error', {
			treatUndefinedAsUnspecified: true,
		}],

		// Enforce usage of `exact` modifier on `v-on`
		// https://eslint.vuejs.org/rules/use-v-on-exact.html
		'vue/use-v-on-exact': 'error',

		// Require valid attribute names
		// https://eslint.vuejs.org/rules/valid-attribute-name.html
		'vue/valid-attribute-name': 'error',

		// Enforce valid `nextTick` function calls (autofixable)
		// https://eslint.vuejs.org/rules/valid-next-tick.html
		'+vue/valid-next-tick': 'error',

		// Enforce valid template root
		// https://eslint.vuejs.org/rules/valid-template-root.html
		'vue/valid-template-root': 'error',

		// Enforce valid `v-bind` directives
		// https://eslint.vuejs.org/rules/valid-v-bind.html
		'vue/valid-v-bind': 'error',

		// Enforce valid `v-cloak` directives
		// https://eslint.vuejs.org/rules/valid-v-cloak.html
		'vue/valid-v-cloak': 'error',

		// Enforce valid `v-else-if` directives
		// https://eslint.vuejs.org/rules/valid-v-else-if.html
		'vue/valid-v-else-if': 'error',

		// Enforce valid `v-else` directives
		// https://eslint.vuejs.org/rules/valid-v-else.html
		'vue/valid-v-else': 'error',

		// Enforce valid `v-for` directives
		// https://eslint.vuejs.org/rules/valid-v-for.html
		'vue/valid-v-for': 'error',

		// Enforce valid `v-html` directives
		// https://eslint.vuejs.org/rules/valid-v-html.html
		'vue/valid-v-html': 'error',

		// Enforce valid `v-if` directives
		// https://eslint.vuejs.org/rules/valid-v-if.html
		'vue/valid-v-if': 'error',

		// Enforce valid `v-model` directives
		// https://eslint.vuejs.org/rules/valid-v-model.html
		'vue/valid-v-model': 'error',

		// Enforce valid `v-on` directives
		// https://eslint.vuejs.org/rules/valid-v-on.html
		'vue/valid-v-on': ['error', {
			modifiers: [],
		}],

		// Enforce valid `v-once` directives
		// https://eslint.vuejs.org/rules/valid-v-once.html
		'vue/valid-v-once': 'error',

		// Enforce valid `v-pre` directives
		// https://eslint.vuejs.org/rules/valid-v-pre.html
		'vue/valid-v-pre': 'error',

		// Enforce valid `v-show` directives
		// https://eslint.vuejs.org/rules/valid-v-show.html
		'vue/valid-v-show': 'error',

		// Enforce valid `v-slot` directives
		// https://eslint.vuejs.org/rules/valid-v-slot.html
		'vue/valid-v-slot': ['error', {
			allowModifiers: false,
		}],

		// Enforce valid `v-text` directives
		// https://eslint.vuejs.org/rules/valid-v-text.html
		'vue/valid-v-text': 'error',
	},
};
