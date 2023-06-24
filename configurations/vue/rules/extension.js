const base = require('../../base/index.js');
const { extensionFromBase } = require('../../../utils/helpers.js');

const rulesToExtend = [
	'+array-bracket-newline',
	'+array-bracket-spacing',
	'+array-element-newline',
	'+arrow-spacing',
	'+block-spacing',
	'+brace-style',
	'camelcase',
	'+comma-dangle',
	'+comma-spacing',
	'+comma-style',
	'+dot-location',
	'+dot-notation',
	'!eqeqeq',
	'+func-call-spacing',
	'+key-spacing',
	'+keyword-spacing',
	'max-len',
	'+multiline-ternary',
	'no-console',
	'no-constant-condition',
	'no-empty-pattern',
	'+no-extra-parens',
	'no-irregular-whitespace',
	'no-loss-of-precision',
	'no-restricted-syntax',
	'no-sparse-arrays',
	'no-useless-concat',
	'+object-curly-newline',
	'+object-curly-spacing',
	'+object-property-newline',
	'object-shorthand',
	'+operator-linebreak',
	// It seems https://github.com/JuniorTour/vue-template-babel-compiler
	// not stable, turned off for a while
	// TODO: [2024-05-11] Try again with vue-template-babel-compiler
	// '!prefer-template', // autofix works strange sometimes
	'+quote-props',
	'+space-in-parens',
	'+space-infix-ops',
	'+space-unary-ops',
	'+template-curly-spacing',
];

module.exports = extensionFromBase({
	prefix: 'vue',
	baseRules: base('default').rules,
	rulesToExtend,
});
