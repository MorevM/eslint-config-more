import globals from 'globals';
import { isEmpty } from '@morev/utils';
import { parserAstro, parserTypescript } from '#parsers';
import type { AstroConfigurationOptions } from '#types';
import { GLOB_ASTRO } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';
import { pluginAstro } from '#plugins';

import { universalRules } from '~configurations/universal-rules';

import astro from './rules/astro';

export default function configurationAstro(options: Partial<AstroConfigurationOptions> = {}) {
	const {
		files = [GLOB_ASTRO],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/astro/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/astro/core',
			languageOptions: {
				globals: {
					...pluginAstro.environments.astro.globals,
					...globals.node,
				},
				parser: parserAstro,
				sourceType: 'module',
				parserOptions: {
					parser: parserTypescript,
					extraFileExtensions: ['.astro'],
				},
			},
			processor: 'astro/client-side-ts',
			files,
			ignores,
			...mergeParts(
				astro,
			),
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/astro/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
