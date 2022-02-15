const { processExports } = require('../../utils/helpers.js');
const { base, parts: commonParts } = require('./_settings.js');

const vue3Parts = [
	'./rules/vue3/essential.js',
	'./rules/vue3/strongly-recommended.js',
	'./rules/vue3/uncategorized.js',
].map(part => require(part));

const parts = [...commonParts, ...vue3Parts];

module.exports = (mode) => processExports({ mode, base,	parts });
