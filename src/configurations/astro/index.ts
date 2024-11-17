import { isEmpty } from '@morev/utils';
import globals from 'globals';
import { GLOB_ASTRO } from '#globs';
import { parserAstro, parserTypescript } from '#parsers';
import { pluginAstro } from '#plugins';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';
import astro from './rules/astro';
import type { AstroConfigurationOptions } from '#types';

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
