const { makeConfig } = require('./utils/tools');

module.exports = makeConfig([
	{ name: 'base' },
	{ name: 'browser' },
	{ name: 'node' },
	{
		name: 'jest',
		overrides: {
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		},
	},
	{
		name: 'json',
		overrides: {
			files: ['*.json', '*.json5', '*.jsonc'],
		},
	},
	{
		name: 'json/jsonc',
		overrides: {
			files: ['*.jsonc', '*.json5'],
		},
	},
	{
		name: 'json/package-json',
		overrides: {
			files: ['package.json'],
		},
	},
	{
		name: 'yaml',
		overrides: {
			files: ['*.yaml', '*.yml'],
		},
	},
]);
