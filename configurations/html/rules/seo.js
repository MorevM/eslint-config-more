module.exports = {
	rules: {
		// Disallow multiple `<h1>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-h1
		'@html-eslint/no-multiple-h1': 'error',

		// Require `lang` attribute at `html` tag
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-lang
		'@html-eslint/require-lang': 'error',

		// Enforce to use `<meta name="description" ...>` in the `<head></head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-description
		'@html-eslint/require-meta-description': 'warn',

		// Enforce to use specified meta tags for open graph protocol
		// https://html-eslint.org/docs/rules/require-open-graph-protocol
		'@html-eslint/require-open-graph-protocol': 'off',

		// Require `<title>` in the `<head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-title
		'@html-eslint/require-title': 'error',
	},
};
