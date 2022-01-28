const initial = {
	plugins: ['vue'],
	overrides: [{
		files: ['*.vue'],
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
	}],
};

const parts = [
	'./rules/base',
	'./rules/essential',
	'./rules/recommended',
	'./rules/strongly-recommended',
	'./rules/uncategorized',
	'./rules/extension',
];

module.exports = { initial, parts };
