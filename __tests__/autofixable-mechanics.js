const { setupAutofixableTests } = require('./tests-utils.js');

describe('Autofixable mechanics', () => {
	// Common
	it('Processes all rules marked as `autofixable` with `+` sign', () => {
		const { autofixableEntries, autofixedEntries } = setupAutofixableTests('default');

		expect(autofixableEntries).toHaveLength(autofixedEntries.length);
	});

	// Autofixable to `warn`
	describe('`Autofixable rules to warn` mechanic', () => {
		it('Doesn\'t set severity to `warn` if base rule severity is `off`', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('default');

			const offRules = autofixableEntries
				// eslint-disable-next-line jest/no-conditional-in-test
				.filter(([rule, value]) => (Array.isArray(value) ? value[0] === 'off' : value === 'off'));

			const autofixed = Object.fromEntries(autofixedEntries);
			offRules.forEach(([rule, value]) => {
				expect(autofixed[rule]).toStrictEqual(value);
			});
		});

		it('Sets severity to `warn` for string rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('default');

			const stringWarnRules = autofixableEntries
				// eslint-disable-next-line jest/no-conditional-in-test
				.filter(([rule, value]) => !Array.isArray(value) && value !== 'off')
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('warn');
			});
		});

		it('Sets severity to `warn` for array rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('default');

			const stringWarnRules = autofixableEntries
				// eslint-disable-next-line jest/no-conditional-in-test
				.filter(([rule, value]) => Array.isArray(value) && value[0] !== 'off')
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule][0]).toBe('warn');
			});
		});
	});

	// Autofixable to `off`
	describe('`Autofixable rules to off` mechanic', () => {
		it('Sets severity to `off` for string rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('quiet');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => !Array.isArray(value))
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('off');
			});
		});

		it('Sets severity to `off` for array rule notation', () => {
			const { autofixableEntries, autofixedEntries } = setupAutofixableTests('quiet');

			const stringWarnRules = autofixableEntries
				.filter(([rule, value]) => Array.isArray(value))
				.map(([rule]) => rule);

			const autofixed = Object.fromEntries(autofixedEntries);
			stringWarnRules.forEach(rule => {
				expect(autofixed[rule]).toBe('off');
			});
		});
	});
});
