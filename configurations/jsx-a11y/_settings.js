const base = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@babel/eslint-parser',
		babelOptions: {
			parserOpts: {
				plugins: ['jsx'],
			},
		},
	},
};

const parts = [
	'./rules/jsx-a11y.js',
].map(part => require(part));

module.exports = { base, parts };
