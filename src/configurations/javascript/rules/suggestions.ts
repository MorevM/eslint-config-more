import { CONFUSING_BROWSER_GLOBALS } from '#constants';
import eslintPluginNoAutofix from 'eslint-plugin-no-autofix';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'no-autofix': eslintPluginNoAutofix,
	},
	rules: {
		// Enforces getter/setter pairs in objects and classes
		// https://eslint.org/docs/rules/accessor-pairs
		'accessor-pairs': 'error',

		// Require braces in arrow function body (autofixable but doesn't care about `maxlen`)
		// https://eslint.org/docs/rules/arrow-body-style
		// Reason for `off`: developer knows better
		'arrow-body-style': 'off',
		'no-autofix/arrow-body-style': ['off', 'as-needed', {
			requireReturnForObjectLiteral: false,
		}],

		// Treat `var` as block scoped
		// https://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 'error',

		// Enforce camelCase naming convention
		// https://eslint.org/docs/rules/camelcase
		'camelcase': ['error', {
			properties: 'never',
			ignoreDestructuring: false,
		}],

		// Enforce or disallow capitalization of the first letter of a comment (autofixable)
		// https://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': ['error', 'always', {
			ignorePattern: '.*',
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true,
		}],

		// Enforce that class methods utilize `this`
		// https://eslint.org/docs/rules/class-methods-use-this
		// Note: that's not bad actually, methods can be used for grouping
		'class-methods-use-this': 'off',

		// Limit cyclomatic complexity
		// https://eslint.org/docs/rules/complexity
		// Reason for `off`: too much false positive errors
		'complexity': ['off', 15],

		// Require `return` statements to either always or never specify values
		// https://eslint.org/docs/rules/consistent-return
		// Reason: sometimes it's much more readable to use return as flow expression such as `return this.sideEffect()`
		'consistent-return': 'off',

		// Require consistent `this`
		// https://eslint.org/docs/rules/consistent-this
		'consistent-this': ['error', 'self', '_this'],

		// Require following curly brace conventions (autofixable)
		// https://eslint.org/docs/rules/curly
		'curly': ['warn', 'multi-line'],

		// Require `default` case in `switch` statements
		// https://eslint.org/docs/rules/default-case
		'default-case': ['error', {
			commentPattern: '^no default$',
		}],

		// Enforce `default` clauses in `switch` statements to be last
		// https://eslint.org/docs/rules/default-case-last
		'default-case-last': 'error',

		// Enforce `default` parameters to be last
		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'error',

		// Enforce dot notation whenever possible (autofixable)
		// https://eslint.org/docs/rules/dot-notation
		'dot-notation': ['warn', {
			allowKeywords: true,
		}],

		// Require the use of `===` and `!==` (autofixable but unsafe)
		// https://eslint.org/docs/rules/eqeqeq
		'eqeqeq': 'off',
		'no-autofix/eqeqeq': ['error', 'always', {
			null: 'ignore',
		}],

		// Require function names to match the name of the variable or property to which they are assigned
		// https://eslint.org/docs/rules/func-name-matching
		'func-name-matching': ['error', 'always', {
			includeCommonJSModuleExports: false,
			considerPropertyDescriptor: true,
		}],

		// Require or disallow named `function` expressions
		// https://eslint.org/docs/rules/func-names
		// Note: it's a mistake actually, but reminder hurts
		'func-names': 'off',

		// Enforce the consistent use of either `function` declarations or expressions
		// https://eslint.org/docs/rules/func-style
		'func-style': ['error', 'expression'],

		// Require grouped accessor pairs in object literals and classes
		// https://eslint.org/docs/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],

		// Require Guarding `for-in`
		// https://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'error',

		// Disallow specified identifiers
		// https://eslint.org/docs/rules/id-denylist
		'id-denylist': 'off',

		// Enforce minimum and maximum identifier lengths
		// https://eslint.org/docs/rules/id-length
		'id-length': 'off',

		// Require identifiers to match a specified regular expression
		// https://eslint.org/docs/rules/id-match
		'id-match': 'off',

		// Require or disallow initialization in variable declarations
		// https://eslint.org/docs/rules/init-declarations
		// Reason for `off`: developer knows better
		'init-declarations': 'off',

		// Require or disallow initialization in variable declarations (autofixable)
		// https://eslint.org/docs/latest/rules/logical-assignment-operators
		'logical-assignment-operators': ['warn', 'always', {
			enforceForIfStatements: true,
		}],

		// Enforce a maximum number of classes per file
		// https://eslint.org/docs/rules/max-classes-per-file
		// Note: disabled because legacy code :(
		'max-classes-per-file': ['off', 1],

		// Enforce a maximum depth that blocks can be nested
		// https://eslint.org/docs/rules/max-depth
		// Note: reminder doesn't hurts :)
		'max-depth': ['warn', 4],

		// Enforce a maximum file length
		// https://eslint.org/docs/rules/max-lines
		'max-lines': 'off',

		// Enforce a maximum function length
		// https://eslint.org/docs/rules/max-lines-per-function
		'max-lines-per-function': 'off',

		// Enforce a maximum depth that callbacks can be nested
		// https://eslint.org/docs/rules/max-nested-callbacks
		'max-nested-callbacks': 'off',

		// Enforce a maximum number of parameters in function definitions
		// https://eslint.org/docs/rules/max-params
		// Note: maybe it should be refactored to use one object as parameter?
		'max-params': ['warn', 5],

		// Enforce a maximum number of statements allowed in function blocks
		// https://eslint.org/docs/rules/max-statements
		'max-statements': 'off',

		// Enforce a particular style for multiline comments (autofixable)
		// https://eslint.org/docs/rules/multiline-comment-style
		'multiline-comment-style': 'off',

		// Require constructor names to begin with a capital letter
		// https://eslint.org/docs/rules/new-cap
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],

		// Disallow use of `alert`, `confirm`, and `prompt`
		// https://eslint.org/docs/rules/no-alert
		'no-alert': 'error',

		// Disallow `Array` constructors
		// https://eslint.org/docs/rules/no-array-constructor
		'no-array-constructor': 'error',

		// Disallow bitwise operators
		// https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// Disallow Use of `caller`/`callee`
		// https://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// Disallow lexical declarations in `case`/`default` clauses
		// https://eslint.org/docs/rules/no-case-declarations
		'no-case-declarations': 'error',

		// Disallow the use of `console`
		// https://eslint.org/docs/rules/no-console
		'no-console': ['warn', {
			allow: ['warn', 'error', 'group', 'groupCollapsed', 'groupEnd', 'table'],
		}],

		// Disallow `continue` statements
		// https://eslint.org/docs/rules/no-continue
		// Note: thats the problem with it?
		'no-continue': 'off',

		// Disallow deleting variables
		// https://eslint.org/docs/rules/no-delete-var
		'no-delete-var': 'error',

		// Disallow regular expressions that look like division (autofixable but unclear)
		// https://eslint.org/docs/rules/no-div-regex
		// Note: not sure about it
		'no-div-regex': 'off',
		'no-autofix/no-div-regex': 'off',

		// Disallow `return` before `else` (autofixable)
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['warn', {
			allowElseIf: true,
		}],

		// Disallow empty block statements
		// https://eslint.org/docs/rules/no-empty
		'no-empty': ['error', {
			allowEmptyCatch: true,
		}],

		// Disallow empty functions
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['warn', {
			allow: ['arrowFunctions'],
		}],

		// Disallow empty static blocks
		// https://eslint.org/docs/latest/rules/no-empty-static-block
		'no-empty-static-block': 'warn',

		// Disallow `null` comparisons without type-checking operators
		// https://eslint.org/docs/rules/no-eq-null
		'no-eq-null': 'error',

		// Disallow use of `eval()`
		// https://eslint.org/docs/rules/no-eval
		// Note: maybe it should be `off`... Who uses `eval()` if there is no real need?
		'no-eval': 'error',

		// Disallow extending of native objects
		// https://eslint.org/docs/rules/no-extend-native
		'no-extend-native': 'error',

		// Disallow unnecessary function binding (autofixable but may be unsafe)
		// https://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 'off',
		'no-autofix/no-extra-bind': 'error',

		// Disallow unnecessary boolean casts (autofixable)
		// https://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',

		// Disallow unnecessary labels (autofixable but unsafe)
		// https://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'off',
		'no-autofix/no-extra-label': 'error',

		// Disallow assignment to native objects or read-only global variables
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// Disallow the type conversion with shorter notations (autofixable)
		// https://eslint.org/docs/rules/no-implicit-coercion
		// Note: everyone should know about this shorthands
		'no-implicit-coercion': 'off',

		// Disallow declarations in the global scope
		// https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// Disallow Implied `eval()`
		// https://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'error',

		// Disallow inline comments after code
		// https://eslint.org/docs/rules/no-inline-comments
		'no-inline-comments': 'off',

		// Disallow `this` keywords outside of classes or class-like objects
		// https://eslint.org/docs/rules/no-invalid-this
		// Note: many libraries exposes `this` in functions
		'no-invalid-this': 'off',

		// Disallow the use of the `__iterator__` property
		// https://eslint.org/docs/rules/no-iterator
		'no-iterator': 'error',

		// Disallow labels that are variables names
		// https://eslint.org/docs/rules/no-label-var
		'no-label-var': 'error',

		// Disallow labeled statements
		// https://eslint.org/docs/rules/no-labels
		// Note: maybe even `GOTO:`?
		'no-labels': ['error', {
			allowLoop: false,
			allowSwitch: false,
		}],

		// Disallow unnecessary nested blocks
		// https://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 'error',

		// Disallow `if` statements as the only statement in `else` blocks (autofixable)
		// https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'warn',

		// Disallow functions in loops
		// https://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'error',

		// Disallow magic numbers
		// https://eslint.org/docs/rules/no-magic-numbers
		// Note: most "magic" numbers aren't actually "magic".
		'no-magic-numbers': 'off',

		// Disallow use of chained assignment expressions
		// https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': 'error',

		// Disallow use of multiline strings
		// https://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 'error',

		// Disallow negated conditions
		// https://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// Disallow nested ternary expressions
		// https://eslint.org/docs/rules/no-nested-ternary
		// Note: turned off cause sometimes we can save a lot of vertical space to increase readability
		'no-nested-ternary': 'off',

		// Disallow use of `new` operators outside of assignments or comparisons
		// https://eslint.org/docs/rules/no-new
		'no-new': 'error',

		// Disallow use of `new` operator for `Function` object
		// https://eslint.org/docs/rules/no-new-func
		// Note: nobody writes functions this way, but if, then there are no other options.
		'no-new-func': 'off',

		// Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
		// https://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'error',

		// Disallow \8 and \9 escape sequences in string literals
		// https://eslint.org/docs/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'error',

		// Disallow calls to the `Object` constructor without an argument
		// https://eslint.org/docs/latest/rules/no-object-constructor
		'no-object-constructor': 'error',

		// Disallow use of (old style) octal literals
		// https://eslint.org/docs/rules/no-octal
		'no-octal': 'error',

		// Disallow use of octal escape sequences in string literals
		// https://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 'error',

		// Disallow reassignment of `function` parameters
		// https://eslint.org/docs/rules/no-param-reassign.html
		// Note: maybe someday it can be set to `warn` or even `error`, but now...
		'no-param-reassign': ['off', {
			props: true,
			ignorePropertyModificationsFor: [
				'acc', // for reduce accumulators
				'accumulator', // for reduce accumulators
				'e', // for e.returnvalue
				'ctx', // for Koa routing
				'context', // for Koa routing
				'req', // for Express requests
				'request', // for Express requests
				'res', // for Express responses
				'response', // for Express responses
				'$scope', // for Angular 1 scopes
				'staticContext', // for ReactRouter context
			],
		}],

		// Disallow unary operators `++` and `--`
		// https://eslint.org/docs/rules/no-plusplus
		// Note: let developer care about it
		'no-plusplus': 'off',

		// Disallow usage of `__proto__` property
		// https://eslint.org/docs/rules/no-proto
		'no-proto': 'error',

		// Disallow declaring the same variable more than once
		// https://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// Disallow multiple spaces in regular expressions (autofixable)
		// https://eslint.org/docs/rules/no-regex-spaces
		'no-regex-spaces': 'error',

		// Disallow specified names in exports
		// https://eslint.org/docs/rules/no-restricted-exports
		'no-restricted-exports': ['error', {
			restrictedNamedExports: [
				'then', // this will cause tons of confusion when your module is dynamically `import()`ed
			],
		}],

		// Disallow specified global variables
		// https://eslint.org/docs/rules/no-restricted-globals
		'no-restricted-globals': [
			'error', {
				name: 'isFinite',
				message: 'Use Number.isFinite instead of global isFinite',
			},
			// Well, sometimes we really need to force converting a parameter to a number,
			// For example when parsing GET parameters
			// {
			// 	name: 'isNaN',
			// 	message: 'Use Number.isNaN instead of global isNaN',
			// },
			...CONFUSING_BROWSER_GLOBALS,
		],

		// Disallow specified modules when loaded by `import`
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': ['off', {
			paths: [],
			patterns: [],
		}],

		// Disallow certain object properties
		// https://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],

		// Disallow certain syntax forms
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error', {
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		// Disallow use of assignment in `return` statement
		// https://eslint.org/docs/rules/no-return-assign
		'no-return-assign': ['error', 'except-parens'],

		// Disallow use of `javascript:` urls
		// https://eslint.org/docs/rules/no-script-url
		'no-script-url': 'error',

		// Disallow use of comma operator
		// https://eslint.org/docs/rules/no-sequences
		'no-sequences': 'error',

		// Disallow declaration of variables already declared in the outer scope
		// https://eslint.org/docs/rules/no-shadow
		'no-shadow': ['error', {
			ignoreOnInitialization: true,
		}],

		// Disallow identifiers from shadowing restricted names e.g. `arguments`
		// https://eslint.org/docs/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': 'error',

		// Disallow ternary operators
		// https://eslint.org/docs/rules/no-ternary
		// Note: every good developer should be able to read ternary expressions
		'no-ternary': 'off',

		// Disallow throwing literals as exceptions
		// https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'error',

		// Disallow use of undefined when initializing variables (autofixable but may be comfusing)
		// https://eslint.org/docs/rules/no-undef-init
		'no-undef-init': 'off',
		'no-autofix/no-undef-init': 'error',

		// Disallow use of undefined variable
		// https://eslint.org/docs/rules/no-undefined
		// Note: `undefined` never be rewritten according to other rules
		'no-undefined': 'off',

		// Disallow dangling underscores in identifiers
		// https://eslint.org/docs/rules/no-underscore-dangle
		// Reason: developer knows better
		'no-underscore-dangle': ['off', {
			allow: ['_this'],
			allowAfterThis: false,
			allowAfterSuper: false,
			// allowFunctionParams: true,
			enforceInMethodNames: true,
		}],

		// Disallow ternary operators when simpler alternatives exist (autofixable)
		// https://eslint.org/docs/rules/no-unneeded-ternary
		// Note: e.g. `a || b` instead `a ? a : b`
		'no-unneeded-ternary': ['error', {
			defaultAssignment: false,
		}],

		// Disallow unused expressions
		// https://eslint.org/docs/rules/no-unused-expressions
		// Reason for no `error`: `element.offsetTop;` for example to wait for repainting
		'no-unused-expressions': ['warn', {
			allowShortCircuit: true,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// Disallow unused labels (autofixable)
		// https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// Disallow unnecessary calls to `.call()` and `.apply()`
		// https://eslint.org/docs/rules/no-useless-call
		'no-useless-call': 'error',

		// Disallow unnecessary `catch` blocks
		// https://eslint.org/docs/rules/no-useless-catch
		'no-useless-catch': 'error',

		// Disallow unnecessary computed property keys in objects and classes (autofixable)
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// Disallow unnecessary string concatenation
		// https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// Disallow unnecessary `constructor`
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// Disallow unnecessary string escaping
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// Disallow renaming `import`, `export`, and destructured assignments to the same name (autofixable)
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],

		// Disallow redundant return statements (autofixable but may be confusing)
		// https://eslint.org/docs/rules/no-useless-return
		// Note: explicit is better than implicit
		'no-useless-return': 'off',
		'no-autofix/no-useless-return': 'off',

		// Require `let` or `const` instead of `var` (autofixable but unsafe)
		// https://eslint.org/docs/rules/no-var
		'no-var': 'off',
		'no-autofix/no-var': 'error',

		// Disallow `void` operators
		// https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// Disallow specified warning terms in comments, e.g. `todo`
		// https://eslint.org/docs/rules/no-warning-comments
		// Note: whats the problem with it?
		'no-warning-comments': 'off',

		// Disallow `with` statements
		// https://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// Require method and property shorthand syntax for object literals (autofixable)
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
			avoidQuotes: false,
		}],

		// Enforce variables to be declared either together or separately in functions (autofixable)
		// https://eslint.org/docs/rules/one-var
		// Note: set to `separately`
		'one-var': ['error', 'never'],

		// Require or disallow assignment operator shorthand where possible (autofixable)
		// https://eslint.org/docs/rules/operator-assignment
		// Note: on the conscience of the developer
		'operator-assignment': 'off',

		// Require using arrow functions for callbacks (autofixable)
		// https://eslint.org/docs/rules/prefer-arrow-callback
		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],

		// Require `const` declarations for variables that are never reassigned after declared (autofixable)
		// https://eslint.org/docs/rules/prefer-const
		'prefer-const': 'off',
		'no-autofix/prefer-const': ['warn', {
			destructuring: 'all',
			ignoreReadBeforeAssign: true,
		}],

		// Prefer destructuring from arrays and objects (autofixable but unsafe)
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': 'off',
		'no-autofix/prefer-destructuring': ['warn', {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: false,
				object: false,
			},
		}, {
			enforceForRenamedProperties: false,
		}],

		// Disallow the use of `Math.pow` in favor of the `**` operator (autofixable)
		// https://eslint.org/docs/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': 'warn',

		// Enforce using named capture group in regular expression
		// https://eslint.org/docs/rules/prefer-named-capture-group
		// Note: actually it's rarely more readable
		'prefer-named-capture-group': 'off',

		// Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals (autofixable)
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()` (autofixable)
		// https://eslint.org/docs/rules/prefer-object-has-own
		'prefer-object-has-own': 'warn',

		// Prefer use of an object spread over `Object.assign` (autofixable)
		// https://eslint.org/docs/rules/prefer-object-spread
		'prefer-object-spread': 'error',

		// Require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', {
			allowEmptyReject: true,
		}],

		// Disallow use of the `RegExp` constructor in favor of regular expression literals
		// https://eslint.org/docs/rules/prefer-regex-literals
		// Note: no other options sometimes
		'prefer-regex-literals': 'off',

		// Require rest parameters instead of `arguments`
		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'error',

		// Require spread operators instead of `.apply()`
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// Require template literals instead of string concatenation (autofixable but can fix wrong)
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'off',
		'no-autofix/prefer-template': 'warn',

		// Require use of the second argument for `parseInt()`
		// https://eslint.org/docs/rules/radix
		'radix': 'error',

		// Disallow `async` functions which have no `await` expression
		// https://eslint.org/docs/rules/require-await
		// Note: according to `airbnb` config "this is a horrible rule that should never be used"
		// Too long to explain, but I totally agreed: `async` in modern environments
		// mostly just is syntax sugar to make sure function will return a Promise.
		'require-await': 'off',

		// Enforce the use of `u` flag on `RegExp`
		// https://eslint.org/docs/rules/require-unicode-regexp
		// Note: let developer decide about it
		'require-unicode-regexp': 'off',

		// Require generator functions to contain `yield`
		// https://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// Enforce sorted import declarations within modules (autofixable)
		// https://eslint.org/docs/rules/sort-imports
		// Note: developer knows better in common case
		'sort-imports': 'off',

		// Require object keys to be sorted
		// https://eslint.org/docs/rules/sort-keys
		'sort-keys': 'off',

		// Require variables within the same declaration block to be sorted (autofixable)
		// https://eslint.org/docs/rules/sort-vars
		'sort-vars': 'off',

		// Require or disallow `strict` mode directives (autofixable)
		// https://eslint.org/docs/rules/strict
		// Note: Code processed by `babel` doesn't need it
		'strict': ['error', 'never'],

		// Require a `Symbol` description
		// https://eslint.org/docs/rules/symbol-description
		'symbol-description': 'error',

		// Require `var` declarations be placed at the top of their containing scope
		// https://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'error',

		// Require or disallow "Yoda" conditions (autofixable)
		// https://eslint.org/docs/rules/yoda
		'yoda': 'error',
	},
});
