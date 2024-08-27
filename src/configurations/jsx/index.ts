import type { JsxConfigurationOptions } from '#types';
import { mergeParts } from '#utils';

import jsxA11y from './rules/jsx-a11y';

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
