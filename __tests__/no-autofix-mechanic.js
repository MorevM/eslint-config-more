const { setupNonAutofixableTests } = require('./tests-utils');

describe('`No autofix` mechanic', () => {
	it('Processes all rules marked as `non-autofixable` with `!` sign', () => {
		const { nonAutofixableEntries, processedEntries } = setupNonAutofixableTests('warn');

		expect(nonAutofixableEntries).toHaveLength(processedEntries.length / 2);
	});

	it('Turns off all rules marked as `non-autofixable`', () => {
		const { nonAutofixableRules, processedRules } = setupNonAutofixableTests('warn');

		nonAutofixableRules.forEach(rule => {
			expect(processedRules[rule]).toBe('off');
		});
	});

	it('Adds rule with prefix `no-autofix/` for rules marked as `non-autofixable`', () => {
		const { nonAutofixableRules, processedRules } = setupNonAutofixableTests('warn');

		nonAutofixableRules.forEach(rule => {
			expect(processedRules).toHaveProperty(`no-autofix/${rule}`);
		});
	});

	it('Values of rules prefixed `no-autofix/` are same with base config', () => {
		const { nonAutofixableEntries, nonAutofixableRules, processedRules } = setupNonAutofixableTests('warn');
		const nonAutofixableObject = Object.fromEntries(nonAutofixableEntries);

		nonAutofixableRules.forEach(rule => {
			expect(processedRules[`no-autofix/${rule}`]).toStrictEqual(nonAutofixableObject[rule]);
		});
	});
});
