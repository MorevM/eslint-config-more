import { pluginJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		jsonc: pluginJson,
	},
	rules: {
		// Require object keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
		'jsonc/sort-keys': ['warn', {
			pathPattern: '^$',
			order: [
				'name',
				'description',
				'type',
				'version',
				'private',
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
		}, {
			pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
			order: { type: 'asc' },
		}],
	},
});
