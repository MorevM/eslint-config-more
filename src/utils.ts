import type { FlatConfig } from '#types';
import type { NonEmptyArray } from '@morev/utils';

export const mergeParts = (...objects: NonEmptyArray<FlatConfig>) => {
	return {
		plugins: objects.reduce<FlatConfig['plugins']>((acc, curr) => ({ ...acc, ...curr.plugins }), {}),
		rules: objects.reduce<FlatConfig['rules']>((acc, curr) => ({ ...acc, ...curr.rules }), {}),
	};
};

export const defineConfigurationPart = (configuration: FlatConfig) => configuration;
