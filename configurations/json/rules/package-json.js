module.exports = {
	rules: {
		// Require object keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
		'+jsonc/sort-keys': ['warn', {
			pathPattern: '^$',
			order: [
				'name',
				'description',
				'type',
				'version',
				'private',
				'engines',
				'license',
				'publishConfig',
				'author',
				'funding',
				'homepage',
				'repository',
				'bugs',
				'keywords',
				'files',
				'exports',
				'main',
				'module',
				'browser',
				'unpkg',
				'bin',
				'scripts',
				'husky',
				'lint-staged',
				'peerDependencies',
				'peerDependenciesMeta',
				'dependencies',
				'devDependencies',
				'eslintConfig',
			],
		}, {
			pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
			order: { type: 'asc' },
		}],
	},
};
