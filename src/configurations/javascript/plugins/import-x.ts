import { pluginImportX } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'import-x': pluginImportX,
	},
	rules: {
		/**
		 * Helpful warnings.
		 */

		// Report any invalid exports, i.e. re-export of the same name
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
		'import-x/export': 'error',

		// Report imported names marked with `@deprecated` documentation tag
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
		'import-x/no-deprecated': 'warn',

		// Forbid empty named import blocks (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
		'import-x/no-empty-named-blocks': 'warn',

		// Forbid the use of extraneous packages
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
		'import-x/no-extraneous-dependencies': 'error',

		// Forbid the use of mutable exports with `var` or `let`
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
		'import-x/no-mutable-exports': 'error',

		// Report use of exported name as identifier of default export
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
		'import-x/no-named-as-default': 'error',

		// Report use of exported name as property of default export
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
		'import-x/no-named-as-default-member': 'error',

		// Forbid importing a default export by a different name.
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-rename-default.md
		'import-x/no-rename-default': 'off',

		// Report modules without exports, or exports without matching import in another module
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
		// Note: should be configured individually per project
		'import-x/no-unused-modules': 'off',


		/**
		 * Module systems.
		 */

		// Report AMD `require` and `define` calls.
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
		'import-x/no-amd': 'error',

		// Report CommonJS `require()` calls and `module.exports` or `exports.*`
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
		// @TODO: [2025-01-01] Hmm... It seems to early to turn it on
		'import-x/no-commonjs': 'off',

		// Forbid imports with CommonJS exports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
		'import-x/no-import-module-exports': 'error',

		// No Node.js builtin modules
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
		'import-x/no-nodejs-modules': 'off',

		// Report potentially ambiguous parse goal (`script` vs. `module`)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
		'import-x/unambiguous': 'off',


		/**
		 * Static analysis.
		 */

		// Ensure a default export is present, given a default import
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
		'import-x/default': 'error',

		// Ensure named imports correspond to a named export in the remote file
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
		'import-x/named': 'error',

		// Ensure imported namespaces contain dereferenced properties as they are dereferenced
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
		'import-x/namespace': 'error',

		// Forbid import of modules using absolute paths (autofixable but disabled)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
		// Note: Autofix is not enabled intentionally because the relative path to the local folder is
		// as harmful as the path from the root, but after transformation will be considered valid.
		'import-x/no-absolute-path': 'error',

		// Forbid a module from importing a module with a dependency path back to itself
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
		// Note: Set `maxDepth` if more performance issues
		'import-x/no-cycle': ['error', {
			ignoreExternal: true,
			allowUnsafeDynamicCyclicDependency: false,
			// maxDepth: 5,
		}],

		// Forbid `require()` calls with expressions
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
		// It's not an error, but reminder doesn't hurts
		'import-x/no-dynamic-require': 'warn',

		// Prevent importing the submodules of other modules
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
		// Note: should be configured individually if needed
		'import-x/no-internal-modules': 'off',

		// Prevent importing packages through relative paths
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
		// Note: should be configured manually for monorepos
		'import-x/no-relative-packages': 'off',

		// Forbid importing modules from parent directories
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
		// TODO: Maybe enable for specific cases such as Vue subcomponents
		'import-x/no-relative-parent-imports': 'off',

		// Restrict which files can be imported in a given folde
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
		// Note: should be defined individually if needed
		'import-x/no-restricted-paths': 'off',

		// Forbid a module from importing itself
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
		'import-x/no-self-import': 'error',

		// Ensure imports point to a file/module that can be resolved
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
		'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

		// Prevent unnecessary path segments in import and require statements
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
		'import-x/no-useless-path-segments': ['error', { commonjs: true }],

		// Forbid webpack loader syntax in imports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
		'import-x/no-webpack-loader-syntax': 'error',


		/**
		 * Style guide.
		 */

		// Enforce or ban the use of inline type-only markers for named imports (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
		'import-x/consistent-type-specifier-style': ['warn', 'prefer-top-level'],

		// Enforce a leading comment with the webpackChunkName for dynamic imports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
		// Note: is it really always needed? I don't think so
		'import-x/dynamic-import-chunkname': 'off',

		// Ensure all exports appear after other statements
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
		'import-x/exports-last': 'error',

		// Ensure consistent use of file extension within the import path
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
		'import-x/extensions': ['warn', 'ignorePackages', {
			js: 'always',
			mjs: 'always',
			jsx: 'always',
			ts: 'never',
			tsx: 'never',
		}],

		// Ensure all imports appear before other statements (autofixable, but `import/order` does it better)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
		'import-x/first': 'error',

		// Prefer named exports to be grouped together in a single export declaration
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
		'import-x/group-exports': 'off',

		// Limit the maximum number of dependencies a module can have
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
		// Note: module needs as much as it needs
		'import-x/max-dependencies': 'off',

		// Enforce a newline after import statements (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
		'import-x/newline-after-import': 'warn',

		// Forbid anonymous values as default exports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
		'import-x/no-anonymous-default-export': 'off',

		// Forbid default exports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
		// Note: Was thinking this rule should be turned on, but it seems too radically
		'import-x/no-default-export': 'off',

		// Report repeated import of the same module in multiple places (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
		'import-x/no-duplicates': 'warn',

		// Forbid named default exports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
		'import-x/no-named-default': 'error',

		// Forbid named exports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
		// Note: Same thing as previous rule
		'import-x/no-named-export': 'off',

		// Forbid namespace (a.k.a. "wildcard" `*`) imports (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
		// Note: it needed sometimes, also with some packages is no other options
		'import-x/no-namespace': 'off',

		// Forbid unassigned imports
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
		// Note: well, imports with side-effects are bad, but what about importing style files?
		'import-x/no-unassigned-import': 'off',

		// Enforce a convention in module import order (autofixable)
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
		// Note: There is `eslint-plugin-perfectionist` that does it in much more configurable way.
		'import-x/order': ['off', {
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
					pattern: '~**/**',
					group: 'internal',
				},
				{
					pattern: '@**/**',
					group: 'internal',
				},
			],
			'newlines-between': 'ignore',
		}],

		// Prefer a default export if module exports a single name
		// https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
		// Note: I don't thinks it's a good practice as long as CommonJS still in use
		'import-x/prefer-default-export': 'off',
	},
});
