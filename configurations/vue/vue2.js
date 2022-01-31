const { processExports } = require('../../utils/helpers');
const { base, parts: commonParts } = require('./_settings');

const vue2Parts = [
	'./rules/vue2/essential.js',
	'./rules/vue2/strongly-recommended.js',
].map(part => require(part));

const parts = [...commonParts, ...vue2Parts];

module.exports = (autofixable) => processExports({ autofixable, base,	parts });
