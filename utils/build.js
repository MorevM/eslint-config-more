const { resolve, join } = require('path');
const fs = require('fs');
const { ESLint } = require('eslint');

const eslint = new ESLint({ fix: true });

const pkg = require('../package.json');
const { makeConfig } = require('./tools.js');
const { configurations, presets } = require('./meta.js');

const ROOT_DIR = resolve(__dirname, '..');
const [CONFIGS_DIR_REL, PRESETS_DIR_REL, UTILS_DIR_REL] = [
	'./build/configurations/',
	'./build/presets/',
	'./build/utils/',
];

const [CONFIGS_DIR, PRESETS_DIR, UTILS_DIR] = [
	join(ROOT_DIR, CONFIGS_DIR_REL),
	join(ROOT_DIR, PRESETS_DIR_REL),
	join(ROOT_DIR, UTILS_DIR_REL),
];

[CONFIGS_DIR, PRESETS_DIR, UTILS_DIR].forEach(dir => {
	fs.rmSync(dir, { recursive: true, force: true });
	fs.mkdirSync(dir, { recursive: true });
});

fs.copyFileSync(
	join(ROOT_DIR, 'utils', 'eslint-plugin-import-resolver.js'),
	join(UTILS_DIR, 'eslint-plugin-import-resolver.js'),
);

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

const toConfigExports = (content) => {
	const withUnwrappedPath = JSON.stringify(content, null, '\t').replaceAll(/"(\[path\.resolve.*)"/g, '$1');
	return `const path = require('path');\n\nmodule.exports = ${withUnwrappedPath};`;
};

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
	// Create presets
	await presets.forEach(async (preset) => {
		await ['default', 'strict', 'quiet'].forEach(async (mode) => {
			const configSource = toConfigExports(
				makeConfig(preset.configurations.map(c => ({ ...c, mode }))),
			);

			const { filename, exportsName } = getNames(preset, mode, true);
			exportsField[exportsName] = `${PRESETS_DIR_REL}${filename}`;

			fs.writeFileSync(`${PRESETS_DIR}/${filename}`, configSource);
		});
	});

	// Create configurations
	await configurations.forEach(async (config) => {
		await ['default', 'strict', 'quiet'].forEach(async (mode) => {
			const configSource = toConfigExports(makeConfig([{ ...config, mode }]));

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
