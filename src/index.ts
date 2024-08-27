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

export const combine = (...configurations: FlatConfig[]) => {
	return configurations.flat(Infinity);
};

export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T>) => {
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
