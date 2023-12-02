module.exports = {
	rules: {
		// Require `<!DOCTYPE html>` in the document (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-doctype
		'+@html-eslint/require-doctype': 'error',

		// Disallow duplicate `id` attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-duplicate-id
		'@html-eslint/no-duplicate-id': 'error',

		// Disallow inline styles
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-inline-styles
		'@html-eslint/no-inline-styles': 'off',

		// Enforce `<li>` to be in `<ul>`, `<ol>` or `<menu>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-li-container
		'@html-eslint/require-li-container': 'error',

		// Disallow using obsolete tags in HTML5
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-obsolete-tags
		'@html-eslint/no-obsolete-tags': 'error',

		// Disallow specified attribute values
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-restricted-attr-values/
		'@html-eslint/no-restricted-attr-values': 'off',

		// Require use of closing tag (autofixable for `void` elements)
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-closing-tags
		'+@html-eslint/require-closing-tags': ['warn', {
			selfClosing: 'always',
			allowSelfClosingCustom: true,
		}],

		// Enforce to use `<meta charset="...">` in the `<head></head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-charset
		'@html-eslint/require-meta-charset': 'error',

		// Disallow usage of unsafe `target='_blank'`
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-target-blank
		'@html-eslint/no-target-blank': 'error',

		// Disallow duplicate attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-duplicate-attrs
		'@html-eslint/no-duplicate-attrs': 'error',

		// Require use of `button` element with a valid `type` attribute
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-button-type
		'@html-eslint/require-button-type': 'error',

		// Disallow specified attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-restricted-attrs
		// Note: should be configured individually if needed
		'@html-eslint/no-restricted-attrs': 'off',

		// Disallow usage of type attributes for stylesheets and scripts (autofixable)
		// https://html-eslint.org/docs/rules/no-script-style-type
		'+@html-eslint/no-script-style-type': 'warn',

		// Enforces the use of tag with specified attributes
		// https://github.com/yeonjuan/html-eslint/blob/main/docs/rules/require-attrs.md
		// Note: should be configured individually if needed
		'@html-eslint/require-attrs': 'off',
	},
};
