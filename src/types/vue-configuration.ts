import type { AnyConfigurationOptions } from './any-configuration-options';

export type VueConfigurationOptions = AnyConfigurationOptions & {
	version: 2 | 3;
	typescript: boolean;
};
