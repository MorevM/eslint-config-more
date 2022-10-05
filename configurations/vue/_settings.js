const base = {
	plugins: ['vue'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: {
			js: '@babel/eslint-parser',
			ts: '@typescript-eslint/parser',
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			plugins: ['@babel/plugin-syntax-jsx'],
		},
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
