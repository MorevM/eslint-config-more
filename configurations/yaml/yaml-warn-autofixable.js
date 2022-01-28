const { processExports } = require('../../utils/helpers');
const { initial, parts } = require('./_parts');

module.exports = processExports({
	autofixable: 'warn',
	context: __dirname,
	initial,
	parts,
});
