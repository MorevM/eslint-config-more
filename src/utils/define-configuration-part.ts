import type { FlatConfig } from '#types';

/**
 * Just an utility function for more type-safety.
 *
 * @param   configuration   FlatConfig-compatible configuration.
 *
 * @returns                 The passed configuration without any modifications.
 */
export const defineConfigurationPart = (configuration: FlatConfig) =>
	configuration;
