const base = {
	plugins: ['vue'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 11,
		sourceType: 'module',
		requireConfigFile: false,
	},
	rules: {
		indent: 'off',
	},
};

const parts = [
	'./rules/base',
	'./rules/essential',
	'./rules/recommended',
	'./rules/strongly-recommended',
	'./rules/uncategorized',
	'./rules/extension',
].map(part => require(part));

module.exports = { base, parts };
