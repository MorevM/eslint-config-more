const { processExports } = require('../../utils/helpers');
const { base, parts } = require('./_settings');

module.exports = (autofixable) => processExports({ autofixable, base, parts });
