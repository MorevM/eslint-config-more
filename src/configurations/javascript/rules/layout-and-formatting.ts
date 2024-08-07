export default {
	rules: {
		// Enforce position of line comments
		// https://eslint.org/docs/rules/line-comment-position
		// Note: developer should decide which is better
		'line-comment-position': 'off',

		// Require or disallow Unicode byte order mark (BOM) (autofixable)
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	},
};
