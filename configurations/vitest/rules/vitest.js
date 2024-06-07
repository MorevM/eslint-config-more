module.exports = {
	plugins: ['vitest', 'jest-formatting'],
	rules: {
		// Forbidden `.spec` test file pattern
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
		'vitest/consistent-test-filename': ['error', {
			pattern: '.*\\.test\\.[tj]sx?$',
			allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
		}],

		// Prefer `test` or `it` but not both (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
		'+vitest/consistent-test-it': ['warn', {
			fn: 'test',
			withinDescribe: 'it',
		}],

		// Enforce having expectation in test body
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
		'vitest/expect-expect': ['error', {
			assertFunctionNames: ['expect'],
			additionalTestBlockFunctions: [],
		}],

		// Enforce a maximum number of `expect` per test
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
		'vitest/max-expects': ['off', { max: 99 }],

		// Nested describe block should be less than set max value or default value
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
		'vitest/max-nested-describe': ['warn', { max: 4 }],

		// Disallow alias methods (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
		'+vitest/no-alias-methods': 'warn',

		// Disallow commented out tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
		'vitest/no-commented-out-tests': 'warn',

		// Disallow conditional `expect`s
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
		'vitest/no-conditional-expect': 'warn',

		// Disallow conditional tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
		'vitest/no-conditional-in-test': 'warn',

		// Disallow conditional tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
		'vitest/no-conditional-tests': 'error',

		// Disallow disabled tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
		'vitest/no-disabled-tests': 'warn',

		// Disallow duplicate hooks and teardown hooks
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
		'vitest/no-duplicate-hooks': 'error',

		// Disallow focused tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
		'vitest/no-focused-tests': ['error', { fixable: false }],

		// Disallow setup and teardown hooks
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
		'vitest/no-hooks': 'off',

		// Disallow identical titles
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
		'vitest/no-identical-title': 'error',

		// Disallow importing `node:test` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
		'+vitest/no-import-node-test': 'error',

		// Disallow string interpolation in snapshots (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
		'+vitest/no-interpolation-in-snapshots': 'error',

		// Disallow large snapshots
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
		'vitest/no-large-snapshots': 'off',

		// Disallow importing from `__mocks__` directory
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
		'vitest/no-mocks-import': 'error',

		// Disallow specific matchers & modifiers
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
		'vitest/no-restricted-matchers': 'off',

		// Disallow specific `vi.` methods
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
		'vitest/no-restricted-vi-methods': 'off',

		// Disallow using `expect` outside of `it` or `test` blocks
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
		'vitest/no-standalone-expect': 'error',

		// Use `.only` and `.skip` over `f` and `x` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
		'+vitest/no-test-prefixes': 'error',

		// Disallow return statements in tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
		'vitest/no-test-return-statement': 'error',

		// Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
		'vitest/prefer-called-with': 'off',

		// Suggest using the built-in comparison matchers (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
		'+vitest/prefer-comparison-matcher': 'warn',

		// Prefer `.each` rather than manual loops
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
		'vitest/prefer-each': 'error',

		// Suggest using the built-in equality matchers
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
		'vitest/prefer-equality-matcher': 'warn',

		// Suggest using expect assertions instead of callbacks
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
		'vitest/prefer-expect-assertions': ['off', {
			onlyFunctionsWithAsyncKeyword: true,
		}],

		// Prefer `await expect(...).resolves` over `expect(await ...)` syntax (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
		'+vitest/prefer-expect-resolves': 'error',

		// Prefer having hooks in a consistent order
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
		'vitest/prefer-hooks-in-order': 'warn',

		// Suggest having hooks before any test cases
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
		'vitest/prefer-hooks-on-top': 'error',

		// Enforce lowercase titles (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
		'+vitest/prefer-lowercase-title': 'off',

		// Prefer mock resolved/rejected shorthands for promises (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
		'+vitest/prefer-mock-promise-shorthand': 'warn',

		// Prefer including a hint with external snapshots
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
		'vitest/prefer-snapshot-hint': ['warn', 'always'],

		// Suggest using `vi.spyOn()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
		'+vitest/prefer-spy-on': 'error',

		// Suggest using `toStrictEqual()`
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
		'vitest/prefer-strict-equal': 'warn',

		// Suggest using `toBe()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
		'+vitest/prefer-to-be': 'warn',

		// Suggest using `toBeFalsy()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
		'+vitest/prefer-to-be-falsy': 'off',

		// Suggest using `toBeObject()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
		'+vitest/prefer-to-be-object': 'off',

		// Suggest using `toBeTruthy()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
		'+vitest/prefer-to-be-truthy': 'off',

		// Suggest using `toContain()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
		'+vitest/prefer-to-contain': 'warn',

		// Suggest using `toHaveLength()` (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
		'+vitest/prefer-to-have-length': 'warn',

		// Suggest using `test.todo` (autofixable but may be confusing)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
		'!vitest/prefer-todo': 'off',

		// Require setup and teardown code to be within a hook
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
		'vitest/require-hook': ['error', {
			allowedFunctionCalls: [],
		}],

		// Require local Test Context for concurrent snapshot tests
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
		'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

		// Require `toThrow()` to be called with an error message
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
		'vitest/require-to-throw-message': 'off',

		// Enforce that all tests are in a top-level `describe`
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
		'vitest/require-top-level-describe': ['error', {
			maxNumberOfTopLevelDescribes: 2,
		}],

		// Enforce valid `describe()` callback
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
		'vitest/valid-describe-callback': 'error',

		// Enforce valid `expect()` usage
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
		'vitest/valid-expect': 'error',

		// Enforce valid titles (autofixable)
		// https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
		'+vitest/valid-title': 'warn',

		// Nothing jest-special inside

		// Enable all of the rules of `jest-formatting`, all is autofixable:
		// * padding-around-after-all-blocks
		// * padding-around-after-each-blocks
		// * padding-around-before-all-blocks
		// * padding-around-before-each-blocks
		// * padding-around-expect-groups
		// * padding-around-describe-blocks
		// * padding-around-test-blocks
		// https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-all.md
		'+jest-formatting/padding-around-all': 'warn',
	},
};
