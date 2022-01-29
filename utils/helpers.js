const _mergeWith = require('lodash.mergewith');
const _clonedeep = require('lodash.clonedeep');

const mergeWithArrayComparer = (ov, sv) => (Array.isArray(ov) ? [...new Set([...sv, ...ov])] : undefined);

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

const getProcessedRules = ({ autofixable, base, rules }) => {
	if (autofixable === 'bypass') return rules;

	const autofixableRules = Object.entries(base.rules)
		.filter(([key]) => key.startsWith('+'))
		.map(([key]) => key.slice(1));

	return autofixable === 'warn'
		? autofixableRulesToWarn(rules, autofixableRules)
		: autofixableRulesToOff(rules, autofixableRules);
};

const processExports = ({ autofixable, base, parts }) => {
	const initialClone = _clonedeep(base);
	const mergedParts = _mergeWith(
		{ plugins: ['no-autofix'] },
		...(parts || []),
		mergeWithArrayComparer,
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

	const processedRules = getProcessedRules({ autofixable, base: mergedParts, rules });

	return _mergeWith(
		initialClone,
		{ ...mergedParts, rules: processedRules },
		mergeWithArrayComparer,
	);
};


module.exports = { processExports, extensionFromBase, mergeWithArrayComparer };
