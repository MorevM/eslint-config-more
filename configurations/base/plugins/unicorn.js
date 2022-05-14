module.exports = {
	plugins: ['unicorn'],
	rules: {
		// Improve regexes by making them shorter, consistent, and safer (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
		'+unicorn/better-regex': ['warn', {
			sortCharacterClasses: true,
		}],

		// Enforce a specific parameter name in catch clauses (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
		// Note: developer knows better
		'+unicorn/catch-error-name': ['off', {
			name: 'error',
			ignore: [],
		}],

		// Use destructured variables over properties (partly autofixable, but might be confusing)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
		// Reason for `off`: too much false-positive errors
		'!unicorn/consistent-destructuring': 'off',

		// Move function definitions to the highest possible scope
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
		// Note: really not sure about that, let it be in warn for a while @todo:
		'unicorn/consistent-function-scoping': 'warn',

		// Enforce correct `Error` subclassing (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
		'+unicorn/custom-error-definition': 'error',

		// Enforce no spaces between braces (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
		'+unicorn/empty-brace-spaces': 'warn',

		// Enforce passing a `message` value when creating a built-in error
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
		'unicorn/error-message': 'error',

		// Require escape sequences to use uppercase values (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
		'+unicorn/escape-case': 'warn',

		// Add expiration conditions to TODO comments
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
		'unicorn/expiring-todo-comments': 'error',

		// Enforce explicitly comparing the length or size property of a value
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
		'+unicorn/explicit-length-check': 'off',

		// Enforce a case style for filenames
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
		'unicorn/filename-case': ['error', {
			case: 'kebabCase',
			ignore: [],
		}],

		// Enforce importing index files with `.`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-index.md
		// Note: don't think its a good idea...
		'unicorn/import-index': 'off',

		// Enforce specific import styles per module
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
		// Note: it depends, developer knows better
		'unicorn/import-style': 'off',

		// Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`
		// (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
		'+unicorn/new-for-builtins': 'warn',

		// Enforce specifying rules to disable in `eslint-disable` comments
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
		// Note: it depends, i would like to enable it for all cases except `eslint-disable(-*)?-line`, but there is no option, so off
		'unicorn/no-abusive-eslint-disable': 'off',

		// Prevent passing a function reference directly to iterator methods
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
		// Note: not sure, but let this thing be `error` for a while
		'unicorn/no-array-callback-reference': 'error',

		// Prefer `for…of` over `Array#forEach(…)` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
		// Note: what's the problem with `forEach`?
		'+unicorn/no-array-for-each': 'off',

		// Disallow using the this argument in array methods (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
		'+unicorn/no-array-method-this-argument': 'warn',

		// Enforce combining multiple `Array#push()` into one call (autofixable but doesn't care about comments, may be confusing)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
		'!unicorn/no-array-push-push': 'warn',

		// Disallow `Array#reduce()` and `Array#reduceRight()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
		// Note: if you can't read reduce calls - just practice more
		'unicorn/no-array-reduce': 'off',

		// Forbid member access from await expression (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
		'+unicorn/no-await-expression-member': 'error',

		// Do not use leading/trailing space between `console.log` parameters (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
		'+unicorn/no-console-spaces': 'warn',

		// Do not use `document.cookie` directly
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
		// `js-cookie` just 1.5kb and no worries
		'unicorn/no-document-cookie': 'error',

		// Disallow empty files
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
		// Note: some files may be intentionally empty, but it's good to have a rule that will show them
		'unicorn/no-empty-file': 'warn',

		// Do not use a for loop that can be replaced with a for-of loop (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
		// Note: too radical to be an error or exists at all, but let it be `warn` for a while
		'+unicorn/no-for-loop': 'warn',

		// Enforce the use of Unicode escapes instead of hexadecimal escapes (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
		'+unicorn/no-hex-escape': 'warn',

		// Require `Array.isArray()` instead of `instanceof Array` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
		'+unicorn/no-instanceof-array': 'error',

		// Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
		'+unicorn/no-invalid-remove-event-listener': 'error',

		// Disallow identifiers starting with new or class
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
		// Note: developer knows better
		'unicorn/no-keyword-prefix': 'off',

		// Disallow `if` statements as the only statement in `if` blocks without `else` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
		'!unicorn/no-lonely-if': 'warn',

		// Disallow nested ternary expressions (partly autofixable).
		// It allows nested, but they should be wrapped in parentheses (thats correct).
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
		'no-nested-ternary': 'off',
		'+unicorn/no-nested-ternary': 'off',

		// Disallow `new Array()` (partly autofixable)
		// Note: no need, it's clear if only one parameter as defined in base `no-array-constructor`
		'+unicorn/no-new-array': 'off',

		// Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
		// (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
		'+unicorn/no-new-buffer': 'error',

		// Disallow the use of the `null` literal
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
		// Note: `null` is used to show variable exists and "not set"; `undefined` means... nothing?
		'unicorn/no-null': 'off',

		// Disallow the use of objects as default parameters
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
		'unicorn/no-object-as-default-parameter': 'error',

		// Disallow `process.exit()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
		// Note: dunno whats wrong with `process.exit()`
		'unicorn/no-process-exit': 'off',

		// Forbid classes that only have static members
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
		'unicorn/no-static-only-class': 'error',

		// Disallow `then` property
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
		'unicorn/no-thenable': 'error',

		// Disallow assigning `this` to a variable
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
		// Note: too radical to be a strict rule
		'unicorn/no-this-assignment': 'off',

		// Disallow unreadable array destructuring (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
		// Note: developer knows better
		'+unicorn/no-unreadable-array-destructuring': 'off',

		// Disallow unreadable IIFEs
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
		// Note: developer knows better
		'unicorn/no-unreadable-iife': 'off',

		// Disallow unsafe regular expressions
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
		'unicorn/no-unsafe-regex': 'warn',

		// Disallow unused object properties
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
		'unicorn/no-unused-properties': 'warn',

		// Forbid useless fallback when spreading in object literals (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
		'+unicorn/no-useless-fallback-in-spread': 'warn',

		// Disallow useless array length check (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
		'+unicorn/no-useless-length-check': 'off',

		// Disallow returning/yielding P`romise.resolve/reject()` in async functions or promise callbacks (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
		'+unicorn/no-useless-promise-resolve-reject': 'warn',

		// Disallow useless spread (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
		'+unicorn/no-useless-spread': 'error',

		// Disallow useless case in switch statements
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
		'unicorn/no-useless-switch-case': 'error',

		// Disallow useless undefined (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
		// Note: as for `null`, developer should know better
		'+unicorn/no-useless-undefined': 'off',

		// Disallow number literals with zero fractions or dangling dots (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
		// Note: developer knows better, maybe we want to indicate number which `used as` double next
		'+unicorn/no-zero-fractions': 'off',

		// Enforce proper case for numeric literals (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
		'+unicorn/number-literal-case': 'warn',

		// Enforce the style of numeric separators by correctly grouping digits (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
		// Note: all default
		'+unicorn/numeric-separators-style': ['error', {
			onlyIfContainsSeparator: true,
			hexadecimal: {
				minimumDigits: 0,
				groupLength: 2,
			},
			binary: {
				minimumDigits: 0,
				groupLength: 4,
			},
			octal: {
				minimumDigits: 0,
				groupLength: 4,
			},
			number: {
				minimumDigits: 5,
				groupLength: 3,
			},
		}],

		// Prefer `.addEventListener()` and `.removeEventListener()` over on-functions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md
		// Doesn't set removeEventListener, so may be confusing to disable it
		'!unicorn/prefer-add-event-listener': 'off', // may be really confusing when autofix

		// Prefer `.find(…)` over the first element from `.filter(…)` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
		'+unicorn/prefer-array-find': 'warn',

		// Prefer `Array#flat()` over legacy techniques to flatten arrays (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
		'+unicorn/prefer-array-flat': 'warn',

		// Prefer `.flatMap(…)` over `.map(…).flat()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
		'+unicorn/prefer-array-flat-map': 'warn',

		// Prefer `Array#indexOf()` over `Array#findIndex()` when looking for the index of an item (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
		'+unicorn/prefer-array-index-of': 'warn',

		// Prefer `.some(…)` over `.filter(…).length` check and `.find(…)` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
		'+unicorn/prefer-array-some': 'warn',

		// Prefer `.at()` method for index access and `String#charAt()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
		// Fails on Node 14
		// TODO: [2023-01-01] Review it again
		'!unicorn/prefer-at': 'off',

		// Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
		'unicorn/prefer-code-point': 'error',

		// Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
		'+unicorn/prefer-date-now': 'warn',

		// Prefer default parameters over reassignment (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
		'+unicorn/prefer-default-parameters': 'error',

		// Prefer `export…from` when re-exporting (autofixable but might be confusing during development flow)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
		'!unicorn/prefer-export-from': ['warn', {
			ignoreUsedVariables: true,
		}],

		// Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence
		// (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
		'+unicorn/prefer-includes': 'error',

		// Prefer reading a JSON file as a buffer (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
		'+unicorn/prefer-json-parse-buffer': 'warn',

		// Enforce the use of `Math.trunc` instead of bitwise operators (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
		'+unicorn/prefer-math-trunc': 'warn',

		// Prefer modern `Math` APIs over legacy patterns (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
		'+unicorn/prefer-modern-math-apis': 'warn',

		// Prefer JavaScript modules (ESM) over CommonJS
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
		// Note: todo: a bit later
		'unicorn/prefer-module': 'off',

		// Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
		'+unicorn/prefer-native-coercion-functions': 'warn',

		// Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`,
		// `Array#splice()` and `Array#at()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
		'+unicorn/prefer-negative-index': 'error',

		// Prefer `Number` static properties over global ones (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
		// Note: what's the problem with global functions? I'm serious.
		'+unicorn/prefer-number-properties': 'off',

		// Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object
		// (autofixable for simple cases)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
		// Reason: too many false-positive errors
		'!unicorn/prefer-object-from-entries': 'off',

		// Prefer omitting the catch binding parameter. (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
		'+unicorn/prefer-optional-catch-binding': 'error',

		// Prefer borrowing methods from the prototype instead of methods from an instance (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
		// Reason for `off`: Too verbose, would anyone seriously overwrite methods of global objects?
		'+unicorn/prefer-prototype-methods': 'off',

		// Prefer `.querySelector()` over `.getElementById()`,
		// `.querySelectorAll()` over `.getElementsByClassName()` and .`getElementsByTagName()`. (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
		'+unicorn/prefer-query-selector': 'error',

		// Prefer `Reflect.apply()` over `Function#apply()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
		'!unicorn/prefer-reflect-apply': 'error',

		// Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
		// Note: just why?
		'!unicorn/prefer-regexp-test': 'off',

		// Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
		// Note: Set needed when Set needed, Array needed when Array needed...
		'!unicorn/prefer-set-has': 'off',

		// Prefer the spread operator over `Array.from(…)`, `Array#concat(…)` and `Array#slice()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
		'+unicorn/prefer-spread': 'error',

		// Prefer `String#replaceAll()` over regex searches with the global flag (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
		// Fails on Node 14
		// TODO: [2023-01-01] Review it again
		'!unicorn/prefer-string-replace-all': 'off',

		// Prefer `String#slice()` over `String#substr()` and `String#substring()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
		// Note: Autofix works strange replacing `s.substring(0, start)` to `s.slice(0, Math.max(0, start))` that impairs readability
		'!unicorn/prefer-string-slice': 'error',

		// Prefer `String#startsWith()` && `String#endsWith()` over `RegExp#test()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
		'+unicorn/prefer-string-starts-ends-with': 'error',

		// Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
		'+unicorn/prefer-string-trim-start-end': 'warn',

		// Prefer `switch` over multiple `else-if` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
		// Note: opinions about that in community too different, so let this thing be `off`
		'!unicorn/prefer-switch': 'off',

		// Prefer ternary expressions over simple if-else statements (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
		'+unicorn/prefer-ternary': ['error', 'always'],

		// Prefer top-level await over top-level promises and async function calls
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
		// TODO: [2023-10-10] Enable it
		'unicorn/prefer-top-level-await': 'off',

		// Enforce throwing `TypeError` in type checking conditions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
		'+unicorn/prefer-type-error': 'error',

		// Prevent abbreviations (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
		// Note: it mostly personal preferences, I'm absolutely fine with any common abbreviations
		//       which makes code less verbose, but some of them are just annoying to read.
		'+unicorn/prevent-abbreviations': ['warn', {
			extendDefaultReplacements: false,
			replacements: {
				btn: {
					button: true,
				},
				conf: {
					config: true,
				},
				cur: {
					curr: true,
				},
				idx: {
					index: true,
				},
				msg: {
					message: true,
				},
				tbl: {
					table: true,
				},
			},
		}],

		// Enforce consistent relative URL style (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
		// Note: explicit indication more clear than implicit
		'+unicorn/relative-url-style': ['warn', 'always'],

		// Enforce using the separator argument with `Array#join()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
		'+unicorn/require-array-join-separator': 'error',

		// Enforce using the digits argument with `Number#toFixed()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
		'unicorn/require-number-to-fixed-digits-argument': 'error',

		// Enforce using the targetOrigin argument with window.postMessage()
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
		'unicorn/require-post-message-target-origin': 'error',

		// Enforce better string content
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
		'unicorn/string-content': 'off',

		// Fix whitespace-insensitive template indentation (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
		// Note: this is default configuration but I have a feeling that changes will be needed, so the options are explicit
		'+unicorn/template-indent': ['warn', {
			tags: [
				'outdent',
				'dedent',
				'gql',
				'sql',
				'html',
				'styled',
			],
			functions: [
				'dedent',
				'stripIndent',
			],
			selectors: [],
			comments: [
				'HTML',
				'indent',
			],
		}],

		// Enforce consistent case for text encoding identifiers (autofixable but implementation is dumb simple)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
		// Note: All that this rule does - replaces `utf-8` strings to `utf8`, no matter where it placed
		'!unicorn/text-encoding-identifier-case': 'off',

		// Require new when throwing an error (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
		'+unicorn/throw-new-error': 'error',
	},
};
