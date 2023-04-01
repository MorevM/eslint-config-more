const base = {
	plugins: ['yml'],
	parser: 'yaml-eslint-parser',
	rules: {
		'spaced-comment': 'off',
		'no-multiple-empty-lines': 'off',
		'no-multi-spaces': 'off',
		'max-len': 'off',
	},
	// This is required since these files don't work with full `.yaml` extension.
	// `lefthook` actually works, but the documentation suggests to use `.yml`
	overrides: [
		{
			files: ['dependabot.yml', '.gitlab-ci.yml', 'lefthook.yml'],
			rules: {
				'yml/file-extension': 'off',
			},
		},
	],
};

const parts = [
	'./rules/yaml.js',
	'./rules/extension.js',
].map(part => require(part));

module.exports = { base, parts };
