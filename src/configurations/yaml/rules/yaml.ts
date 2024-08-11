import { pluginYaml } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		yml: pluginYaml,
	},
	rules: {
		// Enforce consistent line breaks after `:` indicator (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html
		'yml/block-mapping-colon-indicator-newline': ['warn', 'never'],

		// Enforce consistent line breaks after `?` indicator (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html
		'yml/block-mapping-question-indicator-newline': ['warn', 'never'],

		// Require or disallow block style mappings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html
		'yml/block-mapping': ['warn', {
			singleline: 'ignore',
			multiline: 'always',
		}],

		// Enforce consistent line breaks after `-` indicator (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html
		'yml/block-sequence-hyphen-indicator-newline': ['warn', 'never', { nestedHyphen: 'never' }],

		// Require or disallow block style sequences (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html
		// Reason for `ignore`: developer knows better which variant is more readable
		'yml/block-sequence': ['warn', {
			singleline: 'ignore',
			multiline: 'ignore',
		}],

		// Enforce YAML file extension
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html
		'yml/file-extension': ['warn', {
			extension: 'yaml',
			caseSensitive: true,
		}],

		// Enforce consistent indentation (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
		'yml/indent': ['warn', 2],

		// Enforce naming convention to key names
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html
		// Reason for `off`: YAML files are used in a variety of ways, from backend (or external APIs) mock data
		// to front end configurations, so the format can't be hardcoded.
		'yml/key-name-casing': ['off', {
			'camelCase': true,
			'PascalCase': true,
			'SCREAMING_SNAKE_CASE': true,
			'kebab-case': true,
			'snake_case': true,
			'ignores': [],
		}],

		// Disallow empty document
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html
		'yml/no-empty-document': 'warn',

		// Disallow empty mapping keys
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html
		'yml/no-empty-key': 'error',

		// Disallow empty mapping values
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html
		'yml/no-empty-mapping-value': 'error',

		// Disallow empty sequence entries
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html
		'yml/no-empty-sequence-entry': 'error',

		// Disallow tabs for indentation
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
		'yml/no-tab-indent': 'error',

		// Disallow trailing zeros for floats (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
		'yml/no-trailing-zeros': 'warn',

		// Require or disallow plain style scalar (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html
		'yml/plain-scalar': ['warn', 'always', {
			ignorePatterns: [
				'[\\v\\f\\u0085\\u00a0\\u1680\\u180e\\u2000-\\u200b\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]',
				'^(?:y|Y|yes|Yes|YES)$',
				'^(?:n|N|no|No|NO)$',
				'^(?:on|On|ON|off|Off|OFF)$',
				'^[.]$',
				'^/',
				'^[0-9\-.+]+(?:T[0-9\-.+]+)?Z?$',
				'^[0-9_]+$',
			],
		}],

		// Require sequence values to be sorted
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html
		// Note: should be configured individually
		'yml/sort-sequence-values': 'off',

		// Enforce the consistent use of either double, or single quotes (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
		'yml/quotes': ['warn', {
			prefer: 'single',
			avoidEscape: true,
		}],

		// Disallow mapping keys other than strings
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html
		'yml/require-string-key': 'off',

		// Disallow parsing errors in Vue custom blocks
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html
		'yml/vue-custom-block/no-parsing-error': 'error',

		/**
		 * Extension rules
		 */

		// Enforce consistent line breaks inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
		'yml/flow-mapping-curly-newline': ['warn', {
			multiline: true,
			minProperties: 6,
			consistent: true,
		}],

		// Enforce consistent spacing inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
		'yml/flow-mapping-curly-spacing': ['warn', 'always', {
			arraysInObjects: true,
			objectsInObjects: true,
		}],

		// Enforce linebreaks after opening and before closing flow sequence brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
		// Reason for `off`: developer knows better which variant is more readable
		'yml/flow-sequence-bracket-newline': ['off', 'consistent'],

		// Enforce consistent spacing inside flow sequence brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
		'yml/flow-sequence-bracket-spacing': ['warn', 'never'],

		// Enforce consistent spacing between keys and values in mapping pairs (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
		'yml/key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
			mode: 'minimum',
		}],

		// Disallow irregular whitespace
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
		'yml/no-irregular-whitespace': ['warn', {
			skipQuotedScalars: true,
			skipComments: false,
		}],

		// Disallow multiple empty lines (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
		'yml/no-multiple-empty-lines': ['warn', {
			max: 2,
			maxEOF: 1,
			maxBOF: 0,
		}],

		// Require mapping keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
		// Reason for `off`: developer knows better which properties are more important to be on top
		'yml/sort-keys': ['off', 'asc'],

		// Enforce consistent spacing after the # in a comment (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
		'yml/spaced-comment': ['warn', 'always', {
			exceptions: [],
			markers: [],
		}],
	},
});
