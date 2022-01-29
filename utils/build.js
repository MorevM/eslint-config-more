const { resolve } = require('path');
const fs = require('fs');
const { ESLint } = require('eslint');
const eslint = new ESLint({ fix: true });

const pkg = require('../package.json');

const { makeConfig } = require('./tools');

const [CONFIGS_DIR_REL, PRESETS_DIR_REL] = ['./build/configurations/', './build/presets/'];
const [CONFIGS_DIR, PRESETS_DIR] = [resolve('..', CONFIGS_DIR_REL), resolve('..', PRESETS_DIR_REL)];

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
	{ name: 'vue2', output: 'vue2' },
	{ name: 'yaml' },
];

const rulesets = {
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
			overrides: { files: ['*.jsonc', '*.json5'] },
		},
		{
			name: 'json/package-json',
			overrides: { files: ['package.json'] },
		},
		{
			name: 'yaml',
			overrides: { files: ['*.yaml', '*.yml'] },
		},
	],
};

const presets = [
	{
		name: 'all',
		configurations: [
			{ name: 'base' },
			{ name: 'node' },
			{ name: 'browser' },
			...rulesets.jest,
			...rulesets.assistive,
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
];

const exportsField = {};

const getNames = (config, autofixable, isPresets = false) => {
	const resolvedName = config.output || config.name;

	const filename = (autofixable === 'bypass')
		? `${resolvedName}.js`
		: `${resolvedName}-${autofixable}-autofixable.js`;

	const exportsPrefix = isPresets ? 'preset/' : '';

	let exportsName = (autofixable === 'bypass')
		? `./${exportsPrefix}${resolvedName}`
		: `./${exportsPrefix}${resolvedName}/${autofixable}-autofixable`;

	// Main export
	if (isPresets && resolvedName === 'all' && autofixable === 'bypass') {
		exportsName = exportsName.replace('/preset/all', '');
	}

	return { filename, exportsName };
};

(async () => {
	// Create presets
	await presets.forEach(async (preset) => {
		await ['bypass', 'warn', 'off'].forEach(async (autofixable) => {
			let configSource = makeConfig(preset.configurations.map(c => ({ ...c, autofixable })));
			configSource = `module.exports = ${JSON.stringify(configSource, null, '\t')}`;

			const { filename, exportsName } = getNames(preset, autofixable, true);
			exportsField[exportsName] = `${PRESETS_DIR_REL}${filename}`;

			fs.writeFileSync(`${PRESETS_DIR}/${filename}`, configSource);
		});
	});

	// Create configurations
	await availableConfigs.forEach(async (config) => {
		await ['bypass', 'warn', 'off'].forEach(async (autofixable) => {
			let configSource = makeConfig([{ ...config, autofixable }]);
			configSource = `module.exports = ${JSON.stringify(configSource, null, '\t')}`;

			const { filename, exportsName } = getNames(config, autofixable);
			exportsField[exportsName] = `${CONFIGS_DIR_REL}${filename}`;

			fs.writeFileSync(`${CONFIGS_DIR}/${filename}`, configSource);
		});
	});

	pkg.exports = exportsField;
	pkg.main = exportsField['.'];

	fs.writeFileSync(`package.json`, JSON.stringify(pkg, null, '\t'));
	ESLint.outputFixes(await eslint.lintFiles('./package.json')); // lint updated
})();
