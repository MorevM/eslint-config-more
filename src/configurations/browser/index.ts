import { isEmpty } from '@morev/utils';
import globals from 'globals';
import { GLOB_ANY_CONTAINING_JS } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import unicorn from './rules/unicorn';

import type { AnyConfigurationOptions } from '#types';

export default function configurationBrowser(options: Partial<AnyConfigurationOptions> = {}) {
	const {
		files = [GLOB_ANY_CONTAINING_JS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/browser/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/browser/core',
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				globals: {
					...globals.browser,
				},
				parserOptions: {
					ecmaFeatures: {
						globalReturn: false,
						impliedStrict: true,
						jsx: true,
					},
				},
			},
			files,
			ignores,
			...mergeParts(
				unicorn,
			),
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/browser/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
