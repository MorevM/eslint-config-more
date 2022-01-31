/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
	rules: {
		// Enforces return statements in callbacks of array's methods
		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': ['error', { allowImplicit: true }],

		// Verify calls of `super()` in constructors
		// https://eslint.org/docs/rules/constructor-super
		'constructor-super': 'error',

		// Enforce `for` loop update clause moving the counter in the right direction
		// https://eslint.org/docs/rules/for-direction
		'for-direction': 'error',

		// Enforces that a `return` statement is present in property getters
		// https://eslint.org/docs/rules/getter-return
		'getter-return': ['error', { allowImplicit: true }],

		// Disallow using an async function as a `Promise` executor
		// https://eslint.org/docs/rules/no-async-promise-executor
		'no-async-promise-executor': 'error',

		// Disallow `await` inside of loops
		// https://eslint.org/docs/rules/no-await-in-loop
		'no-await-in-loop': 'error',

		// Disallow modifying variables of class declarations
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// Disallow comparing against `-0`
		// https://eslint.org/docs/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'error',

		// Disallow assignment operators in conditional statements
		// https://eslint.org/docs/rules/no-cond-assign
		// Reason for `except-parens`: `while` loop, `match` calls
		'no-cond-assign': ['error', 'except-parens'],

		// Disallow modifying variables that are declared using `const`
		// https://eslint.org/docs/rules/no-const-assign
		'no-const-assign': 'error',

		// Disallow constant expressions in conditions
		// https://eslint.org/docs/rules/no-constant-condition
		'no-constant-condition': 'error',

		// Disallow returning value in `constructor()`
		// https://eslint.org/docs/rules/no-constructor-return
		'no-constructor-return': 'error',

		// Disallow control characters in regular expressions
		// https://eslint.org/docs/rules/no-control-regex
		'no-control-regex': 'error',

		// Disallow the use of `debugger`
		// https://eslint.org/docs/rules/no-debugger
		'no-debugger': 'error',

		// Disallow duplicate arguments in `function` definitions
		// https://eslint.org/docs/rules/no-dupe-args
		'no-dupe-args': 'error',

		// Disallow duplicate name in class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// Disallow duplicate conditions in `if-else-if` chains
		// https://eslint.org/docs/rules/no-dupe-else-if
		'no-dupe-else-if': 'error',

		// Disallow duplicate keys in object literals
		// https://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 'error',

		// Disallow a duplicate `case` label
		// https://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 'error',

		// Disallow duplicate imports
		// https://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 'error',

		// Disallow empty character classes in regular expressions
		// https://eslint.org/docs/rules/no-empty-character-class
		'no-empty-character-class': 'error',

		// Disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// Disallow reassigning exceptions in `catch` clauses
		// https://eslint.org/docs/rules/no-ex-assign
		'no-ex-assign': 'error',

		// Disallow `case` statement fallthrough
		// https://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 'error',

		// Disallow reassigning function declaration
		// https://eslint.org/docs/rules/no-func-assign
		'no-func-assign': 'error',

		// Disallow assigning to imported bindings
		// https://eslint.org/docs/rules/no-import-assign
		'no-import-assign': 'error',

		// Disallow variable or `function` declarations in nested blocks
		// https://eslint.org/docs/rules/no-inner-declarations
		'no-inner-declarations': 'error',

		// Disallow invalid regular expression strings in `RegExp` constructors
		// https://eslint.org/docs/rules/no-invalid-regexp
		'no-invalid-regexp': 'error',

		// Disallow irregular whitespace
		// https://eslint.org/docs/rules/no-irregular-whitespace
		'no-irregular-whitespace': 'error',

		// Disallow number literals that lose precision
		// https://eslint.org/docs/rules/no-loss-of-precision
		'no-loss-of-precision': 'error',

		// Disallow characters which are made with multiple code points in character class syntax
		// https://eslint.org/docs/rules/no-misleading-character-class
		'no-misleading-character-class': 'error',

		// Disallow `Symbol` constructor
		// https://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// Disallow calling global object properties as functions
		// https://eslint.org/docs/rules/no-obj-calls
		'no-obj-calls': 'error',

		// Disallow returning values from `Promise` executor functions
		// https://eslint.org/docs/rules/no-promise-executor-return
		// Reason: widely used UX pattern for minimal execution time
		// await Promise.all([..., new Promise(res => setTimeout(res, 1000))]),
		'no-promise-executor-return': 'off',

		// Disallow use of `Object.prototype`s builtins directly
		// https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'error',

		// Disallow self assignment
		// https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': ['error', {
			props: true,
		}],

		// Disallow self compare
		// https://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 'error',

		// Disallow returning values from setters
		// https://eslint.org/docs/rules/no-setter-return
		'no-setter-return': 'error',

		// Disallow sparse arrays
		// https://eslint.org/docs/rules/no-sparse-arrays
		'no-sparse-arrays': 'error',

		// Disallow template literal placeholder syntax in regular strings
		// https://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'error',

		// Disallow use of `this`/`super` before calling `super()` in constructors
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// Disallow undeclared variables
		// https://eslint.org/docs/rules/no-undef
		'no-undef': 'error',

		// Disallow confusing multiline expressions
		// https://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// Disallow unmodified conditions of loops
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'error',

		// Disallow unreachable code after `return`, `throw`, `continue` and `break` statements
		// https://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 'error',

		// Disallow loops with a body that allows only one iteration
		// https://eslint.org/docs/rules/no-unreachable-loop
		'no-unreachable-loop': 'error',

		// Disallow control flow statements in `finally` blocks
		// https://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// Disallow negating the left operand of relational operators
		// https://eslint.org/docs/rules/no-unsafe-negation
		'no-unsafe-negation': 'error',

		// Disallow use of optional chaining in contexts where the `undefined` value is not allowed
		// https://eslint.org/docs/rules/no-unsafe-optional-chaining
		'no-unsafe-optional-chaining': 'error',

		// Disallow unused private class members
		// https://eslint.org/docs/rules/no-unused-private-class-members
		'no-unused-private-class-members': 'warn',

		// Disallow unused variables
		// https://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': ['warn', {
			args: 'none',
			ignoreRestSiblings: true,
			argsIgnorePattern: '^_*$',
			varsIgnorePattern: '^_',
		}],

		// Disallow early use
		// https://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': ['error', {
			functions: true,
			classes: true,
			variables: true,
		}],

		// Disallow useless backreferences in regular expressions
		// https://eslint.org/docs/rules/no-useless-backreference
		'no-useless-backreference': 'error',

		// Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		// https://eslint.org/docs/rules/require-atomic-updates
		// Note: may be buggy according to `airbnb` config
		'require-atomic-updates': 'error',

		// Require calls to `isNaN()` when checking for `NaN`
		// https://eslint.org/docs/rules/use-isnan
		'use-isnan': 'error',

		// Enforce comparing `typeof` expressions against valid strings
		// https://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', {
			requireStringLiterals: true,
		}],
	},
};
