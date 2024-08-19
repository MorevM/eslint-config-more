import { pluginHtml } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'@html-eslint': pluginHtml,
	},
	rules: {
		// Disallow use of abstract roles
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-abstract-roles
		'@html-eslint/no-abstract-roles': 'error',

		// Disallow accesskey attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-accesskey-attrs
		'@html-eslint/no-accesskey-attrs': 'error',

		// Disallow to use `aria-hidden` attributes on the `body` element
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-aria-hidden-body
		'@html-eslint/no-aria-hidden-body': 'error',

		// Disallow use of `user-scalable=no` in `<meta name="viewport">`
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-non-scalable-viewport
		'@html-eslint/no-non-scalable-viewport': 'error',

		// Disallow use of positive `tabindex` attribute
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-positive-tabindex
		'@html-eslint/no-positive-tabindex': 'error',

		// Disallow skipping heading levels
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-skip-heading-levels
		'@html-eslint/no-skip-heading-levels': 'warn',

		// Require title attribute in `<frame>` and `<iframe>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-frame-title
		'@html-eslint/require-frame-title': 'error',

		// Require `alt` attribute at `img` tag
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-img-alt
		'@html-eslint/require-img-alt': 'error',

		// Enforce to use `<meta name="viewport" ...>` in the `<head></head>`
		// https://yeonjuan.github.io/html-eslint/docs/rules/require-meta-viewport
		'@html-eslint/require-meta-viewport': 'error',
	},
});
