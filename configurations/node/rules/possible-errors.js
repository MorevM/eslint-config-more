module.exports = {
	rules: {
		// Require error handling in callbacks
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
		'node/handle-callback-err': 'warn',

		// Ensure Node.js-style error-first callback pattern is followed
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
		'node/no-callback-literal': 'warn',

		// Disallow the assignment to exports
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
		'node/no-exports-assign': 'error',

		// Disallow `import` declarations which import extraneous modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
		'node/no-extraneous-import': 'error',

		// Disallow `require()` declarations which import extraneous modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
		'node/no-extraneous-require': 'error',

		// Disallow `import` declarations which import non-existence modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
		'node/no-missing-import': 'error',

		// Disallow `require()` declarations which import non-existence modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
		'node/no-missing-require': 'error',

		// Disallow `new` operators with calls to `require()`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
		'node/no-new-require': 'error',

		// Disallow string concatenation with `__dirname` and `__filename`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
		'node/no-path-concat': 'error',

		// Disallow the use of `process.exit()`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
		'node/no-process-exit': 'error',

		// Disallow bin files that `npm` ignores
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
		'node/no-unpublished-bin': 'error',

		// Disallow `import` declarations which import private modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
		'node/no-unpublished-import': 'off',

		// Disallow `require()` expressions which import private modules
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
		'node/no-unpublished-require': 'off',

		// Disallow unsupported ECMAScript built-ins on the specified version
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
		'node/no-unsupported-features/es-builtins': 'error',

		// Disallow unsupported ECMAScript syntax on the specified version
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
		'node/no-unsupported-features/es-syntax': 'error',

		// Disallow unsupported Node.js built-in APIs on the specified version
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
		'node/no-unsupported-features/node-builtins': 'error',

		// Make `process.exit()` expressions the same code path as `throw`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
		'node/process-exit-as-throw': 'error',

		// Suggest correct usage of shebang (autofixable but let this thing be turned off for a while)
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
		'!node/shebang': 'error',
	},
};
