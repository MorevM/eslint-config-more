const base = {
	env: {
		'jest/globals': true,
	},
};

const parts = [
	'./rules/jest.js',
].map(part => require(part));

module.exports = { base, parts };
