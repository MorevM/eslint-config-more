const base = require('../../base/index.js');
const { extensionFromBase } = require('../../../utils/helpers.js');

const rulesToExtend = [
	'+array-bracket-newline',
	'+array-bracket-spacing',
	'+array-element-newline',
	'+comma-style',
	'+indent',
	'+key-spacing',
	'no-dupe-keys',
	'+no-floating-decimal',
	'no-multi-str',
	'no-octal-escape',
	'no-octal',
	'no-sparse-arrays',
	'no-useless-escape',
	'+object-curly-newline',
	'+object-curly-spacing',
	'+object-property-newline',
	// '+sort-keys', // may rewrite `package.json` sort options
	'+space-unary-ops',
	// Conflict with JSON
	// 'comma-dangle',
	// 'quote-props',
	// 'quotes',
];

const extensionRules = extensionFromBase({
	prefix: 'jsonc',
	baseRules: base('bypass').rules,
	rulesToExtend,
});

extensionRules.rules['+jsonc/comma-dangle'] = ['error', 'never'];
extensionRules.rules['+jsonc/quote-props'] = ['error', 'always'];
extensionRules.rules['+jsonc/quotes'] = ['error', 'double', { avoidEscape: false }];

module.exports = extensionRules;
