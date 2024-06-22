const baseConfig = require('../configurations/base/index.js');
const { ESLINT_FORMATTING_RULES } = require('./constants.js');

const extensionFromBase = (rule) => {
	const toSearch = ESLINT_FORMATTING_RULES.includes(rule)
		? `@stylistic/js/${rule}`
		: rule;

	const realValue = baseConfig.rules[toSearch];
	if (!realValue) {
		console.error(`There is no rule '${toSearch}' to extend.`);
	}

	return realValue;
};

module.exports = { extensionFromBase };
