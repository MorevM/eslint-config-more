const base = {
	plugins: [
		'@typescript-eslint',
		'@stylistic/ts',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	// Stolen from `airbnb` https://github.com/iamturns/eslint-config-airbnb-typescript
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
		},
		'import/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
			},
			// Let it be done like that for a while
			// Take a look on `eslint-import-resolver-typescript` if smth wrong
			typescript: {},
		},
		'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
		'import/external-module-folders': ['node_modules', 'node_modules/@types'],
	},
	rules: {
		'no-undef': 'off',
		'no-duplicate-imports': 'off',
		'unicorn/prefer-json-parse-buffer': 'off',
		'jsdoc/require-returns-type': 'off',
		'jsdoc/require-param-type': 'off',
	},
};

const parts = [
	'./rules/typescript.js',
].map(part => require(part));

module.exports = { base, parts };
