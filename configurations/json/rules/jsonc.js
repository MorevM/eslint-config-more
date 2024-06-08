module.exports = {
	rules: {
		// Disallow comments
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
		'jsonc/no-comments': 'off', // JSON5 and JSONC allow comments

		// TODO: Enable some of rules of `jsonc` package specially for JSON5
	},
};
