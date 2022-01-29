const base = {
	parser: 'jsonc-eslint-parser',
	plugins: ['jsonc'],
};

const parts = [
	'./rules/json.js',
	'./rules/extension.js',
].map(part => require(part));

module.exports = { base, parts };
