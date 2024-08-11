import configurationJavascript from '~configurations/javascript';
import configurationNode from '~configurations/node';
import configurationBrowser from '~configurations/browser';
import configurationTypescript from '~configurations/typescript';
import gitignore from 'eslint-config-flat-gitignore';
import { GLOB_EXCLUDE } from '#globs';
import { arrayUnique } from '@morev/utils';

type Configuration = 'javascript' | 'node' | 'browser' | 'typescript';

type ConfigurationsMap = {
	javascript: typeof configurationJavascript;
	node: typeof configurationNode;
	browser: typeof configurationBrowser;
	typescript: typeof configurationTypescript;
};

type ConfigurationOptions<T extends Configuration> = Parameters<ConfigurationsMap[T]>[0];

export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T>) => {
	switch (name) {
		case 'javascript': return configurationJavascript(options);
		case 'node': return configurationNode(options);
		case 'browser': return configurationBrowser(options);
		case 'typescript': return configurationTypescript(options);
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
