/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

const SPECIAL_CHARACTERS = require('../../../utils/special-characters.js');

module.exports = {
	rules: {
		// Disallow use other than available lang
		// https://eslint.vuejs.org/rules/block-lang.html
		'vue/block-lang': 'off',

		// Enforce line breaks after opening and before closing block-level tags (autofixable)
		// https://eslint.vuejs.org/rules/block-tag-newline.html
		'+vue/block-tag-newline': ['warn', {
			singleline: 'always',
			multiline: 'always',
		}],

		// Enforce specific casing for the component naming style in template (autofixable)
		// https://eslint.vuejs.org/rules/component-name-in-template-casing.html
		'+vue/component-name-in-template-casing': ['error', 'kebab-case', {
			registeredComponentsOnly: false,
			ignores: [],
		}],

		// Enforce the casing of component name in `components` options (autofixable)
		// https://eslint.vuejs.org/rules/component-options-name-casing.html
		'+vue/component-options-name-casing': ['error', 'PascalCase'],

		// Enforce specific casing for custom event name
		// https://eslint.vuejs.org/rules/custom-event-name-casing.html
		'vue/custom-event-name-casing': ['error', 'kebab-case', {
			ignores: [],
		}],

		// Disallow usage of button without an explicit type attribute
		// https://eslint.vuejs.org/rules/html-button-has-type.html
		'vue/html-button-has-type': ['error', {
			button: true,
			submit: true,
			reset: true,
		}],

		// Enforce unified line brake in HTML comments (autofixable)
		// https://eslint.vuejs.org/rules/html-comment-content-newline.html
		'+vue/html-comment-content-newline': ['error', {
			singleline: 'never',
			multiline: 'ignore',
		}, {
			exceptions: ['-'],
		}],

		// Enforce unified spacing in HTML comments (autofixable)
		// https://eslint.vuejs.org/rules/html-comment-content-spacing.html
		'+vue/html-comment-content-spacing': ['error', 'always', {
			exceptions: [],
		}],

		// Enforce consistent indentation in HTML comments (autofixable)
		// https://eslint.vuejs.org/rules/html-comment-indent.html
		'+vue/html-comment-indent': ['warn', 'tab'],

		// Require component name property to match its file name
		// https://eslint.vuejs.org/rules/match-component-file-name.html
		'vue/match-component-file-name': ['error', {
			extensions: ['vue', 'jsx'],
			shouldMatchCase: true,
		}],

		// Enforce new lines between multi-line properties in Vue components (autofixable)
		// https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
		// Note: developer knows better
		'+vue/new-line-between-multi-line-property': 'off',

		// Enforce Promise or callback style in nextTick (autofixable)
		// https://eslint.vuejs.org/rules/next-tick-style.html
		'+vue/next-tick-style': 'off',

		// Disallow the use of bare strings in <template>
		// https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
		'vue/no-bare-strings-in-template': ['error', {
			allowlist: SPECIAL_CHARACTERS,
			attributes: {
				'/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
				'input': ['placeholder'],
				'img': ['alt'],
			},
			directives: ['v-text'],
		}],

		// Disallow boolean defaults (autofixable, but may be unsafe)
		// https://eslint.vuejs.org/rules/no-boolean-default.html
		'!vue/no-boolean-default': ['error', 'default-false'],

		// Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`
		// https://eslint.vuejs.org/rules/no-child-content.html
		'vue/no-child-content': 'error',

		// Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`
		// https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
		'vue/no-duplicate-attr-inheritance': 'error',

		// Disallow the `<template>` `<script>` `<style>` block to be empty
		// https://eslint.vuejs.org/rules/no-empty-component-block.html
		'vue/no-empty-component-block': 'error',

		// Require valid keys in model option
		// https://eslint.vuejs.org/rules/no-invalid-model-keys.html
		'vue/no-invalid-model-keys': 'error',

		// Disallow to pass multiple objects into array to class
		// https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
		'vue/no-multiple-objects-in-class': 'error',

		// Disallow a potential typo in your component property
		// https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
		'vue/no-potential-component-option-typo': ['warn', {
			presets: ['all'],
			custom: [],
			threshold: 1,
		}],

		// Disallow the use of reserved names in component definitions
		// https://eslint.vuejs.org/rules/no-reserved-component-names.html
		'vue/no-reserved-component-names': ['error', {
			disallowVueBuiltInComponents: true,
			disallowVue3BuiltInComponents: true,
		}],

		// Disallow specific block
		// https://eslint.vuejs.org/rules/no-restricted-block.html
		'vue/no-restricted-block': 'off',

		// Disallow specific classes in Vue components
		// https://eslint.vuejs.org/rules/no-restricted-class.html
		'vue/no-restricted-class': 'off',

		// Disallow specific component option
		// https://eslint.vuejs.org/rules/no-restricted-component-options.html
		'vue/no-restricted-component-options': 'off',

		// Disallow specific custom event
		// https://eslint.vuejs.org/rules/no-restricted-custom-event.html
		'vue/no-restricted-custom-event': 'off',

		// Disallow specific props
		// https://eslint.vuejs.org/rules/no-restricted-props.html
		'vue/no-restricted-props': 'off',

		// Disallow specific attribute
		// https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
		'vue/no-restricted-static-attribute': 'off',

		// Disallow specific argument in `v-bind`
		// https://eslint.vuejs.org/rules/no-restricted-v-bind.html
		'vue/no-restricted-v-bind': 'off',

		// Disallow static inline style attributes
		// https://eslint.vuejs.org/rules/no-static-inline-styles.html
		'vue/no-static-inline-styles': ['warn', {
			allowBinding: true,
		}],

		// Disallow `target="_blank"` attribute without `rel="noopener noreferrer"`
		// https://eslint.vuejs.org/rules/no-template-target-blank.html
		'vue/no-template-target-blank': ['error', {
			allowReferrer: true,
			enforceDynamicLinks: 'always',
		}],

		// Disallow this usage in a beforeRouteEnter method
		// https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
		'vue/no-this-in-before-route-enter': 'error',

		// Disallow using components that are not registered inside templates
		// https://eslint.vuejs.org/rules/no-unregistered-components.html
		'vue/no-unregistered-components': 'off',

		// Disallow unused properties
		// https://eslint.vuejs.org/rules/no-unused-properties.html
		'vue/no-unused-properties': ['error', {
			groups: ['props', 'data', 'computed', 'methods'],
			deepData: false, // some external libraries defaults
			ignorePublicMembers: true,
		}],

		// Disallow unused `refs`
		// https://eslint.vuejs.org/rules/no-unused-refs.html
		'vue/no-unused-refs': 'error',

		// Disallow use computed property like method
		// https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
		'vue/no-use-computed-property-like-method': 'error',

		// Disallow unnecessary mustache interpolations (autofixable)
		// https://eslint.vuejs.org/rules/no-useless-mustaches.html
		'+vue/no-useless-mustaches': ['error', {
			ignoreIncludesComment: false,
			ignoreStringEscape: false,
		}],

		// Disallow unnecessary `v-bind` directives (autofixable)
		// https://eslint.vuejs.org/rules/no-useless-v-bind.html
		'+vue/no-useless-v-bind': ['error', {
			ignoreIncludesComment: false,
			ignoreStringEscape: false,
		}],

		// Disallow use of `v-text`
		// https://eslint.vuejs.org/rules/no-v-text.html
		'vue/no-v-text': 'error',

		// Require or disallow padding lines between blocks (autofixable)
		// https://eslint.vuejs.org/rules/padding-line-between-blocks.html
		'+vue/padding-line-between-blocks': ['error', 'always'],

		// Require the component to be directly exported
		// https://eslint.vuejs.org/rules/require-direct-export.html
		'vue/require-direct-export': ['error', {
			disallowFunctionalComponentFunction: false,
		}],

		// Require a name property in Vue components
		// https://eslint.vuejs.org/rules/require-name-property.html
		'vue/require-name-property': 'error',

		// Enforce consistent indentation in `<script>` (autofixable)
		// https://eslint.vuejs.org/rules/script-indent.html
		'+vue/script-indent': ['error', 'tab', {
			baseIndent: 1,
			switchCase: 1,
			ignores: [],
		}],

		// Enforce sort-keys in a manner that is compatible with order-in-components
		// https://eslint.vuejs.org/rules/sort-keys.html
		// Note: developer knows better
		'vue/sort-keys': 'off',

		// Enforce static class names order (autofixable)
		// https://eslint.vuejs.org/rules/static-class-names-order.html
		'+vue/static-class-names-order': 'off', // who needs it?

		// Enforce `v-for` directive's delimiter style (autofixable)
		// https://eslint.vuejs.org/rules/v-for-delimiter-style.html
		'+vue/v-for-delimiter-style': ['error', 'in'],

		// Enforce or forbid parentheses after method calls without arguments in `v-on` directives (autofixable)
		// https://eslint.vuejs.org/rules/v-on-function-call.html
		'+vue/v-on-function-call': ['error', 'never', {
			ignoreIncludesComment: true,
		}],

		// Enforce valid nextTick function calls (autofixable)
		// https://eslint.vuejs.org/rules/valid-next-tick.html
		'+vue/valid-next-tick': 'warn',
	},
};
