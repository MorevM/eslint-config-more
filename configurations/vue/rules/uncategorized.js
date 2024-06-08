/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

const { SPECIAL_CHARACTERS, DIGIT_CHARACTERS } = require('../../../utils/constants.js');

module.exports = {
	rules: {
		// Disallow use other than available lang
		// https://eslint.vuejs.org/rules/block-lang.html
		'vue/block-lang': 'off',

		// Enforce order of component top-level elements (autofixable)
		// https://eslint.vuejs.org/rules/block-order.html
		'vue/block-order': ['warn', {
			order: ['template', 'script', 'style', 'i18n'],
		}],

		// Enforce line breaks after opening and before closing block-level tags (autofixable)
		// https://eslint.vuejs.org/rules/block-tag-newline.html
		'vue/block-tag-newline': ['warn', {
			singleline: 'always',
			multiline: 'always',
		}],

		// Enforce component API style
		// https://eslint.vuejs.org/rules/component-api-style.html
		'vue/component-api-style': 'off',

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

		// Enforce declaration style of defineEmits
		// https://eslint.vuejs.org/rules/define-emits-declaration.html
		'vue/define-emits-declaration': ['warn', 'type-literal'],

		// Enforce declaration style of defineProps
		// https://eslint.vuejs.org/rules/define-props-declaration.html
		'vue/define-props-declaration': ['warn', 'type-based'],

		// Enforce or forbid the use of the scoped and module attributes in SFC top level style tags.
		// https://eslint.vuejs.org/rules/enforce-style-attribute.html
		'vue/enforce-style-attribute': ['warn', {
			allow: ['plain'],
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
		'vue/html-comment-content-newline': ['warn', {
			singleline: 'never',
			multiline: 'ignore',
		}, {
			exceptions: ['-'],
		}],

		// Enforce unified spacing in HTML comments (autofixable)
		// https://eslint.vuejs.org/rules/html-comment-content-spacing.html
		'vue/html-comment-content-spacing': ['warn', 'always', {
			exceptions: [],
		}],

		// Enforce consistent indentation in HTML comments (autofixable)
		// https://eslint.vuejs.org/rules/html-comment-indent.html
		'vue/html-comment-indent': ['warn', 'tab'],

		// Require component name property to match its file name
		// https://eslint.vuejs.org/rules/match-component-file-name.html
		'vue/match-component-file-name': ['error', {
			extensions: ['vue', 'jsx'],
			shouldMatchCase: true,
		}],

		// Require the registered component name to match the imported component name
		// https://eslint.vuejs.org/rules/match-component-import-name.html
		'vue/match-component-import-name': 'error',

		// Enforce maximum number of lines in Vue SFC blocks
		// https://eslint.vuejs.org/rules/max-lines-per-block.html
		'vue/max-lines-per-block': 'off',

		// Enforce new lines between multi-line properties in Vue components (autofixable)
		// https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
		// Note: developer knows better
		'vue/new-line-between-multi-line-property': 'off',

		// Enforce Promise or callback style in nextTick (autofixable)
		// https://eslint.vuejs.org/rules/next-tick-style.html
		'vue/next-tick-style': 'off',

		// Disallow the use of bare strings in <template>
		// https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
		'vue/no-bare-strings-in-template': ['error', {
			allowlist: [
				...SPECIAL_CHARACTERS,
				...DIGIT_CHARACTERS,
			],
			attributes: {
				'/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
				'input': ['placeholder'],
				'img': ['alt'],
			},
			directives: ['v-text'],
		}],

		// Disallow boolean defaults (autofixable but may be unsafe)
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

		// Disallow asynchronously registered expose
		// https://eslint.vuejs.org/rules/no-expose-after-await.html
		'vue/no-expose-after-await': 'error',

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

		// Disallow destructuring of ref objects that can lead to loss of reactivity
		// https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html
		'vue/no-ref-object-reactivity-loss': 'error',

		// Enforce props with default values to be optional (autofixable)
		// https://eslint.vuejs.org/rules/no-required-prop-with-default.html
		'vue/no-required-prop-with-default': ['warn', {
			autofix: true,
		}],

		// Disallow the use of reserved names in component definitions
		// https://eslint.vuejs.org/rules/no-reserved-component-names.html
		'vue/no-reserved-component-names': ['error', {
			disallowVueBuiltInComponents: true,
			// It's Vue3-related, but there is no reasons to use `<teleport />`
			// or <suspense /> in Vue2 as well
			disallowVue3BuiltInComponents: true,
		}],

		// Disallow specific block
		// https://eslint.vuejs.org/rules/no-restricted-block.html
		'vue/no-restricted-block': 'off',

		// Disallow asynchronously called restricted methods
		// https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
		'vue/no-restricted-call-after-await': 'off',

		// Disallow specific classes in Vue components
		// https://eslint.vuejs.org/rules/no-restricted-class.html
		'vue/no-restricted-class': 'off',

		// Disallow specific component names
		// https://eslint.vuejs.org/rules/no-restricted-component-names.html
		'vue/no-restricted-component-names': 'off',

		// Disallow specific component option
		// https://eslint.vuejs.org/rules/no-restricted-component-options.html
		'vue/no-restricted-component-options': 'off',

		// Disallow specific custom event
		// https://eslint.vuejs.org/rules/no-restricted-custom-event.html
		'vue/no-restricted-custom-event': 'off',

		// Disallow specific HTML elements
		// https://eslint.vuejs.org/rules/no-restricted-html-elements.html
		'vue/no-restricted-html-elements': 'off',

		// Disallow specific props
		// https://eslint.vuejs.org/rules/no-restricted-props.html
		'vue/no-restricted-props': 'off',

		// Disallow specific attribute
		// https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
		'vue/no-restricted-static-attribute': 'off',

		// Disallow specific argument in `v-bind`
		// https://eslint.vuejs.org/rules/no-restricted-v-bind.html
		'vue/no-restricted-v-bind': 'off',

		// Disallow specific argument in `v-on`
		// https://eslint.vuejs.org/rules/no-restricted-v-bind.html
		'vue/no-restricted-v-on': 'off',

		// Disallow v-if directives on `root` element
		// https://eslint.vuejs.org/rules/no-root-v-if.html
		// Although this is obviously should be an error in a new projects (especially written in TS),
		// there are a lot of legacy projects that use such functionality and do it conveniently.
		'vue/no-root-v-if': 'off',

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

		// Disallow use of undefined components in `<template>`
		// https://eslint.vuejs.org/rules/no-undef-components.html
		'vue/no-undef-components': 'error',

		// Disallow undefined properties
		// https://eslint.vuejs.org/rules/no-undef-properties.html
		// Reason to be `off`: Doesn't work well with Vuex
		// Issue link: https://github.com/vuejs/eslint-plugin-vue/issues/1675
		// Note: Doesn't look like a problem anymore, Pinia works correctly
		'vue/no-undef-properties': ['off', {
			ignores: ['/^\\$/'],
		}],

		// Disallow unsupported Vue.js syntax on the specified version
		// https://eslint.vuejs.org/rules/no-unsupported-features.html
		// Note: should be configured individually
		'vue/no-unsupported-features': 'off',

		// Disallow unused emit declarations
		// https://eslint.vuejs.org/rules/no-unused-emit-declarations.html
		'vue/no-unused-emit-declarations': 'error',

		// Disallow unused properties
		// https://eslint.vuejs.org/rules/no-unused-properties.html
		'vue/no-unused-properties': ['warn', {
			groups: ['props', 'data', 'computed', 'methods'],
			deepData: false, // some external libraries defaults
			ignorePublicMembers: true,
		}],

		// Disallow unused `refs`
		// https://eslint.vuejs.org/rules/no-unused-refs.html
		'vue/no-unused-refs': 'error',

		// Disallow using `v-else-if` / `v-else` on the same element as `v-for`
		// https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html
		'vue/no-use-v-else-with-v-for': 'error',

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

		// Disallow `v-text` / `v-html` on component
		// https://eslint.vuejs.org/rules/no-v-text.html
		'vue/no-v-text-v-html-on-component': 'error',

		// Disallow use of `v-text`
		// https://eslint.vuejs.org/rules/no-v-text.html
		'vue/no-v-text': 'error',

		// Require or disallow padding lines between blocks (autofixable)
		// https://eslint.vuejs.org/rules/padding-line-between-blocks.html
		'+vue/padding-line-between-blocks': ['error', 'always'],

		// Require or disallow newlines between sibling tags in template (autofixable)
		// https://eslint.vuejs.org/rules/padding-line-between-blocks.html
		'vue/padding-line-between-tags': ['off', [
			// { blankLine: 'always', prev: '*', next: '*' },
		]],

		// Require or disallow padding lines in component definition (autofixable)
		// https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html
		'vue/padding-lines-in-component-definition': ['warn', {
			betweenOptions: 'ignore',
			withinOption: {
				props: 'never',
				emits: 'never',
				data: 'ignore',
				methods: 'always',
				computed: 'always',
			},
			groupSingleLineProperties: true,
		}],

		// Enforce `Boolean` comes first in component prop types
		// https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
		'vue/prefer-prop-type-boolean-first': 'error',

		// Require static class names in template to be in a separate `class` attribute
		// (autofixable but is it really needed?)
		// https://eslint.vuejs.org/rules/prefer-separate-static-class.html
		'!vue/prefer-separate-static-class': 'off',

		// Require shorthand form attribute when v-bind value is true
		// https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
		'vue/prefer-true-attribute-shorthand': 'warn',

		// Require the component to be directly exported
		// https://eslint.vuejs.org/rules/require-direct-export.html
		'vue/require-direct-export': ['error', {
			disallowFunctionalComponentFunction: false,
		}],

		// Require type definitions in emits
		// https://eslint.vuejs.org/rules/require-emit-validator.html
		// Vue3 only
		// 'vue/require-emit-validator': 'error',

		// Require declare public properties using `expose`
		// https://eslint.vuejs.org/rules/require-expose.html
		// Vue3 only
		// 'vue/require-expose': 'error',

		// Require a certain macro variable name
		// https://eslint.vuejs.org/rules/require-macro-variable-name.html
		'vue/require-macro-variable-name': ['error', {
			defineProps: '$props',
			defineEmits: '$emit',
			defineSlots: '$slots',
			useSlots: '$slots',
			useAttrs: '$attrs',
		}],

		// Require a name property in Vue components
		// https://eslint.vuejs.org/rules/require-name-property.html
		'vue/require-name-property': 'error',

		// Require props to have a comment
		// https://eslint.vuejs.org/rules/require-prop-comment.html
		// Note: this is too verbose for outsourcing projects.
		'vue/require-prop-comment': ['off', {
			type: 'any',
		}],

		// Enforce adding type declarations to object props
		// https://eslint.vuejs.org/rules/require-typed-object-prop.html
		'vue/require-typed-object-prop': 'error',

		// Require `ref` and `shallowRef` functions to be strongly typed
		// https://eslint.vuejs.org/rules/require-typed-ref.html
		'vue/require-typed-ref': 'warn',

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
		'vue/static-class-names-order': 'off', // who needs it?

		// Enforce `v-for` directive's delimiter style (autofixable)
		// https://eslint.vuejs.org/rules/v-for-delimiter-style.html
		'vue/v-for-delimiter-style': ['warn', 'in'],

		// Enforce writing style for handlers in v-on directives (autofixable)
		// https://eslint.vuejs.org/rules/v-on-handler-style.html
		// Note: this rule tries to limit too much at once :(
		'vue/v-on-handler-style': 'off',
	},
};
