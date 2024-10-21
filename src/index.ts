import gitignore from 'eslint-config-flat-gitignore';
import { arrayUnique } from '@morev/utils';
import { GLOB_EXCLUDE } from '#globs';
import type { FlatConfig } from '#types';
import {
	configurationAstro,
	configurationBrowser,
	configurationCypress,
	configurationHtml,
	configurationJavascript,
	configurationJest,
	configurationJson,
	configurationJsx,
	configurationMarkdown,
	configurationNode,
	configurationTypescript,
	configurationVitest,
	configurationVue,
	configurationYaml,
} from '#configurations';

type ConfigurationsMap = {
	javascript: typeof configurationJavascript;
	node: typeof configurationNode;
	browser: typeof configurationBrowser;
	typescript: typeof configurationTypescript;
	yaml: typeof configurationYaml;
	vue: typeof configurationVue;
	html: typeof configurationHtml;
	markdown: typeof configurationMarkdown;
	json: typeof configurationJson;
	vitest: typeof configurationVitest;
	jest: typeof configurationJest;
	cypress: typeof configurationCypress;
	jsx: typeof configurationJsx;
	astro: typeof configurationAstro;
};

type Configuration = keyof ConfigurationsMap;
type ConfigurationOptions<T extends Configuration> = Parameters<ConfigurationsMap[T]>[0];

/**
 * High-order function for flattening the configurations.
 * Configurations can consist of several parts,
 * but the endpoint of an ESLint-config should be a flat array.
 *
 * @param   configurations   FlatConfig-compatible configuration or array of such configurations.
 *
 * @returns                  Flat list of configurations.
 */
export const combine = (...configurations: FlatConfig[]) => {
	return configurations.flat(Infinity);
};

/**
 * A function that enables rules for the passed configuration name.
 * Each configuration has its own options.
 *
 * @param   name      Configuration name.
 * @param   options   Configuration options.
 *
 * @returns           An array of configuration parts to use them as `combine` function arguments.
 */
export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T> = {}) => {
	switch (name) {
		case 'javascript': return configurationJavascript(options);
		case 'node': return configurationNode(options);
		case 'browser': return configurationBrowser(options);
		case 'typescript': return configurationTypescript(options);
		case 'yaml': return configurationYaml(options);
		case 'vue': return configurationVue(options);
		case 'html': return configurationHtml(options);
		case 'markdown': return configurationMarkdown(options);
		case 'json': return configurationJson(options);
		case 'vitest': return configurationVitest(options);
		case 'jest': return configurationJest(options);
		case 'cypress': return configurationCypress(options);
		case 'jsx': return configurationJsx(options);
		case 'astro': return configurationAstro(options);
		default: return {};
	}
};

/**
 * A function that disables all rules for some files.
 * By default inherits all patterns from `.gitignore` as well as popular artifacts destinations.
 * This list can be extended via `extraIgnoredGlobs` argument.
 *
 * @see https://globster.xyz/
 *
 * @param   extraIgnoredGlobs   Extra files to ignore by all rules. \
 *                              Expected [minimatch](https://github.com/isaacs/minimatch)-compatible array of strings.
 *
 * @returns                     FlatConfig-compatible configuration.
 */
export const defineIgnores = (extraIgnoredGlobs: string[] = []) => {
	return {
		name: 'morev/ignores',
		ignores: arrayUnique([
			...gitignore().ignores,
			...GLOB_EXCLUDE,
			...extraIgnoredGlobs,
		]),
	};
};
