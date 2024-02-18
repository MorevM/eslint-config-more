const _mergeWith = require('lodash.mergewith');
const { processExports } = require('../utils/helpers.js');
const baseConfig = require('../configurations/base/_settings.js');

const getRulesAsWritten = () => _mergeWith({}, ...(baseConfig.parts || [])).rules;

const getEntriesForRulesStartsWith = (sign) =>
	Object.entries(getRulesAsWritten())
		.filter(([rule, value]) => rule.startsWith(sign))
		.map(([rule, value]) => [rule.slice(1), value]);

const setupAutofixableTests = () => {
	const autofixableEntries = getEntriesForRulesStartsWith('+');
	const autofixableRules = autofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({ ...baseConfig });

	const autofixedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => autofixableRules.includes(rule));

	return { autofixableEntries, autofixedEntries };
};

const setupNonAutofixableTests = () => {
	const nonAutofixableEntries = getEntriesForRulesStartsWith('!');
	const nonAutofixableRules = nonAutofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({ ...baseConfig });

	const processedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => nonAutofixableRules.some(r => rule.includes(r)));

	const processedRules = Object.fromEntries(processedEntries);

	return { nonAutofixableEntries, nonAutofixableRules, processedEntries, processedRules };
};

module.exports = { setupAutofixableTests, setupNonAutofixableTests };
