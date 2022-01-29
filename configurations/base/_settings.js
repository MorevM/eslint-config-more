const base = {
	env: {
		es6: true,
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: true,
			jsx: true,
		},
		ecmaVersion: 2021,
		requireConfigFile: false,
		sourceType: 'module',
	},
};

const parts = [
	'./rules/possible-problems.js',
	'./rules/suggestions.js',
	'./rules/layout-and-formatting.js',

	'./plugins/unicorn.js',
	'./plugins/sonarjs.js',
].map(part => require(part));

module.exports = { base, parts };
