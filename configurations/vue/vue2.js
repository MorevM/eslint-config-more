const { processExports } = require('../../utils/helpers.js');
const { base, parts: commonParts } = require('./_settings.js');

const vue2Parts = [
	'./rules/vue2/essential.js',
	'./rules/vue2/strongly-recommended.js',
	'./rules/vue2/uncategorized.js',
].map(part => require(part));

const parts = [...commonParts, ...vue2Parts];

module.exports = (mode) => processExports({ mode, base,	parts });
