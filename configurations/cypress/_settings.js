const base = {
	env: {
		'cypress/globals': true,
	},
};

const parts = [
	'./rules/cypress.js',
].map(part => require(part));

module.exports = { base, parts };
