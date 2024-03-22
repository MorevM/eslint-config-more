const configurations = [
	{ name: 'base' },
	{ name: 'browser' },
	{ name: 'cypress' },
	{ name: 'html' },
	{ name: 'jest' },
	{ name: 'vitest' },
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
			overrides: { files: ['*.ts', '*.cts', '*.mts'] },
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
				excludedFiles: ['**/cypress/**/*'],
			},
		},
	],
	vitest: [
		{
			name: 'vitest',
			overrides: {
				files: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
				excludedFiles: ['**/cypress/**/*'],
			},
		},
	],
	cypress: [
		{
			name: 'cypress',
			overrides: {
				files: [
					'**/cypress/integration/**/*.*', // Cypress < 10 defaults
					'**/cypress/e2e/**/*.*', // Cypress >= 10 defaults
				],
				excludedFiles: ['*.hot-update.js'],
			},
		},
	],
	html: [
		{
			name: 'html',
			overrides: { files: ['*.html', '*.htm'] },
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
			...withOverrides.typescript,
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
		name: 'vitest',
		configurations: [
			...withOverrides.vitest,
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
