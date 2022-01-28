const initial = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
};


const parts = [
	'./rules/possible-problems.js',
	'./rules/suggestions.js',
	'./rules/layout-and-formatting.js',

	'./plugins/unicorn.js',
	'./plugins/sonarjs.js',
];

module.exports = { initial, parts };
