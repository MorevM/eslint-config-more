const configurations = [
	{ name: 'base' },
	{ name: 'browser' },
	{ name: 'cypress' },
	{ name: 'html' },
	{ name: 'jest' },
	{ name: 'json' },
	{ name: 'json/jsonc', output: 'jsonc' },
	{ name: 'json/package-json', output: 'package-json' },
	{ name: 'markdown' },
	{ name: 'node' },
	{ name: 'typescript' },
	{ name: 'vue/vue2', output: 'vue2' },
	{ name: 'vue/vue3', output: 'vue3' },
	{ name: 'yaml' },
];

const withOverrides = {
	typescript: [
		{
			name: 'typescript',
			overrides: { files: ['*.ts'] },
		},
	],
	vue2: [
		{
			name: 'vue/vue2',
			overrides: { files: ['*.vue'] },
		},
	],
	vue3: [
		{
			name: 'vue/vue3',
			overrides: { files: ['*.vue'] },
		},
	],
	jest: [
		{
			name: 'jest',
			overrides: {
				files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
				ignorePatterns: ['**/cypress/**/*'],
			},
		},
	],
	cypress: [
		{
			name: 'cypress',
			overrides: {
				files: ['**/cypress/integration/**/*.*'],
				ignorePatterns: ['*.hot-update.js'],
			},
		},
	],
	html: [
		{
			name: 'html',
			overrides: { files: ['*.html'] },
		},
	],
	assistive: [
		{
			name: 'json',
			overrides: { files: ['*.json', '*.json5', '*.jsonc'] },
		},
		{
			name: 'json/jsonc',
			overrides: { files: ['*.jsonc', '*.json5', 'jsconfig.json', 'tsconfig.json'] },
		},
		{
			name: 'json/package-json',
			overrides: { files: ['package.json'] },
		},
		{
			name: 'markdown',
			overrides: { files: ['*.md'] },
		},
		{
			name: 'yaml',
			overrides: { files: ['*.yaml', '*.yml'] },
		},
	].reverse(),
	markdown: [
		{
			name: 'markdown',
			overrides: { files: ['*.md'] },
		},
	],
};

const presets = [
	{
		name: 'common',
		configurations: [
			{ name: 'base' },
			{ name: 'node' },
			{ name: 'browser' },
			...withOverrides.typescript,
			...withOverrides.jest,
			...withOverrides.cypress,
			...withOverrides.assistive,
			...withOverrides.html,
		],
	},
	{
		name: 'assistive',
		configurations: [
			...withOverrides.assistive,
		],
	},
	{
		name: 'cypress',
		configurations: [
			...withOverrides.cypress,
		],
	},
	{
		name: 'html',
		configurations: [
			...withOverrides.html,
		],
	},
	{
		name: 'jest',
		configurations: [
			...withOverrides.jest,
		],
	},
	{
		name: 'markdown',
		configurations: [
			...withOverrides.markdown,
		],
	},
	{
		name: 'typescript',
		configurations: [
			...withOverrides.typescript,
		],
	},
	{
		name: 'vue2',
		configurations: [
			...withOverrides.vue2,
		],
	},
	{
		name: 'vue3',
		configurations: [
			...withOverrides.vue3,
		],
	},
];

module.exports = { configurations, presets };
