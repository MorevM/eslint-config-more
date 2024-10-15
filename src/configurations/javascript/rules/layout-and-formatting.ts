import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	rules: {
		// Require or disallow Unicode byte order mark (BOM) (autofixable)
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	},
});
