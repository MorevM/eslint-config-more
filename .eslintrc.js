const { makeConfig } = require('./utils/tools.js');

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
		name: 'vue/vue3',
		overrides: {
			 // There is no such extension, just needed to test all things working correct
			files: ['*.vue3'],
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
		overrides: { files: ['*.jsonc', '*.json5', 'jsconfig.json', 'tsconfig.json'] },
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
	{
		name: 'typescript',
		overrides: {
			files: ['*.ts'],
		},
	},
	{
		name: 'html',
		overrides: {
			files: ['*.html'],
		},
	},
	{
		name: 'markdown',
		overrides: {
			files: ['*.md'],
		},
	},
].reverse());

config.overrides = config.overrides || [];
config.overrides.push({
	files: ['*.js'],
	rules: {
		'node/global-require': 'off',
		'import/no-dynamic-require': 'off',
	},
}, {
	files: ['*.md'],
	rules: {
		// Doesn't respect HTML element indentation
		'markdownlint/md007': 'off',
		'no-autofix/markdownlint/md007': 'off',
	},
});

module.exports = config;
