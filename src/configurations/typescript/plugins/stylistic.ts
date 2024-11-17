import { pluginStylistic } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'@stylistic': pluginStylistic,
	},
	rules: {
		// Require a specific member delimiter style for interfaces and type literals (autofixable)
		// https://eslint.style/rules/default/member-delimiter-style
		'@stylistic/member-delimiter-style': ['warn', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
			multilineDetection: 'brackets',
		}],

		// Require consistent spacing around type annotations (autofixable)
		// https://eslint.style/rules/default/type-annotation-spacing
		'@stylistic/type-annotation-spacing': 'warn',

		// Enforces consistent spacing inside TypeScript type generics (autofixable)
		// https://eslint.style/rules/default/type-generic-spacing
		'@stylistic/type-generic-spacing': 'warn',

		// Expect space before the type declaration in the named tuple (autofixable)
		// https://eslint.style/rules/default/type-named-tuple-spacing
		'@stylistic/type-named-tuple-spacing': 'warn',
	},
});
