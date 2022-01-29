const _mergeWith = require('lodash.mergewith');
const { processExports } = require('../utils/helpers');
const baseConfig = require('../configurations/base/_settings');

const getRulesAsWritten = () => _mergeWith({}, ...(baseConfig.parts || [])).rules;

const getEntriesForRulesStartsWith = (sign) =>
	Object.entries(getRulesAsWritten())
		.filter(([rule, value]) => rule.startsWith(sign))
		.map(([rule, value]) => [rule.slice(1), value]);

const setupAutofixableTests = (autofixable) => {
	const autofixableEntries = getEntriesForRulesStartsWith('+');
	const autofixableRules = autofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({ autofixable, ...baseConfig });

	const autofixedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => autofixableRules.includes(rule));

	return { autofixableEntries, autofixedEntries };
};

const setupNonAutofixableTests = (autofixable) => {
	const nonAutofixableEntries = getEntriesForRulesStartsWith('!');
	const nonAutofixableRules = nonAutofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({ autofixable, ...baseConfig });

	const processedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => nonAutofixableRules.some(r => rule.includes(r)));

	const processedRules = Object.fromEntries(processedEntries);

	return { nonAutofixableEntries, nonAutofixableRules, processedEntries, processedRules };
};

module.exports = { setupAutofixableTests, setupNonAutofixableTests };
