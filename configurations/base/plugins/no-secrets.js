module.exports = {
	plugins: ['no-secrets'],
	rules: {
		/**
		 * Seems it doesn't work if `additionalDelimiters` isn't an empty array.
		 * Now i'm too busy to investigate into it, but anyway rule reports
		 * well-known secrets like AWS fine
		 *
		 * TODO: [2022-05-11] Review
		 */
		'no-secrets/no-secrets': ['error', {
			tolerance: 99,
			additionalRegexes: {},
			ignoreContent: '^ABCD',
			ignoreModules: true,
			ignoreIdentifiers: [],
			ignoreCase: false,
			additionalDelimiters: [],
		}],
	},
};
