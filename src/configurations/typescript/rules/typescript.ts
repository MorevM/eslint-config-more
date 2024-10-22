import configurationJavascript from '~configurations/javascript';

import { defineConfigurationPart, extensionFactory } from '#utils';
import { pluginNoAutofix, pluginStylistic, pluginTs } from '#plugins';

const extensionFromBase = extensionFactory({
	baseRules: configurationJavascript().rules!,
	prefix: '@typescript-eslint',
	alwaysDisableBaseRule: true,
});

export default defineConfigurationPart({
	plugins: {
		'@stylistic': pluginStylistic,
		'@typescript-eslint': pluginTs,
		'no-autofix': pluginNoAutofix,
	},
	rules: {
		// Require that member overloads be consecutive
		// https://typescript-eslint.io/rules/adjacent-overload-signatures
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// Requires using either T[] or Array<T> for arrays (autofixable)
		// https://typescript-eslint.io/rules/array-type
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],

		// Disallows awaiting a value that is not a Thenable
		// https://typescript-eslint.io/rules/await-thenable
		'@typescript-eslint/await-thenable': 'error',

		// Bans `@ts-<directive>` comments from being used or requires descriptions after directive
		// https://typescript-eslint.io/rules/ban-ts-comment
		'@typescript-eslint/ban-ts-comment': ['error', {
			'ts-check': false,
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': 'allow-with-description',
		}],

		// Bans `// tslint:<rule-flag>` comments from being used (autofixable but may produce bugs)
		// https://typescript-eslint.io/rules/ban-tslint-comment
		'@typescript-eslint/ban-tslint-comment': 'off',
		'no-autofix/@typescript-eslint/ban-tslint-comment': 'warn',

		// Ensures that literals on classes are exposed in a consistent style (autofixable)
		// https://typescript-eslint.io/rules/class-literal-property-style
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],

		// Enforce that class methods utilize `this` (autofixable)
		// https://typescript-eslint.io/rules/class-methods-use-this
		...extensionFromBase('class-methods-use-this'),

		// Enforces specifying generic type arguments on type annotation or constructor name of a constructor call (autofixable)
		// https://typescript-eslint.io/rules/consistent-generic-constructors
		'@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],

		// Enforce or disallow the use of the record type (autofixable)
		// https://typescript-eslint.io/rules/consistent-indexed-object-style
		// Note: `record` is preferred as more readable, but the `index-signature` option
		// provides extra information about the key name, that is necessary sometimes.
		// In other words, "developer knows better"
		'@typescript-eslint/consistent-indexed-object-style': ['off', 'record'],

		// Require `return` statements to either always or never specify values
		// https://typescript-eslint.io/rules/consistent-return/
		...extensionFromBase('consistent-return'),

		// Enforces consistent usage of type assertions (autofixable)
		// https://typescript-eslint.io/rules/consistent-type-assertions
		'@typescript-eslint/consistent-type-assertions': ['warn', {
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'allow',
		}],

		// Consistent with type definition either interface or type (autofixable)
		// https://typescript-eslint.io/rules/consistent-type-definitions
		// Note: I believe it's really debatable on a holywar level
		'@typescript-eslint/consistent-type-definitions': 'off',

		// Enforces consistent usage of type exports (autofixable) (SETTINGS)
		// https://typescript-eslint.io/rules/consistent-type-exports
		'@typescript-eslint/consistent-type-exports': ['warn', {
			fixMixedExportsWithInlineTypeSpecifier: true,
		}],

		// Enforces consistent usage of type imports (autofixable)
		// https://typescript-eslint.io/rules/consistent-type-imports
		'@typescript-eslint/consistent-type-imports': ['warn', {
			prefer: 'type-imports',
			disallowTypeAnnotations: false,
		}],

		// Enforce default parameters to be last
		// https://typescript-eslint.io/rules/default-param-last
		...extensionFromBase('default-param-last'),

		// Enforce dot notation whenever possible (autofixable)
		// https://typescript-eslint.io/rules/dot-notation
		...extensionFromBase('dot-notation', {
			allowPrivateClassPropertyAccess: false,
			allowProtectedClassPropertyAccess: false,
			allowIndexSignaturePropertyAccess: false,
		}),

		// Require explicit return types on functions and class methods
		// https://typescript-eslint.io/rules/explicit-function-return-type
		'@typescript-eslint/explicit-function-return-type': ['off', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
			allowDirectConstAssertionInArrowFunctions: true,
			allowConciseArrowFunctionExpressionsStartingWithVoid: true,
		}],

		// Require explicit accessibility modifiers on class properties and methods (autofixable but confusing)
		// https://typescript-eslint.io/rules/explicit-member-accessibility
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'no-autofix/@typescript-eslint/explicit-member-accessibility': 'error',

		// MIXED
		// Require explicit return and argument types on exported functions' and classes' public class methods
		// https://typescript-eslint.io/rules/explicit-module-boundary-types
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// Require or disallow initialization in variable declarations
		// https://typescript-eslint.io/rules/init-declarations
		...extensionFromBase('init-declarations'),

		// Enforce a maximum number of parameters in function definitions
		// https://typescript-eslint.io/rules/max-params
		'max-params': 'off',
		'@typescript-eslint/max-params': ['warn', {
			countVoidThis: false,
			maximum: 5,
		}],

		// Require a specific member delimiter style for interfaces and type literals (autofixable)
		// https://typescript-eslint.io/rules/member-delimiter-style
		'@stylistic/member-delimiter-style': ['warn', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
			multilineDetection: 'brackets',
		}],

		// Require a consistent member declaration order
		// https://typescript-eslint.io/rules/member-ordering
		// Note: I believe developer knows better
		'@typescript-eslint/member-ordering': 'off',

		// Enforces using a particular method signature syntax (autofixable)
		// https://typescript-eslint.io/rules/method-signature-style
		'@typescript-eslint/method-signature-style': 'off',
		'no-autofix/@typescript-eslint/method-signature-style': ['error', 'property'],

		// Enforces naming conventions for everything across a codebase
		// https://typescript-eslint.io/rules/naming-convention
		'@typescript-eslint/naming-convention': ['warn',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allowSingleOrDouble',
				trailingUnderscore: 'allow',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			}],

		// Disallow generic Array constructors (autofixable)
		// https://typescript-eslint.io/rules/no-array-constructor
		...extensionFromBase('no-array-constructor'),

		// Disallow using the `delete` operator on array values
		// https://typescript-eslint.io/rules/no-array-delete/
		'@typescript-eslint/no-array-delete': 'error',

		// Requires that `.toString()` is only called on objects which provide useful information when stringified
		// https://typescript-eslint.io/rules/no-base-to-string
		'@typescript-eslint/no-base-to-string': ['error', {
			ignoredTypeNames: ['RegExp'],
		}],

		// Disallow non-null assertion in locations that may be confusing (autofixable)
		// https://typescript-eslint.io/rules/no-confusing-non-null-assertion
		'@typescript-eslint/no-confusing-non-null-assertion': 'warn',

		// Requires expressions of type void to appear in statement position (autofixable)
		// https://typescript-eslint.io/rules/no-confusing-void-expression
		'@typescript-eslint/no-confusing-void-expression': ['off', {
			ignoreArrowShorthand: true,
			ignoreVoidOperator: false,
		}],

		// Disallow using code marked as `@deprecated`
		// https://typescript-eslint.io/rules/no-deprecated
		'@typescript-eslint/no-deprecated': 'warn',

		// Disallow duplicate class members
		// https://typescript-eslint.io/rules/no-dupe-class-members
		...extensionFromBase('no-dupe-class-members'),

		// Disallow duplicate enum member values
		// https://typescript-eslint.io/rules/no-duplicate-enum-values
		'@typescript-eslint/no-duplicate-enum-values': 'error',

		// Disallow duplicate constituents of union or intersection types (autofixable)
		// https://typescript-eslint.io/rules/no-duplicate-type-constituents
		'@typescript-eslint/no-duplicate-type-constituents': ['error', {
			ignoreIntersections: false,
			ignoreUnions: false,
		}],

		// Disallow the delete operator with computed key expressions
		// https://typescript-eslint.io/rules/no-dynamic-delete
		'@typescript-eslint/no-dynamic-delete': 'off',

		// Disallow empty functions
		// https://typescript-eslint.io/rules/no-empty-function
		...extensionFromBase('no-empty-function'),

		// Disallow accidentally using the "empty object" type
		// https://typescript-eslint.io/rules/no-empty-object-type
		'@typescript-eslint/no-empty-object-type': ['warn', {
			allowInterfaces: 'never',
			allowObjectTypes: 'never',
		}],

		// Disallow usage of the `any` type (autofixable but may change the behavior)
		// https://typescript-eslint.io/rules/no-explicit-any
		'@typescript-eslint/no-explicit-any': 'off',
		'no-autofix/@typescript-eslint/no-explicit-any': ['off', {
			fixToUnknown: false,
			ignoreRestArgs: true,
		}],

		// Disallow extra non-null assertion (autofixable)
		// https://typescript-eslint.io/rules/no-extra-non-null-assertion
		'@typescript-eslint/no-extra-non-null-assertion': 'warn',

		// Forbids the use of classes as namespaces
		// https://typescript-eslint.io/rules/no-extraneous-class
		'@typescript-eslint/no-extraneous-class': ['error', {
			allowConstructorOnly: false,
			allowEmpty: false,
			allowStaticOnly: false,
			allowWithDecorator: false,
		}],

		// Requires Promise-like values to be handled appropriately
		// https://typescript-eslint.io/rules/no-floating-promises
		'@typescript-eslint/no-floating-promises': ['off', {
			ignoreIIFE: true,
			ignoreVoid: true,
		}],

		// Disallow iterating over an array with a for-in loop
		// https://typescript-eslint.io/rules/no-for-in-array
		'@typescript-eslint/no-for-in-array': 'error',

		// Enforce the use of top-level import type qualifier
		// when an import only has specifiers with inline type qualifiers (autofixable).
		// https://typescript-eslint.io/rules/no-import-type-side-effects
		'@typescript-eslint/no-import-type-side-effects': 'off',
		'no-autofix/@typescript-eslint/no-import-type-side-effects': 'off',

		// Disallow the use of `eval()`-like methods
		// https://typescript-eslint.io/rules/no-implied-eval
		...extensionFromBase('no-implied-eval'),

		// Disallows explicit type declarations for variables or parameters
		// initialized to a number, string, or boolean (autofixable)
		// https://typescript-eslint.io/rules/no-inferrable-types
		'@typescript-eslint/no-inferrable-types': ['warn', {
			ignoreParameters: true,
			ignoreProperties: true,
		}],

		// Disallow `this` keywords outside of classes or class-like objects
		// https://typescript-eslint.io/rules/no-invalid-this
		...extensionFromBase('no-invalid-this'),

		// Disallows usage of `void` type outside of generic or return types
		// https://typescript-eslint.io/rules/no-invalid-void-type
		'@typescript-eslint/no-invalid-void-type': ['off', {
			allowAsThisParameter: true,
			allowInGenericTypeArguments: true,
		}],

		// Disallow function declarations that contain unsafe references inside loop statements
		// https://typescript-eslint.io/rules/no-loop-func
		...extensionFromBase('no-loop-func'),

		// Disallow magic numbers
		// https://typescript-eslint.io/rules/no-magic-numbers
		...extensionFromBase('no-magic-numbers', {
			ignoreEnums: true,
			ignoreNumericLiteralTypes: true,
			ignoreReadonlyClassProperties: true,
		}),

		// Disallow the `void` operator except when used to discard a value (autofixable)
		// https://typescript-eslint.io/rules/no-meaningless-void-operator
		'@typescript-eslint/no-meaningless-void-operator': ['error', {
			checkNever: true,
		}],

		// Enforce valid definition of `new` and `constructor`
		// https://typescript-eslint.io/rules/no-misused-new
		'@typescript-eslint/no-misused-new': 'error',

		// Avoid using promises in places not designed to handle them
		// https://typescript-eslint.io/rules/no-misused-promises
		'@typescript-eslint/no-misused-promises': ['off', {
			checksConditionals: true,
			checksVoidReturn: true,
		}],

		// Disallow enums from having both number and string members
		// https://typescript-eslint.io/rules/no-mixed-enums
		'@typescript-eslint/no-mixed-enums': 'error',

		// Disallow the use of custom TypeScript modules and namespaces
		// https://typescript-eslint.io/rules/no-namespace
		'@typescript-eslint/no-namespace': ['error', {
			allowDeclarations: true,
		}],

		// Disallows using a non-null assertion in the left operand of the nullish coalescing operator
		// https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

		// Disallows using a non-null assertion after an optional chain expression
		// https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// Disallows non-null assertions using the `!` postfix operator
		// https://typescript-eslint.io/rules/no-non-null-assertion
		'@typescript-eslint/no-non-null-assertion': 'off',

		// Disallow variable re-declaration
		// https://typescript-eslint.io/rules/no-redeclare
		...extensionFromBase('no-redeclare'),

		// Disallow members of unions and intersections that do nothing or override type information
		// https://typescript-eslint.io/rules/no-redundant-type-constituents
		'@typescript-eslint/no-redundant-type-constituents': 'error',

		// Disallows invocation of `require()`
		// https://typescript-eslint.io/rules/no-require-imports
		'@typescript-eslint/no-require-imports': 'error',

		// Disallow specified modules when loaded by `import`
		// https://typescript-eslint.io/rules/no-restricted-imports
		'@typescript-eslint/no-restricted-imports': 'off',

		// Disallow certain types
		// https://typescript-eslint.io/rules/no-restricted-types/
		// Note: Should be configured for each project
		'@typescript-eslint/no-restricted-types': 'off',

		// Disallow variable declarations from shadowing variables declared in the outer scope
		// https://typescript-eslint.io/rules/no-shadow
		...extensionFromBase('no-shadow'),

		// Disallow aliasing `this`
		// https://typescript-eslint.io/rules/no-this-alias
		'@typescript-eslint/no-this-alias': ['error', {
			allowDestructuring: true,
			allowedNames: ['self', '_this'],
		}],

		// Flags unnecessary equality comparisons against boolean literals (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn', {
			allowComparingNullableBooleansToTrue: true,
			allowComparingNullableBooleansToFalse: true,
		}],

		// Prevents conditionals where the type is always truthy or always falsy (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-condition
		'@typescript-eslint/no-unnecessary-condition': 'off',

		// Disallow unnecessary assignment of constructor property parameter
		// https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
		// Note: Explicit is better than implicit
		'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',

		// Warns when a namespace qualifier is unnecessary (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-qualifier
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',

		// Disallow unnecessary template expressions (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-template-expression
		'@typescript-eslint/no-unnecessary-template-expression': 'warn',

		// Enforces that type arguments will not be used if not required (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-arguments
		// Note: explicit better than implicit
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',

		// Warns if a type assertion does not change the type of an expression (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-assertion
		'@typescript-eslint/no-unnecessary-type-assertion': 'warn',

		// Disallows unnecessary constraints on generic types (autofixable)
		// https://typescript-eslint.io/rules/no-unnecessary-type-constraint
		'@typescript-eslint/no-unnecessary-type-constraint': 'warn',

		// Disallow type parameters that aren't used multiple times
		// https://typescript-eslint.io/rules/no-unnecessary-type-parameters
		// Note: Explicit is better (if any), also we don't want notifications when we're just starting out
		'@typescript-eslint/no-unnecessary-type-parameters': 'off',

		// Disallows calling a function with an any type value
		// https://typescript-eslint.io/rules/no-unsafe-argument
		'@typescript-eslint/no-unsafe-argument': 'off',

		// Disallows assigning any to variables and properties
		// https://typescript-eslint.io/rules/no-unsafe-assignment
		'@typescript-eslint/no-unsafe-assignment': 'off',

		// Disallows calling an any type value
		// https://typescript-eslint.io/rules/no-unsafe-call
		'@typescript-eslint/no-unsafe-call': 'off',

		// Disallow unsafe declaration merging
		// https://typescript-eslint.io/rules/no-unsafe-declaration-merging
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',

		// Disallow comparing an enum value with a non-enum value
		// https://typescript-eslint.io/rules/no-unsafe-enum-comparison
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',

		// Disallow using the unsafe built-in Function type (autofixable)
		// https://typescript-eslint.io/rules/no-unsafe-function-type
		'@typescript-eslint/no-unsafe-function-type': 'warn',

		// Disallows member access on any typed variables
		// https://typescript-eslint.io/rules/no-unsafe-member-access
		'@typescript-eslint/no-unsafe-member-access': 'off',

		// Disallows returning any from a function
		// https://typescript-eslint.io/rules/no-unsafe-return
		'@typescript-eslint/no-unsafe-return': 'off',

		// Require unary negation to take a number
		// https://typescript-eslint.io/rules/no-unsafe-unary-minus/
		'@typescript-eslint/no-unsafe-unary-minus': 'error',

		// Disallow unused expressions
		// https://typescript-eslint.io/rules/no-unused-expressions
		...extensionFromBase('no-unused-expressions'),

		// Disallow unused variables
		// https://typescript-eslint.io/rules/no-unused-vars
		...extensionFromBase('no-unused-vars'),

		// Disallow the use of variables before they are defined
		// https://typescript-eslint.io/rules/no-use-before-define
		...extensionFromBase('no-use-before-define', {
			enums: true,
			typedefs: true,
			ignoreTypeReferences: false,
		}),

		// Disallow unnecessary constructors
		// https://typescript-eslint.io/rules/no-useless-constructor
		...extensionFromBase('no-useless-constructor'),

		// Require destructuring from arrays and/or objects (autofixable)
		// https://typescript-eslint.io/rules/prefer-destructuring
		...extensionFromBase('prefer-destructuring'),

		// Disallow empty exports that don't change anything in a module file
		// (autofixable but might be confusing during development)
		// https://typescript-eslint.io/rules/no-useless-empty-export/
		'@typescript-eslint/no-useless-empty-export': 'off',
		'no-autofix/@typescript-eslint/no-useless-empty-export': 'warn',

		// Disallow using confusing built-in primitive class wrappers (autofixable)
		// https://typescript-eslint.io/rules/no-wrapper-object-types
		'@typescript-eslint/no-wrapper-object-types': 'error',

		// Prefers a non-null assertion over explicit type cast when possible
		// https://typescript-eslint.io/rules/non-nullable-type-assertion-style
		// Note: explicit better
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',

		// Disallow throwing non-Error values as exceptions
		// https://typescript-eslint.io/rules/only-throw-error
		'@typescript-eslint/only-throw-error': ['error', {
			allowThrowingAny: false,
			allowThrowingUnknown: false,
		}],

		// Require or disallow the use of parameter properties in class constructors
		// https://typescript-eslint.io/rules/parameter-properties
		'@typescript-eslint/parameter-properties': 'off',

		// Prefer usage of `as const` over literal type (autofixable)
		// https://typescript-eslint.io/rules/prefer-as-const
		'@typescript-eslint/prefer-as-const': 'warn',

		// Prefer initializing each enums member value
		// https://typescript-eslint.io/rules/prefer-enum-initializers
		'@typescript-eslint/prefer-enum-initializers': 'error',

		// Prefer initializing each enums member value
		// https://typescript-eslint.io/rules/prefer-find
		// Note: `unicorn/prefer-array-find` does the same thing
		'@typescript-eslint/prefer-find': 'off',

		// Prefer a `for-of` loop over a standard `for` loop if the index is only used to access the array being iterated
		// https://typescript-eslint.io/rules/prefer-for-of
		'@typescript-eslint/prefer-for-of': 'warn',

		// Use function types instead of interfaces with call signatures (autofixable)
		// https://typescript-eslint.io/rules/prefer-function-type
		'@typescript-eslint/prefer-function-type': 'warn',

		// Enforce `includes` method over `indexOf` method (autofixable)
		// https://typescript-eslint.io/rules/prefer-includes
		'@typescript-eslint/prefer-includes': 'warn',

		// Require that all enum members be literal values to prevent unintended enum member name shadow issues
		// https://typescript-eslint.io/rules/prefer-literal-enum-member
		'@typescript-eslint/prefer-literal-enum-member': 'error',

		// Require the use of the `namespace` keyword instead of the `module`
		// keyword to declare custom TypeScript modules (autofixable)
		// https://typescript-eslint.io/rules/prefer-namespace-keyword
		'@typescript-eslint/prefer-namespace-keyword': 'warn',

		// Enforce the usage of the nullish coalescing operator instead of logical chaining
		// https://typescript-eslint.io/rules/prefer-nullish-coalescing
		'@typescript-eslint/prefer-nullish-coalescing': ['warn', {
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		}],

		// Prefer using concise optional chain expressions instead of chained logical ands
		// https://typescript-eslint.io/rules/prefer-optional-chain
		'@typescript-eslint/prefer-optional-chain': 'error',

		// Require using Error objects as Promise rejection reasons
		// https://typescript-eslint.io/rules/prefer-promise-reject-errors/
		...extensionFromBase('prefer-promise-reject-errors'),

		// Requires that private members are marked as `readonly` if they're
		// never modified outside of the constructor (autofixable but may be confusing while developing)
		// https://typescript-eslint.io/rules/prefer-readonly
		'@typescript-eslint/prefer-readonly': 'off',
		'no-autofix/@typescript-eslint/prefer-readonly': ['warn', {
			onlyInlineLambdas: false,
		}],

		// Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
		// https://typescript-eslint.io/rules/prefer-readonly-parameter-types
		// Note: is everything should be immutable in real life?
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',

		// Prefer using type parameter when calling `Array#reduce` instead of casting (autofixable)
		// https://typescript-eslint.io/rules/prefer-reduce-type-parameter
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',

		// Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided (autofixable)
		// https://typescript-eslint.io/rules/prefer-regexp-exec
		// Note: String#match more readable
		'@typescript-eslint/prefer-regexp-exec': 'off',

		// Enforce that `this` is used when only `this` type is returned (autofixable)
		// https://typescript-eslint.io/rules/prefer-return-this-type
		'@typescript-eslint/prefer-return-this-type': 'error',

		// Enforce the use of `String#startsWith` and `String#endsWith` instead of
		// other equivalent methods of checking substrings (autofixable)
		// https://typescript-eslint.io/rules/prefer-string-starts-ends-with
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',

		// Requires any function or method that returns a `Promise` to be marked `async` (autofixable but may be confusing)
		// https://typescript-eslint.io/rules/promise-function-async
		'@typescript-eslint/promise-function-async': ['off', {
			allowedPromiseNames: ['Thenable'],
			checkArrowFunctions: true,
			checkFunctionDeclarations: true,
			checkFunctionExpressions: true,
			checkMethodDeclarations: true,
		}],

		// Requires `Array#sort` calls to always provide a `compareFunction`
		// https://typescript-eslint.io/rules/require-array-sort-compare
		'@typescript-eslint/require-array-sort-compare': ['error', {
			ignoreStringArrays: true,
		}],

		// Disallow async functions which have no await expression
		// https://typescript-eslint.io/rules/require-await
		...extensionFromBase('require-await'),

		// When adding two variables, operands must both be of type number or of type string
		// https://typescript-eslint.io/rules/restrict-plus-operands
		'@typescript-eslint/restrict-plus-operands': ['off', {
			checkCompoundAssignments: true,
			allowAny: false,
		}],

		// Enforce template literal expressions to be of string type
		// https://typescript-eslint.io/rules/restrict-template-expressions
		'@typescript-eslint/restrict-template-expressions': ['error', {
			allowNumber: true,
			allowBoolean: false,
			allowAny: true,
			allowNullish: false,
			allowRegExp: true,
		}],

		// Enforces consistent returning of awaited values (autofixable but may change behavior)
		// https://typescript-eslint.io/rules/return-await
		'@typescript-eslint/return-await': 'off',
		'no-autofix/@typescript-eslint/return-await': ['error', 'in-try-catch'],

		// Restricts the types allowed in boolean expressions
		// https://typescript-eslint.io/rules/strict-boolean-expressions
		'@typescript-eslint/strict-boolean-expressions': 'off',

		// Exhaustiveness checking in switch with union type
		// https://typescript-eslint.io/rules/switch-exhaustiveness-check
		'@typescript-eslint/switch-exhaustiveness-check': 'error',

		// TS preference level for triple slash directives versus ES6-style import declarations
		// https://typescript-eslint.io/rules/triple-slash-reference
		'@typescript-eslint/triple-slash-reference': ['error', {
			lib: 'never',
			path: 'never',
			types: 'never',
		}],

		// Require consistent spacing around type annotations (autofixable)
		// https://typescript-eslint.io/rules/type-annotation-spacing
		// Note: good with default options
		'@stylistic/type-annotation-spacing': 'warn',

		// Requires type annotations to exist
		// https://typescript-eslint.io/rules/typedef
		'@typescript-eslint/typedef': 'off',

		// Enforces unbound methods are called with their expected scope
		// https://typescript-eslint.io/rules/unbound-method
		'@typescript-eslint/unbound-method': ['off', {
			ignoreStatic: true,
		}],

		// Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
		// https://typescript-eslint.io/rules/unified-signatures
		'@typescript-eslint/unified-signatures': ['warn', {
			ignoreDifferentlyNamedParameters: true,
		}],

		//Enforce typing arguments in Promise rejection callbacks as `unknown`
		// https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
		// Note: I believe in most scenarios it leads to (unreasonably) overly verbose code
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
	},
});
