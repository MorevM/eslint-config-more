const base = {
	parser: 'astro-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.astro'],
	},
};

const parts = [
	'./rules/astro.js',
].map(part => require(part));

module.exports = { base, parts };
