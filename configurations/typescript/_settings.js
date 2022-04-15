const base = {
	plugins: ['@typescript-eslint'],
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
		},
		'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
		'import/external-module-folders': ['node_modules', 'node_modules/@types'],
	},
	rules: {
		'unicorn/prefer-json-parse-buffer': 'off',
	},
};

const parts = [
	'./rules/typescript.js',
].map(part => require(part));

module.exports = { base, parts };
