const { makeConfig } = require('./utils/tools');

const config = makeConfig([
	{ name: 'base' },
	{ name: 'browser' },
	{ name: 'node' },
	{
		name: 'vue/vue2',
		overrides: {
			files: ['*.vue'],
		},
	},
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

config.overrides = config.overrides || [];
config.overrides.push({
	files: ['*.js'],
	rules: {
		'node/global-require': 'off',
		'import/no-dynamic-require': 'off',
	},
});

module.exports = config;
