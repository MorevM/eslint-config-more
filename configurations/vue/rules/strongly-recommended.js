/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

const { INLINE_ELEMENTS } = require('../../../utils/constants.js');

module.exports = {
	rules: {
		// Enforce attribute naming style on custom components in template (autofixable)
		// https://eslint.vuejs.org/rules/attribute-hyphenation.html
		'vue/attribute-hyphenation': ['warn', 'always', {
			ignore: [],
		}],

		// Enforce specific casing for component definition name (autofixable)
		// https://eslint.vuejs.org/rules/component-definition-name-casing.html
		'vue/component-definition-name-casing': ['warn', 'kebab-case'],

		// Enforce the location of first attribute (autofixable)
		// https://eslint.vuejs.org/rules/first-attribute-linebreak.html
		'vue/first-attribute-linebreak': ['warn', {
			singleline: 'ignore',
			multiline: 'below',
		}],

		// Require or disallow a line break before tag's closing brackets (autofixable)
		// https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
		'vue/html-closing-bracket-newline': ['warn', {
			singleline: 'never',
			multiline: 'always',
		}],

		// Require or disallow a space before tag's closing brackets (autofixable)
		// https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
		'vue/html-closing-bracket-spacing': ['warn', {
			startTag: 'never',
			endTag: 'never',
			selfClosingTag: 'always',
		}],

		// Enforce end tag style (autofixable, but not safe)
		// https://eslint.vuejs.org/rules/html-end-tags.html
		'vue/html-end-tags': 'off',
		'no-autofix/vue/html-end-tags': 'error',

		// Enforce consistent indentation in <template> (autofixable)
		// https://eslint.vuejs.org/rules/html-indent.html
		'vue/html-indent': ['warn', 'tab', {
			baseIndent: 1,
			attribute: 1,
			closeBracket: 0,
			alignAttributesVertically: false,
			ignores: [],
		}],

		// Enforce quotes style of HTML attributes (autofixable)
		// https://eslint.vuejs.org/rules/html-quotes.html
		'vue/html-quotes': ['warn', 'double', {
			avoidEscape: true,
		}],

		// Enforce self-closing style (autofixable)
		// https://eslint.vuejs.org/rules/html-self-closing.html
		'vue/html-self-closing': ['warn', {
			html: {
				void: 'always',
				normal: 'never',
				component: 'always',
			},
			svg: 'never',
			math: 'never',
		}],

		// Enforce the maximum number of attributes per line (autofixable)
		// https://eslint.vuejs.org/rules/max-attributes-per-line.html
		'vue/max-attributes-per-line': ['warn', {
			singleline: {
				max: 4,
			},
			multiline: {
				max: 1,
			},
		}],

		// Require a line break before and after the contents of a multiline element (autofixable)
		// https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
		'vue/multiline-html-element-content-newline': ['warn', {
			ignoreWhenEmpty: true,
			ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
			allowEmptyLines: false,
		}],

		// Enforce unified spacing in mustache interpolations (autofixable)
		// https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
		'vue/mustache-interpolation-spacing': ['warn', 'always'],

		// Disallow multiple spaces (autofixable)
		// https://eslint.vuejs.org/rules/no-multi-spaces.html
		'vue/no-multi-spaces': ['warn', {
			ignoreProperties: true,
		}],

		// Disallow spaces around equal signs in attribute (autofixable)
		// https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
		'vue/no-spaces-around-equal-signs-in-attribute': 'warn',

		// Disallow variable declarations from shadowing variables declared in the outer scope
		// https://eslint.vuejs.org/rules/no-template-shadow.html
		'vue/no-template-shadow': 'error',

		// Enforce that each component should be in its own file
		// https://eslint.vuejs.org/rules/one-component-per-file.html
		'vue/one-component-per-file': 'error',

		// Enforce specific casing for the Prop name in Vue components
		// https://eslint.vuejs.org/rules/prop-name-casing.html
		'vue/prop-name-casing': ['error', 'camelCase'],

		// Require default value for props
		// https://eslint.vuejs.org/rules/require-default-prop.html
		// Note: so many legacy code, so `warn` for a while
		'vue/require-default-prop': 'warn',

		// Require type definitions in props
		// https://eslint.vuejs.org/rules/require-prop-types.html
		'vue/require-prop-types': 'error',

		// Require a line break before and after the contents of a singleline element (autofixable)
		// https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
		// Note: let developer decide which variant will be more readable
		'vue/singleline-html-element-content-newline': 'off',

		// Enforce `v-bind` directive style (autofixable)
		// https://eslint.vuejs.org/rules/v-bind-style.html
		'vue/v-bind-style': ['error', 'shorthand'],

		// Enforce `v-bind` directive style (autofixable)
		// https://eslint.vuejs.org/rules/v-bind-style.html
		'vue/v-on-style': ['error', 'shorthand'],

		// Enforce `v-slot` directive style (autofixable)
		// https://eslint.vuejs.org/rules/v-slot-style.html
		'vue/v-slot-style': ['error', {
			atComponent: 'shorthand',
			default: 'shorthand',
			named: 'shorthand',
		}],
	},
};
