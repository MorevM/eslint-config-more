module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	transform: {},
	verbose: true,
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'__tests__/tests-utils.js',
	],
};
