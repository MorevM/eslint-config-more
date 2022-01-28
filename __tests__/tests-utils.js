const { resolve } = require('node:path');
const _mergeWith = require('lodash.mergewith');
const { processExports } = require('../utils/helpers');
const baseConfigParts = require('../configurations/base/_parts');

const PATH_TO_JS_CONFIG = '../configurations/base/';

const getRulesAsWritten = () => _mergeWith(
	{},
	...baseConfigParts.parts.map(part =>
		require(resolve(__dirname, PATH_TO_JS_CONFIG, part))),
).rules;

const getEntriesForRulesStartsWith = (sign) =>
	Object.entries(getRulesAsWritten())
		.filter(([rule, value]) => rule.startsWith(sign))
		.map(([rule, value]) => [rule.slice(1), value]);

const setupAutofixableTests = (autofixable) => {
	const autofixableEntries = getEntriesForRulesStartsWith('+');
	const autofixableRules = autofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({
		autofixable,
		context: resolve(__dirname, PATH_TO_JS_CONFIG),
		initial: baseConfigParts.initial,
		parts: baseConfigParts.parts,
	});

	const autofixedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => autofixableRules.includes(rule));

	return { autofixableEntries, autofixedEntries };
};

const setupNonAutofixableTests = (autofixable) => {
	const nonAutofixableEntries = getEntriesForRulesStartsWith('!');
	const nonAutofixableRules = nonAutofixableEntries.map(([rule]) => rule);

	const processedConfig = processExports({
		autofixable,
		context: resolve(__dirname, PATH_TO_JS_CONFIG),
		initial: baseConfigParts.initial,
		parts: baseConfigParts.parts,
	});

	const processedEntries = Object.entries(processedConfig.rules)
		.filter(([rule, value]) => nonAutofixableRules.some(r => rule.includes(r)));

	const processedRules = Object.fromEntries(processedEntries);

	return { nonAutofixableEntries, nonAutofixableRules, processedEntries, processedRules };
};

module.exports = { setupAutofixableTests, setupNonAutofixableTests };
