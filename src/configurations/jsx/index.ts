import jsxA11y from './rules/jsx-a11y';
import { mergeParts } from '#utils';
import type { JsxConfigurationOptions } from '#types';

export default function configurationJsx(options: Partial<JsxConfigurationOptions> = {}) {
	const {
		overrides = {},
		ignores = [],
	} = options;

	return {
		name: 'morev/jsx',
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		ignores,
		...mergeParts(
			jsxA11y,
			{
				rules: overrides,
			},
		),
	};
}
