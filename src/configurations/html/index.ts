import accessibility from './rules/accessibility';
import bestPractice from './rules/best-practice';
import seo from './rules/seo';
import style from './rules/style';

import type { HtmlConfigurationOptions } from '#types';
import { GLOB_HTML } from '#globs';
import { mergeParts } from '#utils';
import { parserHtml } from '#parsers';

export default function configurationHtml(options: Partial<HtmlConfigurationOptions> = {}) {
	const {
		files = [GLOB_HTML],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/html',
			languageOptions: {
				parser: parserHtml,
				ecmaVersion: 'latest',
				sourceType: 'module',
				parserOptions: {},
			},
			files,
			ignores,
			...mergeParts(
				accessibility,
				bestPractice,
				seo,
				style,
				{
					rules: overrides,
				},
			),
		},
	];
}
