const { processExports } = require('../../utils/helpers');
const { base, parts } = require('./_settings');

module.exports = (mode) => processExports({ mode, base, parts });
