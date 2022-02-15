const { setupNonAutofixableTests } = require('./tests-utils.js');

describe('`No autofix` mechanic', () => {
	it('Processes all rules marked as `non-autofixable` with `!` sign', () => {
		const { nonAutofixableEntries, processedEntries } = setupNonAutofixableTests('default');

		expect(nonAutofixableEntries).toHaveLength(processedEntries.length / 2);
	});

	it('Turns off all rules marked as `non-autofixable`', () => {
		const { nonAutofixableRules, processedRules } = setupNonAutofixableTests('default');

		nonAutofixableRules.forEach(rule => {
			expect(processedRules[rule]).toBe('off');
		});
	});

	it('Adds rule with prefix `no-autofix/` for rules marked as `non-autofixable`', () => {
		const { nonAutofixableRules, processedRules } = setupNonAutofixableTests('default');

		nonAutofixableRules.forEach(rule => {
			expect(processedRules).toHaveProperty(`no-autofix/${rule}`);
		});
	});

	it('Values of rules prefixed `no-autofix/` are same with base config', () => {
		const { nonAutofixableEntries, nonAutofixableRules, processedRules } = setupNonAutofixableTests('default');
		const nonAutofixableObject = Object.fromEntries(nonAutofixableEntries);

		nonAutofixableRules.forEach(rule => {
			expect(processedRules[`no-autofix/${rule}`]).toStrictEqual(nonAutofixableObject[rule]);
		});
	});
});
