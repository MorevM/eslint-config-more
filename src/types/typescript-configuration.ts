import type { AnyConfigurationOptions } from './any-configuration-options';

export type TypescriptConfigurationOptions = AnyConfigurationOptions & {
	extraFileExtensions: string[];
	tsconfigPath: string;
};
