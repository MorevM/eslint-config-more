const base = {
	parser: 'eslint-plugin-markdownlint/parser',
	plugins: ['markdownlint'],
	rules: {
		'no-trailing-spaces': 'off',
		'max-len': 'off',
		'unicorn/filename-case': 'off',
	},
};

const parts = [
	'./rules/markdown.js',
].map(part => require(part));

module.exports = { base, parts };
