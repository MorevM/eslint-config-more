import { pluginJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		jsonc: pluginJson,
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
	},
});
