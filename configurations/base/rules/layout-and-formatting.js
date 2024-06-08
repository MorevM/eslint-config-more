/* eslint-disable sonarjs/no-duplicate-string */
/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
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
