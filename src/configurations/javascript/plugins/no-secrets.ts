import { pluginNoSecrets } from '#plugins';
import { defineConfigurationPart } from '#utils';

// https://github.com/nickdeis/eslint-plugin-no-secrets
export default defineConfigurationPart({
	plugins: {
		'no-secrets': pluginNoSecrets,
	},
	rules: {
		'no-secrets/no-secrets': ['warn', {
			tolerance: 5,
			additionalRegexes: {},
			ignoreContent: '^ABCD',
			ignoreModules: true,
			ignoreIdentifiers: ['BASE64_CHARS'],
			ignoreCase: false,
			additionalDelimiters: ['(?=[A-Z][a-z])'],
		}],
		'no-secrets/no-pattern-match': 'off',
	},
});
