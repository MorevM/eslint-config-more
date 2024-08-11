import eslintPluginN from 'eslint-plugin-n';

export default {
	plugins: {
		n: eslintPluginN,
	},
	rules: {
		// Require `return` statements after callbacks
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
		'n/callback-return': 'error',

		// Enforce either `module.exports` or `exports` (autofixable)
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
		'n/exports-style': ['error', 'module.exports', {
			allowBatchAssign: false,
		}],

		// Enforce the style of file extensions in `import` declarations (autofixable)
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
		'n/file-extension-in-import': ['warn', 'always', {
			'.ts': 'never',
		}],

		// Enforce `require()` calls to be placed at top-level module scope
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
		'n/global-require': 'off',

		// Require error handling in callbacks
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
		'n/handle-callback-err': 'warn',

		// Require correct usage of hashbang (autofixable)
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
		'n/hashbang': ['error', {
			// "convertPath": null,
			ignoreUnpublished: false,
			additionalExecutables: [],
			executableMap: {
				'.js': 'node',
			},
		}],

		// Ensure Node.js-style error-first callback pattern is followed
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
		'n/no-callback-literal': 'warn',

		// Disallow deprecated APIs
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
		'n/no-deprecated-api': 'error',

		// Disallow the assignment to exports
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
		'n/no-exports-assign': 'error',

		// Disallow `import` declarations which import extraneous modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
		'n/no-extraneous-import': 'error',

		// Disallow `require()` declarations which import extraneous modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
		'n/no-extraneous-require': 'error',

		// Disallow `import` declarations which import non-existence modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
		'n/no-missing-import': ['off', {
			tryExtensions: ['.js', '.jsx', '.ts', '.tsx'],
		}],

		// Disallow `require()` declarations which import non-existence modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
		'n/no-missing-require': 'error',

		// Disallow `require()` calls to be mixed with regular variable declarations
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
		'n/no-mixed-requires': 'error',

		// Disallow `new` operators with calls to `require()`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
		'n/no-new-require': 'error',

		// Disallow string concatenation with `__dirname` and `__filename`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
		'n/no-path-concat': 'error',

		// Disallow the use of `process.env`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
		'n/no-process-env': 'off',

		// Disallow the use of `process.exit()`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
		'n/no-process-exit': 'error',

		// Disallow specified modules when loaded by `import` declarations
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
		'n/no-restricted-import': 'off',

		// Disallow specified modules when loaded by `require()`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
		'n/no-restricted-require': 'off',

		// Disallow synchronous methods
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
		// Well, I use Node mostly for simple small CLI utilities for developer usage only
		'n/no-sync': 'off',

		// Disallow bin files that `npm` ignores
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
		'n/no-unpublished-bin': 'error',

		// Disallow `import` declarations which import private modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
		'n/no-unpublished-import': 'off',

		// Disallow `require()` expressions which import private modules
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
		'n/no-unpublished-require': 'off',

		// Disallow unsupported ECMAScript built-ins on the specified version
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
		// Note: seems it doesn't work
		'n/no-unsupported-features/es-builtins': 'off',

		// Disallow unsupported ECMAScript syntax on the specified version
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
		// Note: seems it doesn't work
		'n/no-unsupported-features/es-syntax': 'off',

		// Disallow unsupported Node.js built-in APIs on the specified version
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
		// Note: seems it doesn't work
		'n/no-unsupported-features/node-builtins': 'off',

		// Enforce either `Buffer` or `require("buffer").Buffer`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
		'n/prefer-global/buffer': 'error',

		// Enforce either `console` or `require("console")`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
		'n/prefer-global/console': 'error',

		// Enforce either `process` or `require("process")`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
		'n/prefer-global/process': 'error',

		// Enforce either `TextDecoder` or `require("util").TextDecoder`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
		'n/prefer-global/text-decoder': 'error',

		// Enforce either `TextEncoder` or `require("util").TextEncoder`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
		'n/prefer-global/text-encoder': 'error',

		// Enforce either `URL` or `require("url").URL`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
		'n/prefer-global/url': 'error',

		// Enforce either `URLSearchParams` or `require("url").URLSearchParams`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
		'n/prefer-global/url-search-params': 'error',

		// Enforce using the `node:` protocol when importing `Node.js` builtin modules (autofixable)
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
		'n/prefer-node-protocol': 'warn',

		// Enforce `require("dns").promises`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
		'n/prefer-promises/dns': 'error',

		// Enforce `require("fs").promises`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
		'n/prefer-promises/fs': 'error',

		// Make `process.exit()` expressions the same code path as `throw`
		// https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
		'n/process-exit-as-throw': 'error',
	},
};
