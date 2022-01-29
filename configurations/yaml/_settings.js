const base = {
	plugins: ['yml'],
	parser: 'yaml-eslint-parser',
	rules: {
		'spaced-comment': 'off',
		'no-multiple-empty-lines': 'off',
		'no-multi-spaces': 'off',
	},
};

const parts = [
	'./rules/yaml.js',
	'./rules/extension.js',
].map(part => require(part));

module.exports = { base, parts };
