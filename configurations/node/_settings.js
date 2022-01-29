const base = {
	env: {
		node: true,
	},
	plugins: ['node'],
	parserOptions: {
		ecmaVersion: 2020,
	},
};

const parts = [
	'./rules/possible-errors.js',
	'./rules/best-practices.js',
	'./rules/stylistic-issues.js',
	'./rules/unicorn.js',
].map(part => require(part));

module.exports = { base, parts };
