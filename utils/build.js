const { resolve } = require('path');
const fs = require('fs');
const { ESLint } = require('eslint');
const eslint = new ESLint({ fix: true });

const pkg = require('../package.json');

const { makeConfig } = require('./tools');

const BUILD_DIR = resolve(process.cwd(), 'build');

const configurations = [
	{ name: 'base' },
	{ name: 'node' },
	{ name: 'jest' },
	{ name: 'json' },
	{ name: 'json/jsonc', output: 'jsonc' },
	{ name: 'json/package-json', output: 'package-json' },
	{ name: 'vue2', output: 'vue2' },
	{ name: 'yaml' },
];

fs.rmSync(BUILD_DIR, { recursive: true, force: true });
fs.mkdirSync(BUILD_DIR, { recursive: true });

const exportsField = {
	'.': './.eslintrc.js',
};

(async () => {
	await configurations.forEach(async (config) => {
		await ['bypass', 'warn', 'off'].forEach(async (autofixable) => {
			let configSource = makeConfig([{ ...config, autofixable }]);
			configSource = `module.exports = ${JSON.stringify(configSource, null, '\t')}`;

			const filename = (autofixable === 'bypass')
				? `${config.output || config.name}.js`
				: `${config.output || config.name}-${autofixable}-autofixable.js`;

			const exportsName = (autofixable === 'bypass')
				? `./${config.output || config.name}`
				: `./${config.output || config.name}/${autofixable}-autofixable`;

			exportsField[exportsName] = `./build/${filename}`;

			fs.writeFileSync(`${BUILD_DIR}/${filename}`, configSource);
		});
	});

	pkg.exports = exportsField;

	fs.writeFileSync(`package.json`, JSON.stringify(pkg, null, '\t'));
	ESLint.outputFixes(await eslint.lintFiles('./package.json')); // lint updated
})();
