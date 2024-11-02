import { defineConfigurationPart } from '#utils';
import { pluginStylistic } from '#plugins';

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
	},
});
