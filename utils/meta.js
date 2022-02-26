const configurations = [
	{ name: 'base' },
	{ name: 'node' },
	{ name: 'browser' },
	{ name: 'jest' },
	{ name: 'json' },
	{ name: 'json/jsonc', output: 'jsonc' },
	{ name: 'json/package-json', output: 'package-json' },
	{ name: 'vue/vue2', output: 'vue2' },
	{ name: 'vue/vue3', output: 'vue3' },
	{ name: 'yaml' },
	{ name: 'typescript' },
	{ name: 'html' },
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
			overrides: { files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'] },
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
			name: 'yaml',
			overrides: { files: ['*.yaml', '*.yml'] },
		},
	].reverse(),
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
			...withOverrides.assistive,
			...withOverrides.html,
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
	{
		name: 'jest',
		configurations: [
			...withOverrides.jest,
		],
	},
	{
		name: 'assistive',
		configurations: [
			...withOverrides.assistive,
		],
	},
	{
		name: 'typescript',
		configurations: [
			...withOverrides.typescript,
		],
	},
	{
		name: 'html',
		configurations: [
			...withOverrides.html,
		],
	},
];

module.exports = { configurations, presets };
