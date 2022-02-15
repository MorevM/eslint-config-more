const { processExports } = require('../../utils/helpers.js');
const { base, parts } = require('./_settings.js');

module.exports = (mode) => processExports({ mode,	base,	parts });
