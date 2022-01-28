const parts = [
	'./rules/yaml.js',
	'./rules/extension.js',
];

const initial = {
	plugins: ['yml'],
	overrides: [{
		files: ['*.yaml', '*.yml'],
		parser: 'yaml-eslint-parser',
		rules: {
			'spaced-comment': 'off',
			'no-multiple-empty-lines': 'off',
			'no-multi-spaces': 'off',
		},
	}],
};

module.exports = { parts, initial };
