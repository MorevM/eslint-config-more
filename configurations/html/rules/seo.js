module.exports = {
	rules: {
		// Require `lang` attribute at `html` tag
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-lang
		'@html-eslint/require-lang': 'error',

		// Require `<title>` in the `<head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-title
		'@html-eslint/require-title': 'error',

		// Disallow multiple `<h1>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-h1
		'@html-eslint/no-multiple-h1': 'error',

		// Enforce to use `<meta name="description" ...>` in the `<head></head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-description
		'@html-eslint/require-meta-description': 'warn',
	},
};
