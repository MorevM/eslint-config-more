const { processExports } = require('../../utils/helpers');
const { initial, parts } = require('./_parts');

module.exports = processExports({
	autofixable: 'bypass',
	context: __dirname,
	initial,
	parts,
	mergeBase: 'overrides[0]',
});
