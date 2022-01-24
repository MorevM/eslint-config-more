const { resolve } = require('path');
const _mergeWith = require('lodash.mergewith');

const autofixableRulesToWarn = (rules, autofixableList) => Object.fromEntries(
	Object.entries(rules)
		.map(([rule, value]) => {
			if (!autofixableList.includes(rule)) return [rule, value];
			if (Array.isArray(value)) {
				const clonedValue = [...value];
				clonedValue[0] = clonedValue[0] === 'off' ? 'off' : 'warn';
				return [rule, clonedValue];
			}
			return [rule, value === 'off' ? 'off' : 'warn'];
		}),
);

const autofixableRulesToOff = (rules, autofixableList) => Object.fromEntries(
	Object.entries(rules)
		.map(([rule, value]) => [rule, autofixableList.includes(rule) ? 'off' : value]),
);

const extensionFromBase = ({ prefix, baseRules, rulesToExtend }) => {
	const rules = rulesToExtend.reduce((acc, rule) => {
		const cleanRule = rule.replace(/^[!+]/, '');
		const autofixablePrefix = (cleanRule === rule) ? '' : rule[0];
		if (!baseRules[cleanRule]) return acc;
		return {
			...acc,
			[`${autofixablePrefix}${prefix}/${cleanRule}`]: baseRules[cleanRule],
		 };
	}, {});

	return { rules };
};

const processExports = ({ autofixable, context, initial, parts }) => {
	const mergedParts = _mergeWith(
		{ ...initial },
		...parts.map(part => require(resolve(context, part))),
		(ov, sv) => (Array.isArray(ov) ? [...sv, ...ov] : undefined),
	);

	const rules = Object.fromEntries(
		Object.entries(mergedParts.rules)
			.map(([key, value]) => [key.replace(/^\+|!/, ''), value]),
	);

	if (autofixable === 'bypass') return { ...mergedParts, rules };

	const autofixableRules = Object.entries(mergedParts.rules)
		.filter(([key]) => key.startsWith('+'))
		.map(([key]) => key.slice(1));

	const processedRules = autofixable === 'warn'
		? autofixableRulesToWarn(rules, autofixableRules)
		: autofixableRulesToOff(rules, autofixableRules);

	return { ...mergedParts, rules: processedRules };
};


module.exports = { processExports, extensionFromBase };
