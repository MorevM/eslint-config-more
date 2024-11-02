import { defineConfigurationPart } from '#utils';
import { pluginStylistic } from '#plugins';

export default defineConfigurationPart({
	plugins: {
		'@stylistic': pluginStylistic,
	},
	rules: {
		// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
		// https://eslint.style/rules/default/jsx-child-element-spacing
		'@stylistic/jsx-child-element-spacing': 'warn',

		// Enforce closing bracket location in JSX (autofixable)
		// https://eslint.style/rules/default/jsx-closing-bracket-location
		'@stylistic/jsx-closing-bracket-location': ['warn', 'line-aligned'],

		// Enforce closing tag location for multiline JSX (autofixable)
		// https://eslint.style/rules/default/jsx-closing-tag-location
		'@stylistic/jsx-closing-tag-location': ['warn', 'line-aligned'],

		// Disallow unnecessary JSX expressions when literals alone are sufficient
		// or enforce JSX expressions on literals in JSX children or attributes (autofixable)
		// https://eslint.style/rules/default/jsx-curly-brace-presence
		'@stylistic/jsx-curly-brace-presence': ['warn', {
			props: 'never',
			children: 'never',
			propElementValues: 'always',
		}],

		// Enforce consistent linebreaks in curly braces in JSX attributes and expressions (autofixable)
		// https://eslint.style/rules/jsx/jsx-curly-newline
		'@stylistic/jsx-curly-newline': ['warn', {
			multiline: 'require',
			singleline: 'consistent',
		}],

		// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (autofixable)
		// https://eslint.style/rules/jsx/jsx-curly-spacing
		'@stylistic/jsx-curly-spacing': ['warn', {
			when: 'never',
			allowMultiline: true,
			children: {
				when: 'always',
			},
		}],

		// Enforce or disallow spaces around equal signs in JSX attributes (autofixable)
		// https://eslint.style/rules/jsx/jsx-equals-spacing
		'@stylistic/jsx-equals-spacing': ['warn', 'never'],

		// Enforce proper position of the first property in JSX (autofixable)
		// https://eslint.style/rules/jsx/jsx-first-prop-new-line
		'@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],

		// Enforce line breaks before and after JSX elements
		// when they are used as arguments to a function (autofixable)
		// https://eslint.style/rules/jsx/jsx-function-call-newline
		'@stylistic/jsx-function-call-newline': ['warn', 'multiline'],

		// Enforce props indentation in JSX (autofixable)
		// https://eslint.style/rules/jsx/jsx-indent-props
		'@stylistic/jsx-indent-props': ['warn', {
			indentMode: 'tab',
			ignoreTernaryOperator: true,
		}],

		// Enforce maximum of props on a single line in JSX (autofixable)
		// https://eslint.style/rules/jsx/jsx-max-props-per-line
		'@stylistic/jsx-max-props-per-line': ['warn', {
			maximum: {
				single: 4,
				multi: 1,
			},
		}],

		// Require or prevent a new line after jsx elements and expressions (autofixable)
		// https://eslint.style/rules/jsx/jsx-newline
		'@stylistic/jsx-newline': 'off',

		// Require one JSX element per line (autofixable)
		// https://eslint.style/rules/jsx/jsx-one-expression-per-line
		// TODO[2025-05-11]: Maybe turn on?
		'@stylistic/jsx-one-expression-per-line': ['off', {
			allow: 'literal',
		}],

		// Enforce PascalCase for user-defined JSX components
		// https://eslint.style/rules/jsx/jsx-pascal-case
		'@stylistic/jsx-pascal-case': ['error', {
			allowAllCaps: false,
			allowLeadingUnderscore: true,
			allowNamespace: true,
			ignore: [],
		}],

		// Disallow multiple spaces between inline JSX props (autofixable)
		// https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
		// Note: Covered by the core `@stylistic/no-multi-spaces` rule.
		'@stylistic/jsx-props-no-multi-spaces': 'off',

		// Disallow extra closing tags for components without children (autofixable)
		// https://eslint.style/rules/jsx/jsx-self-closing-comp
		'@stylistic/jsx-self-closing-comp': ['warn', {
			component: true,
			html: false,
		}],

		// Enforce props alphabetical sorting (autofixable)
		// https://eslint.style/rules/jsx/jsx-sort-props
		// Note: only to put reserved props on top
		'@stylistic/jsx-sort-props': ['warn', {
			noSortAlphabetically: true,
			reservedFirst: true,
		}],

		// Enforce whitespace in and around the JSX opening and closing brackets (autofixable)
		// https://eslint.style/rules/jsx/jsx-tag-spacing
		'@stylistic/jsx-tag-spacing': ['warn', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],

		// Disallow missing parentheses around multiline JSX (autofixable)
		// https://eslint.style/rules/jsx/jsx-wrap-multilines
		'@stylistic/jsx-wrap-multilines': ['warn', {
			declaration: 'parens',
			assignment: 'parens',
			return: 'parens-new-line',
			arrow: 'parens',
			condition: 'ignore',
			logical: 'parens',
			prop: 'ignore',
			propertyValue: 'ignore',
		}],
	},
});
