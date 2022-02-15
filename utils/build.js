const { resolve } = require('path');
const fs = require('fs');
const { ESLint } = require('eslint');

const eslint = new ESLint({ fix: true });

const pkg = require('../package.json');

const { makeConfig } = require('./tools.js');

const [CONFIGS_DIR_REL, PRESETS_DIR_REL] = ['./build/configurations/', './build/presets/'];
const [CONFIGS_DIR, PRESETS_DIR] = [
	resolve(__dirname, '..', CONFIGS_DIR_REL),
	resolve(__dirname, '..', PRESETS_DIR_REL),
];

[CONFIGS_DIR, PRESETS_DIR].forEach(dir => {
	fs.rmSync(dir, { recursive: true, force: true });
	fs.mkdirSync(dir, { recursive: true });
});

const availableConfigs = [
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
];

const rulesets = {
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
			...rulesets.typescript,
			...rulesets.jest,
			...rulesets.assistive,
		],
	},
	{
		name: 'vue2',
		configurations: [
			...rulesets.vue2,
		],
	},
	{
		name: 'vue3',
		configurations: [
			...rulesets.vue3,
		],
	},
	{
		name: 'jest',
		configurations: [
			...rulesets.jest,
		],
	},
	{
		name: 'assistive',
		configurations: [
			...rulesets.assistive,
		],
	},
	{
		name: 'typescript',
		configurations: [
			...rulesets.typescript,
		],
	},
];

let exportsField = {};

const getNames = (config, mode, isPresets = false) => {
	const resolvedName = config.output || config.name;

	const filename = (mode === 'default')
		? `${resolvedName}.js`
		: `${resolvedName}-${mode}.js`;

	const exportsPrefix = isPresets ? 'preset/' : '';

	const exportsName = (mode === 'default')
		? `./${exportsPrefix}${resolvedName}`
		: `./${exportsPrefix}${resolvedName}/${mode}`;

	return { filename, exportsName };
};

(async () => {
	// Create presets
	await presets.forEach(async (preset) => {
		await ['default', 'strict', 'quiet'].forEach(async (mode) => {
			let configSource = makeConfig(preset.configurations.map(c => ({ ...c, mode })));
			configSource = `module.exports = ${JSON.stringify(configSource, null, '\t')}`;

			const { filename, exportsName } = getNames(preset, mode, true);
			exportsField[exportsName] = `${PRESETS_DIR_REL}${filename}`;

			fs.writeFileSync(`${PRESETS_DIR}/${filename}`, configSource);
		});
	});

	// Create configurations
	await availableConfigs.forEach(async (config) => {
		await ['default', 'strict', 'quiet'].forEach(async (mode) => {
			let configSource = makeConfig([{ ...config, mode }]);
			configSource = `module.exports = ${JSON.stringify(configSource, null, '\t')}`;

			const { filename, exportsName } = getNames(config, mode);
			exportsField[exportsName] = `${CONFIGS_DIR_REL}${filename}`;

			fs.writeFileSync(`${CONFIGS_DIR}/${filename}`, configSource);
		});
	});

	// Main export aliasing `/presets/common`
	exportsField = {
		'.': exportsField['./preset/common'],
		...exportsField,
	};

	pkg.exports = exportsField;
	pkg.main = exportsField['.'];

	fs.writeFileSync(`package.json`, JSON.stringify(pkg, null, '\t'));
	ESLint.outputFixes(await eslint.lintFiles('./package.json')); // lint updated
})();
