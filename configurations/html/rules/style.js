module.exports = {
	rules: {
		// Disallow extra spaces around attributes (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-extra-spacing-attrs
		'+@html-eslint/no-extra-spacing-attrs': ['warn', {
			enforceBeforeSelfClose: true,
		}],

		// Require newline between elements (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/element-newline
		'@html-eslint/element-newline': 'error',

		// Enforce consistent indentation (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/indent
		'+@html-eslint/indent': ['warn', 'tab'],

		// Enforce to use lowercase for tag and attribute names (autofixable)
		// https://html-eslint.org/docs/rules/lowercase
		'+@html-eslint/lowercase': 'warn',

		// Enforce consistent quoting attributes with double or single (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/quotes
		'+@html-eslint/quotes': ['warn', 'double'],

		// Enforce attributes alphabetical sorting (autofixable)
		// https://html-eslint.org/docs/rules/sort-attrs
		'+@html-eslint/sort-attrs': 'off',

		// Enforce naming conventions for `id` attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/id-naming-convention
		// Note: should be configured individually
		// P.S. Don't use `ID`s
		'@html-eslint/id-naming-convention': 'off',

		// Disallows the use of multiple empty lines (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-empty-lines
		'+@html-eslint/no-multiple-empty-lines': ['warn', { max: 2 }],

		// Disallow trailing whitespaces at the end of lines (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-trailing-spaces
		'+@html-eslint/no-trailing-spaces': ['error'],
	},
};
