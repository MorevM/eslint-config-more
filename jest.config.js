module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	collectCoverageFrom: [
		'./configurations/**/*.{js,jsx}',
		'./utils/**/*.{js,jsx}',
	],
	transform: {},
	verbose: true,
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'__tests__/tests-utils.js',
	],
	moduleNameMapper: {
		'eslint/use-at-your-own-risk': 'eslint/lib/unsupported-api.js',
	},
};
