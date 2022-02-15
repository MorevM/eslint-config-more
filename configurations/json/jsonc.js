const { processExports } = require('../../utils/helpers.js');

/**
 * JSONC and JSON5 are supersets of JSON, it allows to use comments.
 * This congig should be included together with main JSON configuration.
 */

module.exports = (mode) => processExports({
	mode,
	base: {
		plugins: ['jsonc'],
		parser: 'jsonc-eslint-parser',
	},
	parts: [
		'./rules/jsonc.js',
	].map(part => require(part)),
});
