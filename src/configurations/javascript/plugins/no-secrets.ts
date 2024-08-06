import { defineFlatConfig } from "eslint-define-config";
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets';

export default defineFlatConfig({
	plugins: {
		'no-secrets': eslintPluginNoSecrets,
	},
	rules: {
		/**
		 * Seems it doesn't work if `additionalDelimiters` isn't an empty array.
		 * Now i'm too busy to investigate into it, but anyway rule reports
		 * well-known secrets like AWS fine
		 *
		 * TODO: [2025-05-11] Review
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
});
