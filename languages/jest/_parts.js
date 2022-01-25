const initial = {
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			env: {
				'jest/globals': true,
			},
		},
	],

};

const parts = [
	'./rules/jest.js',
];

module.exports = { initial, parts };
