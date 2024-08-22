type ConfigurationOptionFiles = {
	/**
	 * Files to which the rules need to be applied within this part of the configuration.
	 * Expected [minimatch](https://github.com/isaacs/minimatch)-compatible array of strings.
	 *
	 * @see https://globster.xyz/
	 */
	files?: string[];
};

type ConfigurationOptionIgnores = {
	/**
	 * Files that DO NOT need to have rules applied to them within this part of the configuration.
	 * Expected [minimatch](https://github.com/isaacs/minimatch)-compatible array of strings.
	 *
	 * @see https://globster.xyz/
	 */
	ignores?: string[];
};

type ConfigurationOptionOverrides = {
	/**
	 * Overwrite the rules for this part of the configuration.
	 * An object in a form compatible with the `rules` key is expected.
	 *
	 * @see https://eslint.org/docs/latest/use/configure/rules
	 */
	overrides?: Record<string, any>;
};

/**
 * Options suitable for any configuration.
 */
export type AnyConfigurationOptions = ConfigurationOptionIgnores & ConfigurationOptionOverrides;

/**
 * Options for HTML configuration.
 */
export type HtmlConfigurationOptions = AnyConfigurationOptions & ConfigurationOptionFiles;

/**
 * Options for Markdown configuration.
 */
export type MarkdownConfigurationOptions = AnyConfigurationOptions & ConfigurationOptionFiles;

/**
 * Options for YAML configuration.
 */
export type YamlConfigurationOptions = AnyConfigurationOptions & ConfigurationOptionFiles;

/**
 * Options for Vue configuration.
 */
export type VueConfigurationOptions = AnyConfigurationOptions
	& ConfigurationOptionFiles
	& {
		/**
		 * Vue version in use. \
		 * If not specified, the module will try to determine it by itself. \
		 * If it could not be determined, version 3 will be used.
		 *
		 * @default 3
		 */
		version?: 2 | 3;

		/**
		 * Whether to use TypeScript parser within Vue files. \
		 * Do not forget to specify `.vue` in `extraFileExtensions` property
		 * of Typescript configuration if you pass `true` here.
		 *
		 * @default false
		 */
		typescript?: boolean;
	};

/**
 * Options for Typescript configuration.
 */
export type TypescriptConfigurationOptions = AnyConfigurationOptions
	& ConfigurationOptionFiles
	& {
		/**
		 * Extra file extensions (without leading dot) to process with Typescript parser.
		 *
		 * @default []
		 */
		extraFileExtensions: string[];
	};
