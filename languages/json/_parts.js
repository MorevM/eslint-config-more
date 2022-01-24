const parts = [
	'./rules/jsonc.js',
	'./rules/extension.js',
];

const initial = {
	plugins: ['jsonc'],
	overrides: [{
		files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
		parser: 'jsonc-eslint-parser',
	}, {
		files: ['*.jsonc'],
		rules: {
			'jsonc/no-comments': 'off',
		},
	}, {
		files: ['package.json'],
		parser: 'jsonc-eslint-parser',
		rules: {
			'jsonc/sort-keys': ['warn', {
				pathPattern: '^$',
				order: [
					'name',
					'description',
					'type',
					'version',
					'private',
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
	}],
};

module.exports = { parts, initial };
