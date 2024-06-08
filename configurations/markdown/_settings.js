const base = {
	parser: 'eslint-plugin-markdownlint/parser',
	plugins: ['markdownlint', 'no-autofix', 'unicorn'],
	rules: {
		'@stylistic/js/no-trailing-spaces': 'off',
		'@stylistic/js/max-len': 'off',
		'unicorn/filename-case': 'off',
	},
};

const parts = [
	'./rules/markdown.js',
].map(part => require(part));

module.exports = { base, parts };
