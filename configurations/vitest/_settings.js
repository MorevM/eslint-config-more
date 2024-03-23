const base = {
	extends: ['plugin:vitest-globals/recommended'],
	env: {
		'vitest-globals/env': true,
	},
	settings: {
		vitest: {
			typecheck: true,
		},
	},
	rules: {
		'sonarjs/no-duplicate-string': 'off',
	},
};

const parts = [
	'./rules/vitest.js',
].map(part => require(part));

module.exports = { base, parts };
