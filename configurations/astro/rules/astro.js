const jsxA11yConfig = require('../../jsx-a11y/index.js');
const baseConfig = require('../../base/index.js');
const { extensionFromBase } = require('../../../utils/helpers.js');

const fromJsxA11y = (ruleNames) => {
	return ruleNames.reduce((acc, ruleName) => {
		const fullRuleName = `jsx-a11y/${ruleName}`;
		const rule = jsxA11yConfig.rules[fullRuleName];

		if (!rule) {
			throw new Error(`There is no rule named \`${fullRuleName}\` in the \`jsx-a11y\` config`);
		}

		acc[`astro/${fullRuleName}`] = rule;
		return acc;
	}, {});
};

module.exports = {
	plugins: ['astro'],
	rules: {
		// The `client:only` directive is missing the correct component's framework value
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/missing-client-only-directive-value/
		'astro/missing-client-only-directive-value': 'error',

		// Disallow conflicting set directives and child contents
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/
		'astro/no-conflict-set-directives': 'error',

		// Disallow using deprecated `Astro.canonicalURL`
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/
		'astro/no-deprecated-astro-canonicalurl': 'error',

		// Disallow using deprecated `Astro.fetchContent()` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/
		'+astro/no-deprecated-astro-fetchcontent': 'error',

		// Disallow using deprecated `Astro.resolve()`
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/
		'astro/no-deprecated-astro-resolve': 'error',

		// Disallow using deprecated `getEntryBySlug()`
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/
		'astro/no-deprecated-getentrybyslug': 'error',

		// Disallow value export
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-exports-from-components/
		'astro/no-exports-from-components': 'error',

		// Disallow unused `define:vars={...}` in `style` tag
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/
		'astro/no-unused-define-vars-in-style': 'error',

		// Disallow warnings when compiling
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/
		'astro/valid-compile': 'error',

		// Disallow use of `set:html` to prevent XSS attack
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/
		'astro/no-set-html-directive': 'off',

		// Disallow use of `set:text` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/
		'astro/no-set-text-directive': 'warn',

		// Disallow selectors defined in `style` tag that don’t use in HTML
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/
		'astro/no-unused-css-selector': 'warn',

		// Require `class:list` directives instead of `class` with expressions (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/
		'astro/prefer-class-list-directive': 'off',

		// Require use object instead of ternary expression in `class:list` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/
		'astro/prefer-object-class-list': 'warn',

		// Require use split array elements in `class:list` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/
		'astro/prefer-split-class-list': ['warn', {
			splitLiteral: true,
		}],

		...fromJsxA11y([
			'alt-text',
			'anchor-ambiguous-text',
			'anchor-has-content',
			'anchor-is-valid',
			'aria-activedescendant-has-tabindex',
			'aria-props',
			'aria-proptypes',
			'aria-role',
			'aria-unsupported-elements',
			'autocomplete-valid',
			'click-events-have-key-events',
			'control-has-associated-label',
			'heading-has-content',
			'html-has-lang',
			'iframe-has-title',
			'img-redundant-alt',
			'interactive-supports-focus',
			'label-has-associated-control',
			'lang',
			'media-has-caption',
			'mouse-events-have-key-events',
			'no-access-key',
			'no-aria-hidden-on-focusable',
			'no-autofocus',
			'no-distracting-elements',
			'no-interactive-element-to-noninteractive-role',
			'no-noninteractive-element-interactions',
			'no-noninteractive-element-to-interactive-role',
			'no-noninteractive-tabindex',
			'no-redundant-roles',
			'no-static-element-interactions',
			'prefer-tag-over-role',
			'role-has-required-aria-props',
			'role-supports-aria-props',
			'scope',
			'tabindex-no-positive',
		]),

		...extensionFromBase({
			prefix: 'astro',
			baseRules: baseConfig.rules,
			rulesToExtend: ['semi'],
		}).rules,
	},
};
