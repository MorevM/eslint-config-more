import { isEmpty } from '@morev/utils';
import { GLOB_HTML } from '#globs';
import { parserHtml } from '#parsers';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import accessibility from './rules/accessibility';
import bestPractice from './rules/best-practice';
import seo from './rules/seo';
import style from './rules/style';

import type { HtmlConfigurationOptions } from '#types';

export default function configurationHtml(options: Partial<HtmlConfigurationOptions> = {}) {
	const {
		files = [GLOB_HTML],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/html/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/html/core',
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
			),
		}),
		defineConfigurationPart({
			name: 'morev/html/disables',
			rules: {
				'capitalized-comments': 'off',
				'@stylistic/spaced-comment': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/html/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
