module.exports = {
	rules: {
		// Require `return` statements after callbacks
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
		'node/callback-return': 'error',

		// Enforce either `module.exports` or `exports`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
		'node/exports-style': ['error', 'module.exports', {
			allowBatchAssign: false,
		}],

		// Enforce the style of file extensions in `import` declarations (autofixable)
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
		'+node/file-extension-in-import': ['error', 'always', {
			'.js': 'never',
		}],

		// Enforce `require()` calls to be placed at top-level module scope
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
		'node/global-require': 'off',

		// Disallow `require()` calls to be mixed with regular variable declarations
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
		'node/no-mixed-requires': 'error',

		// Disallow the use of `process.env`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
		'node/no-process-env': 'off',

		// Disallow specified modules when loaded by `import` declarations
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
		'node/no-restricted-import': 'off',

		// Disallow specified modules when loaded by `require()`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
		'node/no-restricted-require': 'off',

		// Disallow synchronous methods
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
		// Well, I use Node mostly for simple small CLI utilities
		'node/no-sync': 'off',

		// Enforce either `Buffer` or `require("buffer").Buffer`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
		'node/prefer-global/buffer': 'error',

		// Enforce either `console` or `require("console")`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
		'node/prefer-global/console': 'error',

		// enforce either `process` or `require("process")`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
		'node/prefer-global/process': 'error',

		// Enforce either `TextDecoder` or `require("util").TextDecoder`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
		'node/prefer-global/text-decoder': 'error',

		// Enforce either `TextEncoder` or `require("util").TextEncoder`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
		'node/prefer-global/text-encoder': 'error',

		// enforce either `URLSearchParams` or `require("url").URLSearchParams`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
		'node/prefer-global/url-search-params': 'error',

		// enforce either `URL` or `require("url").URL`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
		'node/prefer-global/url': 'error',

		// Enforce `require("dns").promises`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
		'node/prefer-promises/dns': 'error',

		// Enforce `require("fs").promises`
		// https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
		'node/prefer-promises/fs': 'error',
	},
};
