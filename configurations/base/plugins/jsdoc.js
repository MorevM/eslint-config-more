module.exports = {
	plugins: ['jsdoc'],
	rules: {
		// Checks that `@access` tags use one of the correct values
		// https://github.com/gajus/eslint-plugin-jsdoc#check-access
		'jsdoc/check-access': 'error',

		// Reports invalid alignment of JSDoc block asterisks (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-alignment
		'+jsdoc/check-alignment': 'warn',

		// Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
		// https://github.com/gajus/eslint-plugin-jsdoc#check-examples
		// TODO: [2023-05-11] Doesn't work with ESLint 8, waiting for resolve
		'jsdoc/check-examples': 'off',

		// Reports invalid padding inside JSDoc blocks
		// https://github.com/gajus/eslint-plugin-jsdoc#check-indentation
		// Note: false positives with multiline aligned strings
		'jsdoc/check-indentation': 'off',

		// Reports invalid alignment of JSDoc block lines (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-line-alignment
		'+jsdoc/check-line-alignment': ['warn', 'always', {
			customSpacings: {
				postTag: 3,
				postType: 3,
				postName: 3,
			},
		}],

		// Ensures that parameter names in JSDoc match those
		// in the function declaration (autofixable but may be confusing)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-param-names
		'!jsdoc/check-param-names': ['error', {
			enableFixer: true,
		}],

		// Ensures that property names in JSDoc are not duplicated on the same block
		// and that nested properties have defined roots
		// (autofixable but may be confusing)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-property-names
		'!jsdoc/check-property-names': ['error', { enableFixer: true }],

		// Reports against syntax not encouraged for the mode
		// https://github.com/gajus/eslint-plugin-jsdoc#check-syntax
		'jsdoc/check-syntax': 'error',

		// Reports invalid block tag names (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
		'+jsdoc/check-tag-names': 'error',

		// Reports invalid types (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#check-types
		'+jsdoc/check-types': 'error',

		// Reports invalid types
		// https://github.com/gajus/eslint-plugin-jsdoc#check-values
		'jsdoc/check-values': 'error',

		// Expects the following tags to be empty of any content
		// (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#empty-tags
		'+jsdoc/empty-tags': 'warn',

		// Reports an issue with any non-constructor function using `@implements`
		// https://github.com/gajus/eslint-plugin-jsdoc#implements-on-classes
		'jsdoc/implements-on-classes': 'error',

		// Enforces a regular expression pattern on descriptions
		// https://github.com/gajus/eslint-plugin-jsdoc#match-description
		'jsdoc/match-description': 'off',

		// Reports the name portion of a JSDoc tag if matching
		// or not matching a given regular expression (partly autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#match-name
		'+jsdoc/match-name': 'off',

		// Controls how and whether jsdoc blocks can be expressed
		// as single or multiple line blocks (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#multiline-blocks
		'+jsdoc/multiline-blocks': ['warn', {
			noMultilineBlocks: false,
			noSingleLineBlocks: true,
		}],

		// Enforces a consistent padding of the block description (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#newline-after-description
		'+jsdoc/newline-after-description': ['warn', 'always'],

		// Checks for multi-line-style comments which fail
		// to meet the criteria of a jsdoc block (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#no-bad-blocks
		'+jsdoc/no-bad-blocks': 'error',

		// Reports defaults being used on the relevant portion
		// of `@param` or `@default` (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#no-defaults
		'+jsdoc/no-defaults': 'warn',

		// Report if certain always expected comment structures are missing
		// https://github.com/gajus/eslint-plugin-jsdoc#no-missing-syntax
		'jsdoc/no-missing-syntax': 'off',

		// Prevents use of multiple asterisks at the beginning of lines (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#no-multi-asterisks
		'+jsdoc/no-multi-asterisks': 'warn',

		// Reports when certain comment structures are present
		// https://github.com/gajus/eslint-plugin-jsdoc#no-restricted-syntax
		'jsdoc/no-restricted-syntax': 'off',

		// This rule reports types being used on `@param` or `@returns`
		// (autofixable but it isn't clear)
		// https://github.com/gajus/eslint-plugin-jsdoc#no-types
		'!jsdoc/no-types': 'off',

		// Checks that types in jsdoc comments are defined
		// https://github.com/gajus/eslint-plugin-jsdoc#no-undefined-types
		'jsdoc/no-undefined-types': 'error',

		// Requires that each JSDoc line starts with an `*` (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#require-asterisk-prefix
		'+jsdoc/require-asterisk-prefix': ['warn', 'always'],

		// Requires that block description, explicit `@description`,
		// and `@param`/`@returns` tag descriptions are written
		// in complete sentences (autofixable but works incorrect)
		// Related issue: https://github.com/gajus/eslint-plugin-jsdoc/issues/779
		// https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence
		'!jsdoc/require-description-complete-sentence': 'off',

		// Requires that all functions have a description
		// https://github.com/gajus/eslint-plugin-jsdoc#require-description
		'jsdoc/require-description': 'error',

		// Requires that all functions have examples (strangely autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#require-example
		'!jsdoc/require-example': 'off',

		// Require `@file`, `@fileoverview,` or `@overview`
		// https://github.com/gajus/eslint-plugin-jsdoc#require-file-overview
		'jsdoc/require-file-overview': 'off',

		// Requires (or disallows) a hyphen before the `@param` description
		// (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#require-hyphen-before-param-description
		'+jsdoc/require-hyphen-before-param-description': ['warn', 'never'],

		// Checks for presence of jsdoc comments
		// https://github.com/gajus/eslint-plugin-jsdoc#require-jsdoc
		'jsdoc/require-jsdoc': 'off',

		// Requires that each `@param` tag has a description value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
		'jsdoc/require-param-description': 'off',

		// Requires that all function parameters have names
		// https://github.com/gajus/eslint-plugin-jsdoc#require-param-name
		'jsdoc/require-param-name': 'error',

		// Requires that each `@param` tag has a `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
		'jsdoc/require-param-type': 'error',

		// Requires that all function parameters are documented (autofixable?)
		// https://github.com/gajus/eslint-plugin-jsdoc#require-param
		// Note: document all or nothing!
		'+jsdoc/require-param': ['error', {
			enableFixer: true,
		}],

		// Requires that all `@typedef` and `@namespace` tags have `@property`
		// when their type is a plain object, Object, or PlainObject
		// https://github.com/gajus/eslint-plugin-jsdoc#require-property
		'jsdoc/require-property': 'off',

		// Requires that each `@property` tag has a `description` value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-property-description
		'jsdoc/require-property-description': 'off',

		// Requires that all function `@property` tags have names
		// https://github.com/gajus/eslint-plugin-jsdoc#require-property-name
		'jsdoc/require-property-name': 'error',

		// Requires that each `@property` tag has a `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-property-type
		'jsdoc/require-property-type': 'error',

		// Requires a return statement (or non-undefined Promise resolve value)
		// in function bodies if a @returns tag (without a void or undefined type)
		// is specified in the function's jsdoc comment.
		// https://github.com/gajus/eslint-plugin-jsdoc#require-returns-check
		'jsdoc/require-returns-check': 'error',

		// Requires that the `@returns` tag has a `description` value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
		'jsdoc/require-returns-description': 'off',

		// Requires that `@returns` tag has `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
		'jsdoc/require-returns-type': 'error',

		// Requires that returns are documented
		// https://github.com/gajus/eslint-plugin-jsdoc#require-returns
		'jsdoc/require-returns': 'error',

		// Requires that throw statements are documented
		// https://github.com/gajus/eslint-plugin-jsdoc#require-throws
		'jsdoc/require-throws': 'error',

		// Requires that yields are documented
		// https://github.com/gajus/eslint-plugin-jsdoc#require-yields
		'jsdoc/require-yields': 'error',

		// Ensures that if a `@yields` is present that a yield
		// (or yield with a value) is present in the function body
		// https://github.com/gajus/eslint-plugin-jsdoc#require-yields-check
		'jsdoc/require-yields-check': 'error',

		// Sorts tags by a specified sequence according to tag name (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#sort-tags
		// Note: let it be here with default order for a while
		'+jsdoc/sort-tags': 'warn',

		// Enforces lines (or no lines) between tags (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc#tag-lines
		// Note: `off` because there is no way to force an one empty line before `@returns`
		// Related: https://github.com/gajus/eslint-plugin-jsdoc/issues/782
		'+jsdoc/tag-lines': ['off', 'never'],

		// Requires all types to be valid JSDoc, Closure, or TypeScript compiler
		// types without syntax errors
		// https://github.com/gajus/eslint-plugin-jsdoc#valid-types
		'jsdoc/valid-types': 'error',
	},
};
