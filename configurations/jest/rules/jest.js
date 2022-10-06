module.exports = {
	plugins: ['jest', 'jest-formatting'],
	rules: {
		// Have control over `test` and `it` usages (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
		'+jest/consistent-test-it': ['warn', {
			fn: 'test',
			withinDescribe: 'it',
		}],

		// Enforce assertion to be made in a test body
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
		'jest/expect-expect': ['error', {
			assertFunctionNames: ['expect'],
			additionalTestBlockFunctions: [],
		}],

		// Enforces a maximum number assertion calls in a test body
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
		'jest/max-expects': ['off', { max: 99 }],

		// Enforces a maximum depth to nested describe calls
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
		'jest/max-nested-describe': ['warn', { max: 3 }],

		// Disallow alias methods (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
		'+jest/no-alias-methods': 'warn',

		// Disallow commented out tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
		'jest/no-commented-out-tests': 'warn',

		// Prevent calling `expect` conditionally
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
		'jest/no-conditional-expect': 'warn',

		// Disallow conditional logic in tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
		'jest/no-conditional-in-test': 'warn',

		// Disallow use of deprecated functions (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
		'+jest/no-deprecated-functions': 'error',

		// Disallow disabled tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
		'jest/no-disabled-tests': 'warn',

		// Avoid using a callback in asynchronous tests and hooks
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
		'jest/no-done-callback': 'error',

		// Disallow duplicate setup and teardown hooks
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
		'jest/no-duplicate-hooks': 'error',

		// Disallow using `exports` in files containing tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
		'jest/no-export': 'error',

		// Disallow focused tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
		'jest/no-focused-tests': 'error',

		// Disallow setup and teardown hooks
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
		// Note: it depends
		'jest/no-hooks': 'off',

		// Disallow identical titles
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
		'jest/no-identical-title': 'error',

		// Disallow string interpolation inside snapshots
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
		'jest/no-interpolation-in-snapshots': 'error',

		// Disallow Jasmine globals (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
		'+jest/no-jasmine-globals': 'error',

		// Disallow large snapshots
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
		// @TODO [2023-05-11]: Think about it later
		'jest/no-large-snapshots': ['off', { maxSize: 12, inlineMaxSize: 6 }],

		// Disallow manually importing from `__mocks__`
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
		'jest/no-mocks-import': 'error',

		// Disallow specific `jest.` methods
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md
		'jest/no-restricted-jest-methods': 'off',

		// Disallow specific matchers & modifiers
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
		'jest/no-restricted-matchers': 'off',

		// Disallow using `expect` outside of `it` or `test` blocks
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
		'jest/no-standalone-expect': 'error',

		// Use `.only` and `.skip` over `f` and `x` (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
		'+jest/no-test-prefixes': 'error',

		// Disallow explicitly returning from tests
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
		'jest/no-test-return-statement': 'error',

		// Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
		'jest/prefer-called-with': 'off',

		// Suggest using the built-in comparison matchers (autofixable but may be confusing)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
		'+jest/prefer-comparison-matcher': 'warn',

		// Prefer using `.each` rather than manual loops
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
		'jest/prefer-each': 'error',

		// Suggest using the built-in equality matchers
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
		'jest/prefer-equality-matcher': 'warn',

		// Suggest using `expect.assertions()` OR `expect.hasAssertions()`
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
		// Note: Seems an overengineering in common case
		'jest/prefer-expect-assertions': ['off', {
			onlyFunctionsWithAsyncKeyword: true,
		}],

		// Prefer `await expect(...).resolves` over `expect(await ...)` syntax (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
		'+jest/prefer-expect-resolves': 'error',

		// Prefer having hooks in a consistent order
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
		'jest/prefer-hooks-in-order': 'warn',

		// Suggest having hooks before any test cases
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
		'jest/prefer-hooks-on-top': 'error',

		// Enforce lowercase test names (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
		'+jest/prefer-lowercase-title': 'off',

		// Prefer mock resolved/rejected shorthands for promises (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
		'+jest/prefer-mock-promise-shorthand': 'warn',

		// Prefer including a hint with external snapshots
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
		'jest/prefer-snapshot-hint': ['warn', 'always'],

		// Suggest using `jest.spyOn()` (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
		'+jest/prefer-spy-on': 'error',

		// Suggest using `toStrictEqual()`
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
		'jest/prefer-strict-equal': 'warn',

		// Suggest using `toBe()` for primitive literals (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
		'+jest/prefer-to-be': 'warn',

		// Suggest using `toContain()` (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
		'+jest/prefer-to-contain': 'warn',

		// Suggest using `toHaveLength()` (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
		'+jest/prefer-to-have-length': 'warn',

		// Suggest using `test.todo` (autofixable but may be confusing)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
		'!jest/prefer-todo': 'error',

		// Require setup and teardown code to be within a hook
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
		'jest/require-hook': ['error', {
			allowedFunctionCalls: ['enableAutoDestroy'],
		}],

		// Require a message for `toThrow()`
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
		'jest/require-to-throw-message': 'off',

		// Require test cases and hooks to be inside a `describe` block
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
		'jest/require-top-level-describe': ['error', {
			maxNumberOfTopLevelDescribes: 2,
		}],

		// Enforce valid `describe()` callback
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
		'jest/valid-describe-callback': 'error',

		// Enforce valid `expect()` usage
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
		'jest/valid-expect': 'error',

		// Ensure promises that have expectations in their chain are valid
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
		'jest/valid-expect-in-promise': 'error',

		// Enforce valid titles (autofixable)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
		'+jest/valid-title': 'warn',

		// Enforces unbound methods are called with their expected scope
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
		'@typescript-eslint/unbound-method': 'off',
		'jest/unbound-method': 'off', // has no options unlike `@typescript-eslint/unbound-method`

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
