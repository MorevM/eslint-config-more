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
		const realValue = baseRules[`no-autofix/${cleanRule}`] || baseRules[cleanRule];
		if (!realValue) return acc;

		const autofixablePrefix = (cleanRule === rule) ? '' : rule[0];
		return {
			...acc,
			[`${autofixablePrefix}${prefix}/${cleanRule}`]: realValue,
		 };
	}, {});

	return { rules };
};

const processExports = ({ autofixable, context, initial, parts }) => {
	const mergedParts = _mergeWith(
		{ plugins: ['no-autofix'] },
		{ ...initial },
		...parts.map(part => require(resolve(context, part))),
		(ov, sv) => (Array.isArray(ov) ? [...sv, ...ov] : undefined),
	);

	const rules = Object.fromEntries(
		Object.entries(mergedParts.rules)
			.reduce((acc, [rule, value]) => {
				if (rule.startsWith('!')) {
					const cleanRule = rule.slice(1);
					return [...acc, [cleanRule, 'off'], [`no-autofix/${cleanRule}`, value]];
				}
				return [...acc, [rule.replace(/^[!+]/, ''), value]];
			}, []),
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
