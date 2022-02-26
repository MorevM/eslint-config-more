const base = {
	plugins: ['@html-eslint'],
	parser: '@html-eslint/parser',
};

const parts = [
	'./rules/seo.js',
	'./rules/style.js',
	'./rules/best-practice.js',
	'./rules/accessibility.js',
].map(part => require(part));

module.exports = { base, parts };
