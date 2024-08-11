import configurationJavascript from '~configurations/javascript';
import configurationNode from '~configurations/node';
import configurationBrowser from '~configurations/browser';
import configurationTypescript from '~configurations/typescript';
import configurationYaml from '~configurations/yaml';
import gitignore from 'eslint-config-flat-gitignore';
import { GLOB_EXCLUDE } from '#globs';
import { arrayUnique } from '@morev/utils';
import type { FlatConfig } from '#types';

type Configuration = 'javascript' | 'node' | 'browser' | 'typescript' | 'yaml';

type ConfigurationsMap = {
	javascript: typeof configurationJavascript;
	node: typeof configurationNode;
	browser: typeof configurationBrowser;
	typescript: typeof configurationTypescript;
	yaml: typeof configurationYaml;
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
