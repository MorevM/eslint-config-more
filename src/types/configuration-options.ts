/**
 * Options suitable for any configuration.
 */
export type AnyConfigurationOptions = {
	/**
	 * Files to which the rules need to be applied within this part of the configuration.
	 * Expected [minimatch](https://github.com/isaacs/minimatch)-compatible array of strings.
	 *
	 * @see https://globster.xyz/
	 */
	files?: string[];

	/**
	 * Files that DO NOT need to have rules applied to them within this part of the configuration.
	 * Expected [minimatch](https://github.com/isaacs/minimatch)-compatible array of strings.
	 *
	 * @see https://globster.xyz/
	 */
	ignores?: string[];

	/**
	 * Overwrite the rules for this part of the configuration.
	 * An object in a form compatible with the `rules` key is expected.
	 *
	 * @see https://eslint.org/docs/latest/use/configure/rules
	 */
	overrides?: Record<string, any>;
};

/**
 * Options for HTML configuration.
 */
export type HtmlConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for Markdown configuration.
 */
export type MarkdownConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for YAML configuration.
 */
export type YamlConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for JSON configuration.
 */
export type JsonConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for Vitest configuration.
 */
export type VitestConfigurationOptions = AnyConfigurationOptions & {
	/**
	 * Whether to declare `vitest` testing functions as ESLint globals.
	 *
	 * @see https://eslint.org/docs/latest/use/configure/language-options#using-configuration-files
	 *
	 * @default true
	 */
	globals: boolean;
};

/**
 * Options for Jest configuration.
 */
export type JestConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for Cypress configuration.
 */
export type CypressConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for JSX syntax.
 */
export type JsxConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for Astro configuration.
 */
export type AstroConfigurationOptions = AnyConfigurationOptions;

/**
 * Options for Vue configuration.
 */
export type VueConfigurationOptions = AnyConfigurationOptions & {
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
	 * **IMPORTANT**: Do not forget to specify `.vue` in `extraFileExtensions` property
	 * of Typescript configuration if you pass `true` here.
	 *
	 * @default false
	 */
	typescript?: boolean;
};

/**
 * Options for Typescript configuration.
 */
export type TypescriptConfigurationOptions = AnyConfigurationOptions & {
	/**
	 * Extra file extensions (without leading dot) to process with Typescript parser.
	 *
	 * @default []
	 */
	extraFileExtensions: string[];
};
