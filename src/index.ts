import configurationJavascript from '~configurations/javascript';
import configurationNode from '~configurations/node';
import configurationBrowser from '~configurations/browser';
import configurationTypescript from '~configurations/typescript';
import configurationYaml from '~configurations/yaml';
import configurationVue from '~configurations/vue';
import configurationHtml from '~configurations/html';
import configurationMarkdown from '~configurations/markdown';
import configurationJson from '~configurations/json';
import configurationVitest from '~configurations/vitest';
import configurationJest from '~configurations/jest';
import configurationCypress from '~configurations/cypress';
import gitignore from 'eslint-config-flat-gitignore';
import { GLOB_EXCLUDE } from '#globs';
import { arrayUnique } from '@morev/utils';
import type { FlatConfig } from '#types';

type Configuration = 'javascript' | 'node' | 'browser' | 'typescript' | 'yaml' | 'vue' | 'html' | 'markdown' | 'json' | 'vitest' | 'jest' | 'cypress';

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
};

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
