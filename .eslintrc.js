module.exports = {
	extends: [
		'./build/presets/common.js',
		'./build/presets/vue2.js',
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'node/global-require': 'off',
				'import/no-dynamic-require': 'off',
			},
		}, {
			files: ['*.md'],
			rules: {
				// Doesn't respect HTML element indentation
				'markdownlint/md007': 'off',
				'no-autofix/markdownlint/md007': 'off',
			},
		},
	],
};
