/**
 * This is a ruleset to keep consistent order of fields in `package.json`
 * This congig should be included together with main JSON configuration.
 */
const { processExports } = require('../../utils/helpers');

module.exports = (mode) => processExports({
	mode,
	base: {
		plugins: ['jsonc'],
		parser: 'jsonc-eslint-parser',
	},
	parts: [
		'./rules/package-json.js',
	].map(part => require(part)),
});
