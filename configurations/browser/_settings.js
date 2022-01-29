const base = {
	env: {
		browser: true,
	},
};

const parts = [
	'./rules/unicorn.js',
].map(part => require(part));

module.exports = { base, parts };
