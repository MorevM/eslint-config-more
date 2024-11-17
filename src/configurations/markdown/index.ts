import { parserMarkdown } from '#parsers';
import type { MarkdownConfigurationOptions } from '#types';
import { GLOB_MARKDOWN } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

import markdown from './rules/markdown';

export default function configurationMarkdown(options: Partial<MarkdownConfigurationOptions> = {}) {
	const {
		files = [GLOB_MARKDOWN],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/markdown/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/markdown/core',
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
		}),
	];
}
