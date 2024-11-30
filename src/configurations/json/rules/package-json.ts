import { pluginJson, pluginPackageJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'jsonc': pluginJson,
		'package-json': pluginPackageJson,
	},
	rules: {
		// Require object keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
		'jsonc/sort-keys': [
			'warn',
			{
				pathPattern: '^$',
				order: [
					'$schema',
					'name',
					'displayName',
					'description',
					'type',
					'private',
					'sideEffects',
					'version',
					'packageManager',
					'workspaces',
					'engines',
					'os',
					'cpu',
					'license',
					'publishConfig',
					'author',
					'contributors',
					'funding',
					'homepage',
					'repository',
					'bugs',
					'keywords',
					'files',
					'directories',
					'bin',
					'exports',
					'main',
					'module',
					'browser',
					'unpkg',
					'types',
					'man',
					'config',
					'scripts',
					'husky',
					'lint-staged',
					'peerDependencies',
					'peerDependenciesMeta',
					'bundledDependencies',
					'overrides',
					'resolutions',
					'dependencies',
					'devDependencies',
					'optionalDependencies',
					'eslintConfig',
				],
			},
			{
				pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^(?:resolutions|overrides)$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^author$',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^contributors\\[\\d+\\]',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^maintainers\\[\\d+\\]',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^(?:repository|funding|license)$',
				order: ['type', 'url'],
			},
			{
				pathPattern: '^(?:config|exports)$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^exports(?:\\[[^\\]]+\\]|\\.[^.]+)$',
				order: [
					'types',
					'import',
					'require',
				],
			},
		],

		// Package properties must be declared in standard order	 (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/order-properties.md
		// Note: Already configured in `jsonc/sort-keys` above
		'package-json/order-properties': 'off',

		// Enforce either object or shorthand declaration for repository (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/repository-shorthand.md
		'package-json/repository-shorthand': ['warn', {
			form: 'object',
		}],

		// Dependencies, scripts, and configuration values must be declared in alphabetical order (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/sort-collections.md
		// Note: Configured in more detail in `jsonc/sort-keys` above
		'package-json/sort-collections': 'off',

		// Checks a dependency isn't specified more than once (i.e. in `dependencies` and `devDependencies`)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/unique-dependencies.md
		'package-json/unique-dependencies': 'error',

		// Checks existence of local dependencies in the package.json
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-local-dependency.md
		'package-json/valid-local-dependency': 'error',

		// Enforce that package names are valid npm package names
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-name.md
		'package-json/valid-name': 'error',

		// Enforce that package.json has all properties required by the npm spec
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-package-def.md
		'package-json/valid-package-def': 'error',

		// Enforce that if repository directory is specified, it matches the path to the `package.json` file
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-repository-directory.md
		'package-json/valid-repository-directory': 'error',

		// Enforce that package versions are valid semver specifiers
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-version.md
		'package-json/valid-version': 'error',
	},
});
