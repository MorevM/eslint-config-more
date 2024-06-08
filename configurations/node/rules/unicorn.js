module.exports = {
	plugins: ['unicorn', 'no-autofix'],
	rules: {
		// Prefer using the node: protocol when importing Node.js builtin modules (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
		// Note: fails on Node older than 16
		'unicorn/prefer-node-protocol': 'off',
		'no-autofix/unicorn/prefer-node-protocol': 'off',
	},
};
