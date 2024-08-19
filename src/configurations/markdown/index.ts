import { parserMarkdown } from '#parsers';
import type { AnyConfigurationOptions } from '#types';
import { GLOB_MARKDOWN } from '#globs';
import { mergeParts } from '#utils';

import markdown from './rules/markdown';

export default function configurationMarkdown(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_MARKDOWN],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/markdown',
			languageOptions: {
				parser: parserMarkdown,
			},
			files,
			ignores,
			...mergeParts(
				markdown,
				{
					rules: {
						'@stylistic/no-trailing-spaces': 'off',
						'@stylistic/max-len': 'off',
						'unicorn/filename-case': 'off',
					},
				},
				{
					rules: overrides,
				},
			),
		},
	];
}
