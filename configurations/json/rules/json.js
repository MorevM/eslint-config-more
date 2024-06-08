module.exports = {
	rules: {
		// Apply jsonc rules similar to your configured ESLint core rules
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
		// Note: Extension rules handled manually for more control
		'jsonc/auto': 'off',

		// Enforce naming convention to property key names
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
		// Reason: JSON is widely used for completely opposite things
		'jsonc/key-name-casing': 'off',

		// Disallow BigInt literals
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
		'jsonc/no-bigint-literals': 'error',

		// Disallow binary expression (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
		'jsonc/no-binary-expression': 'error',

		// Disallow binary numeric literals (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
		'jsonc/no-binary-numeric-literals': 'error',

		// Disallow comments (rewritten for `.jsonc` files)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
		'jsonc/no-comments': 'error',

		// Disallow escape sequences in identifiers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
		'jsonc/no-escape-sequence-in-identifier': 'error',

		// Disallow hexadecimal numeric literals (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
		'jsonc/no-hexadecimal-numeric-literals': 'error',

		// Disallow Infinity
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
		'jsonc/no-infinity': 'error',

		// Disallow NaN
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
		'jsonc/no-nan': 'error',

		// Disallow number property keys (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
		'jsonc/no-number-props': 'error',

		// Disallow numeric separators (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
		'jsonc/no-numeric-separators': 'error',

		// Disallow octal numeric literals (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
		'jsonc/no-octal-numeric-literals': 'error',

		// Disallow parentheses around the expression (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
		'jsonc/no-parenthesized': 'error',

		// Disallow plus sign (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
		'jsonc/no-plus-sign': 'error',

		// Disallow RegExp literals
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
		'jsonc/no-regexp-literals': 'error',

		// Disallow template literals (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
		'jsonc/no-template-literals': 'error',

		// Disallow `undefined`
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
		'jsonc/no-undefined-value': 'error',

		// Disallow Unicode code point escape sequences (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
		'jsonc/no-unicode-codepoint-escapes': 'error',

		// Require array values to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
		// Note: should be configured individually
		'jsonc/sort-array-values': 'off',

		// Disallow invalid number for JSON (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
		'jsonc/valid-json-number': 'error',

		// Disallow parsing errors in Vue custom blocks
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
		'jsonc/vue-custom-block/no-parsing-error': 'error',
	},
};
