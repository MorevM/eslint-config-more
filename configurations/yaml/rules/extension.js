module.exports = {
	rules: {
		// Enforce consistent line breaks inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
		'+yml/flow-mapping-curly-newline': ['warn', {
			multiline: true,
			minProperties: 6,
			consistent: true,
		}],

		// Enforce consistent spacing inside braces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
		'+yml/flow-mapping-curly-spacing': ['warn', 'always', {
			arraysInObjects: false,
			objectsInObjects: true,
		}],

		// Enforce linebreaks after opening and before closing flow sequence brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
		// Reason for `off`: developer knows better which variant is more readable
		'+yml/flow-sequence-bracket-newline': ['off', 'consistent'],

		// Enforce consistent spacing inside flow sequence brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
		'+yml/flow-sequence-bracket-spacing': ['warn', 'never'],

		// Enforce consistent spacing between keys and values in mapping pairs (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
		'+yml/key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
			mode: 'minimum',
		}],

		// Disallow irregular whitespace
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
		'yml/no-irregular-whitespace': ['error', {
			skipQuotedScalars: true,
			skipComments: false,
		}],

		// Disallow multiple empty lines (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
		'+yml/no-multiple-empty-lines': ['warn', {
			max: 2,
			maxEOF: 1,
			maxBOF: 0,
		}],

		// Require mapping keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
		// Reason for `off`: developer knows better which properties are more important to be on top
		'+yml/sort-keys': ['off', 'asc'],

		// Enforce consistent spacing after the # in a comment (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
		'+yml/spaced-comment': ['warn', 'always', {
			exceptions: [],
			markers: [],
		}],
	},
};
