import { pluginJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		jsonc: pluginJson,
	},
	rules: {
		// Disallow comments
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
		// JSON5 and JSONC allow comments
		'jsonc/no-comments': 'off',

		// Require or disallow trailing commas (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
		// JSON5 and JSONC allow trailing commas
		'jsonc/comma-dangle': ['warn', 'always-multiline'],
	},
});
