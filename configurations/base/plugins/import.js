module.exports = {
	plugins: ['import'],
	rules: {
		/**
		 * Helpful warnings.
		 */

		// Report any invalid exports, i.e. re-export of the same name
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
		'import/export': 'error',

		// Report imported names marked with `@deprecated` documentation tag
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
		'import/no-deprecated': 'warn',

		// Forbid empty named import blocks (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
		'+import/no-empty-named-blocks': 'warn',

		// Forbid the use of extraneous packages
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': 'error',

		// Forbid the use of mutable exports with `var` or `let`
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 'error',

		// Report use of exported name as identifier of default export
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
		'import/no-named-as-default': 'error',

		// Report use of exported name as property of default export
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
		'import/no-named-as-default-member': 'error',

		// Report modules without exports, or exports without matching import in another module
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
		// Note: should be configured individually per project
		'import/no-unused-modules': 'off',


		/**
		 * Module systems.
		 */

		// Report AMD `require` and `define` calls.
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
		'import/no-amd': 'error',

		// Report CommonJS `require()` calls and `module.exports` or `exports.*`
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
		// @TODO: [2025-01-01] Hmm... It seems to early to turn it on
		'import/no-commonjs': 'off',

		// Forbid imports with CommonJS exports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
		'import/no-import-module-exports': 'error',

		// No Node.js builtin modules
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
		'import/no-nodejs-modules': 'off',

		// Report potentially ambiguous parse goal (`script` vs. `module`)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
		'import/unambiguous': 'off',


		/**
		 * Static analysis.
		 */

		// Ensure a default export is present, given a default import
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
		'import/default': 'error',

		// Ensure named imports correspond to a named export in the remote file
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
		'import/named': 'error',

		// Ensure imported namespaces contain dereferenced properties as they are dereferenced
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
		'import/namespace': 'error',

		// Forbid import of modules using absolute paths (autofixable but disabled)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
		// Note: Autofix is not enabled intentionally because the relative path to the local folder is
		// as harmful as the path from the root, but after transformation will be considered valid.
		'import/no-absolute-path': 'error',

		// Forbid a module from importing a module with a dependency path back to itself
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
		// Note: Set `maxDepth` if more performance issues
		'import/no-cycle': ['error', {
			ignoreExternal: true,
			allowUnsafeDynamicCyclicDependency: false,
			// maxDepth: 5,
		}],

		// Forbid `require()` calls with expressions
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
		// It's not an error, but reminder doesn't hurts
		'import/no-dynamic-require': 'warn',

		// Prevent importing the submodules of other modules
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
		// Note: should be configured individually if needed
		'import/no-internal-modules': 'off',

		// Prevent importing packages through relative paths
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
		// Note: should be configured manually for monorepos
		'import/no-relative-packages': 'off',

		// Forbid importing modules from parent directories
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
		// TODO: Maybe enable for specific cases such as Vue subcomponents
		'import/no-relative-parent-imports': 'off',

		// Restrict which files can be imported in a given folde
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
		// Note: should be defined individually if needed
		'import/no-restricted-paths': 'off',

		// Forbid a module from importing itself
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
		'import/no-self-import': 'error',

		// Ensure imports point to a file/module that can be resolved
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
		'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

		// Prevent unnecessary path segments in import and require statements
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
		'import/no-useless-path-segments': ['error', { commonjs: true }],

		// Forbid webpack loader syntax in imports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
		'import/no-webpack-loader-syntax': 'error',


		/**
		 * Style guide.
		 */

		// Enforce or ban the use of inline type-only markers for named imports (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
		'+import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],

		// Enforce a leading comment with the webpackChunkName for dynamic imports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
		// Note: is it really always needed? I don't think so
		'import/dynamic-import-chunkname': 'off',

		// Ensure all exports appear after other statements
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
		'import/exports-last': 'error',

		// Ensure consistent use of file extension within the import path
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
		'import/extensions': ['warn', 'ignorePackages', {
			js: 'always',
			mjs: 'always',
			jsx: 'always',
			ts: 'never',
			tsx: 'never',
		}],

		// Ensure all imports appear before other statements (autofixable, but `import/order` does it better)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
		'import/first': 'error',

		// Prefer named exports to be grouped together in a single export declaration
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
		'import/group-exports': 'off',

		// Limit the maximum number of dependencies a module can have
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
		// Note: module needs as much as it needs
		'import/max-dependencies': 'off',

		// Enforce a newline after import statements (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
		'+import/newline-after-import': ['warn', {
			considerComments: true,
		}],

		// Forbid anonymous values as default exports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
		'import/no-anonymous-default-export': 'off',

		// Forbid default exports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
		// Note: Was thinking this rule should be turned on, but it seems too radically
		'import/no-default-export': 'off',

		// Report repeated import of the same module in multiple places (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
		'+import/no-duplicates': 'error',

		// Forbid named default exports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
		'import/no-named-default': 'error',

		// Forbid named exports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
		// Note: Same thing as previous rule
		'import/no-named-export': 'off',

		// Forbid namespace (a.k.a. "wildcard" `*`) imports (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
		// Note: it needed sometimes, also with some packages is no other options
		'import/no-namespace': 'off',

		// Forbid unassigned imports
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
		// Note: well, imports with side-effects are bad, but what about importing style files?
		'import/no-unassigned-import': 'off',

		// Enforce a convention in module import order (autofixable)
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
		'+import/order': ['error', {
			'alphabetize': {
				caseInsensitive: false,
				order: 'ignore',
			},
			'groups': [
				'builtin',
				'external',
				'internal',
				'parent',
				'sibling',
				'index',
			],
			'pathGroups': [
				{
					pattern: '~*/**/*.*',
					group: 'external',
				},
				{
					pattern: '@*/**/*.*',
					group: 'external',
				},
			],
			'newlines-between': 'ignore',
		}],

		// Prefer a default export if module exports a single name
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
		// Note: I don't thinks it's a good practice as long as CommonJS still in use
		'import/prefer-default-export': 'off',
	},
};
