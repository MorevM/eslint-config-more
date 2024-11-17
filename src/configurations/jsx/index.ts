import { GLOB_JSX, GLOB_TSX } from '#globs';
import type { JsxConfigurationOptions } from '#types';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

import jsxA11y from './plugins/jsx-a11y';
import stylistic from './plugins/stylistic';

export default function configurationJsx(options: Partial<JsxConfigurationOptions> = {}) {
	const {
		files = [GLOB_JSX, GLOB_TSX],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/jsx/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/jsx/core',
			files,
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
				stylistic,
				{
					rules: overrides,
				},
			),
		}),
	];
}
