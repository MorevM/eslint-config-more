const base = {
	env: {
		'jest/globals': true,
	},
	rules: {
		'sonarjs/no-duplicate-string': 'off',
	},
};

const parts = [
	'./rules/jest.js',
].map(part => require(part));

module.exports = { base, parts };
