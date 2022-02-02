const base = {
	plugins: ['yml'],
	parser: 'yaml-eslint-parser',
	rules: {
		'spaced-comment': 'off',
		'no-multiple-empty-lines': 'off',
		'no-multi-spaces': 'off',
		'max-len': ['warn', 150, 2, {
			ignoreUrls: true,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
	},
};

const parts = [
	'./rules/yaml.js',
	'./rules/extension.js',
].map(part => require(part));

module.exports = { base, parts };
