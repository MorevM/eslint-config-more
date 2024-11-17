import { pluginJson } from '#plugins';
import { defineConfigurationPart, extensionFactory } from '#utils';
import configurationJavascript from '~configurations/javascript';

const extensionFromBase = extensionFactory({
	baseConfig: configurationJavascript(),
	prefix: 'jsonc',
});

export default defineConfigurationPart({
	plugins: {
		jsonc: pluginJson,
	},
	rules: {
		// Enforce line breaks after opening and before closing array brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
		...extensionFromBase('array-bracket-newline'),

		// Disallow or enforce spaces inside of brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
		...extensionFromBase('array-bracket-spacing'),

		// Enforce line breaks between array elements (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
		...extensionFromBase('array-element-newline'),

		// Require or disallow trailing commas (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
		'jsonc/comma-dangle': ['warn', 'never'],

		// Enforce consistent comma style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
		...extensionFromBase('comma-style'),

		// Enforce consistent indentation (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
		...extensionFromBase('indent'),

		// Enforce consistent spacing between keys and values in object literal properties (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
		...extensionFromBase('key-spacing'),

		// Disallow duplicate keys in object literals
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
		...extensionFromBase('no-dupe-keys'),

		// Disallow leading or trailing decimal points in numeric literals (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
		...extensionFromBase('no-floating-decimal'),

		// Disallow irregular whitespace
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
		...extensionFromBase('-no-irregular-whitespace'),

		// Disallow multiline strings
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
		...extensionFromBase('no-multi-str'),

		// Disallow octal escape sequences in string literals
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
		...extensionFromBase('no-octal-escape'),

		// Disallow legacy octal literals
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
		...extensionFromBase('no-octal'),

		// Disallow sparse arrays
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
		...extensionFromBase('no-sparse-arrays'),

		// Disallow unnecessary escape usage
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
		...extensionFromBase('no-useless-escape'),

		// Enforce consistent line breaks inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
		...extensionFromBase('object-curly-newline'),

		// Enforce consistent spacing inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
		...extensionFromBase('object-curly-spacing'),

		// Enforce placing object properties on separate lines (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
		...extensionFromBase('object-property-newline'),

		// Require quotes around object literal property names (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
		'jsonc/quote-props': ['error', 'always'],

		// Enforce use of double or single quotes (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
		'jsonc/quotes': ['error', 'double', { avoidEscape: false }],

		// Disallow spaces after unary operators (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
		...extensionFromBase('space-unary-ops'),
	},
});
