/* eslint-disable sonarjs/no-duplicate-string */
/**
 * Autofixable rules starts with `+` sign.
 * Autofixable rules with (partially) incorrect behavior starts with `!` sign.
 */

module.exports = {
	rules: {
		// Enforce linebreaks after opening and before closing array brackets (autofixable)
		// https://eslint.org/docs/rules/array-bracket-newline
		'+array-bracket-newline': ['warn', 'consistent'],

		// Enforce spacing inside array brackets (autofixable)
		// https://eslint.org/docs/rules/array-bracket-spacing
		'+array-bracket-spacing': ['warn', 'never'],

		// Enforce line breaks between array elements (autofixable)
		// https://eslint.org/docs/rules/array-element-newline
		// Reason for `off`: developer knows better
		'+array-element-newline': 'off',

		// Require or disallow parentheses around arrow function arguments (autofixable)
		// https://eslint.org/docs/rules/arrow-parens
		// Note: it was an `error`, next it was `warn` but...developer knows better
		'+arrow-parens': ['off', 'off'],

		// Enforce spacing before and after the arrow in arrow functions (autofixable)
		// https://eslint.org/docs/rules/arrow-spacing
		'+arrow-spacing': ['warn', {
			before: true,
			after: true,
		}],

		// Enforce spacing inside single-line blocks (autofixable)
		// https://eslint.org/docs/rules/block-spacing
		'+block-spacing': ['warn', 'always'],

		// Enforce brace style for blocks (autofixable)
		// https://eslint.org/docs/rules/brace-style
		// Note: 1true style
		'+brace-style': ['warn', '1tbs', {
			allowSingleLine: true,
		}],

		// Require or disallow trailing commas (autofixable)
		// https://eslint.org/docs/rules/comma-dangle
		'+comma-dangle': ['warn', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],

		// Enforce spacing before and after commas (autofixable)
		// https://eslint.org/docs/rules/comma-spacing
		'+comma-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce comma style (autofixable)
		// https://eslint.org/docs/rules/comma-style
		// Note: 1true style
		'+comma-style': ['warn', 'last', {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		}],

		// Enforce spacing inside computed property brackets (autofixable)
		// https://eslint.org/docs/rules/computed-property-spacing
		'+computed-property-spacing': ['warn', 'never'],

		// Enforces consistent newlines before or after dots (autofixable)
		// https://eslint.org/docs/rules/dot-location
		'+dot-location': ['error', 'property'],

		// Require or disallow newline at the end of files (autofixable)
		// https://eslint.org/docs/rules/eol-last
		'+eol-last': ['warn', 'always'],

		// Require or disallow spacing between function identifiers and their invocations (autofixable)
		// https://eslint.org/docs/rules/func-call-spacing
		'+func-call-spacing': ['warn', 'never'],

		// Enforce linebreaks between arguments of a function call (autofixable)
		// https://eslint.org/docs/rules/function-call-argument-newline
		'+function-call-argument-newline': ['warn', 'consistent'],

		// Enforce consistent linebreaks inside function parentheses (autofixable)
		// https://eslint.org/docs/rules/function-paren-newline
		'+function-paren-newline': ['warn', 'consistent'],

		// Enforce spacing around `*` operators in generator functions (autofixable)
		// https://eslint.org/docs/rules/generator-star-spacing
		'+generator-star-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce the location of arrow function bodies (autofixable)
		// https://eslint.org/docs/rules/implicit-arrow-linebreak
		// Note: Doesn't care about max-len when autofix
		'!implicit-arrow-linebreak': ['off', 'beside'],

		// Enforce consistent indentation (autofixable)
		// https://eslint.org/docs/rules/indent
		// Note: let's care about all people
		'+indent': ['warn', 'tab', {
			SwitchCase: 1,
		}],

		// Enforce the consistent use of either double or single quotes in JSX attributes (autofixable)
		// https://eslint.org/docs/rules/jsx-quotes
		'+jsx-quotes': ['warn', 'prefer-double'],

		// Enforces spacing between keys and values in object literal properties (autofixable)
		// https://eslint.org/docs/rules/key-spacing
		'+key-spacing': ['warn', {
			beforeColon: false,
			afterColon: true,
		}],

		// Enforce spacing before and after certain keywords (autofixable)
		// https://eslint.org/docs/rules/keyword-spacing
		'+keyword-spacing': ['warn', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		}],

		// Enforce position of line comments
		// https://eslint.org/docs/rules/line-comment-position
		// Note: developer should decide which is better
		'line-comment-position': 'off',

		// Enforce consistent linebreak style (autofixable)
		// https://eslint.org/docs/rules/linebreak-style
		'+linebreak-style': ['error', 'unix'],

		// Enforce empty lines around comments (autofixable)
		// https://eslint.org/docs/rules/lines-around-comment
		'+lines-around-comment': 'off',

		// Require or disallow an empty line between class members (autofixable)
		// https://eslint.org/docs/rules/lines-between-class-members
		'+lines-between-class-members': ['error', 'always', {
			exceptAfterSingleLine: false,
		}],

		// Enforce a maximum line length
		// https://eslint.org/docs/rules/max-len
		// Note: 80 or 100 is not enough, comments ignored
		'max-len': ['error', 120, 2, {
			ignoreUrls: true,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],

		// Enforce a maximum number of statements allowed per line
		// https://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': ['warn', {
			max: 3,
		}],

		// Enforce newlines between operands of ternary expressions (autofixable)
		// https://eslint.org/docs/rules/multiline-ternary
		'+multiline-ternary': ['warn', 'always-multiline'],

		// Enforce or disallow parentheses when invoking a constructor with no arguments (autofixable)
		// https://eslint.org/docs/rules/new-parens
		'+new-parens': 'error',

		// Require a newline after each call in a method chain (autofixable)
		// https://eslint.org/docs/rules/newline-per-chained-call
		// Note: remain it on developers
		'+newline-per-chained-call': 'off',

		// Disallow unnecessary parentheses (autofixable)
		// https://eslint.org/docs/rules/no-extra-parens
		// Note: let developer decide which format is better
		'+no-extra-parens': 'off',

		// Disallow mixed spaces and tabs for indentation
		// https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

		// Disallow use of multiple spaces (autofixable)
		// https://eslint.org/docs/rules/no-multi-spaces
		// Note: sometimes `fancy formatting` can really increase readability
		'+no-multi-spaces': ['warn', {
			exceptions: {
				Property: true,
				VariableDeclarator: true,
				ImportDeclaration: true,
			},
		}],

		// Disallow multiple empty lines (autofixable)
		// https://eslint.org/docs/rules/no-multiple-empty-lines
		// Note: only one newline at the end, and no new lines at the beginning
		'+no-multiple-empty-lines': ['warn', {
			max: 2,
			maxBOF: 0,
			maxEOF: 0,
		}],

		// Disallow all tabs
		// https://eslint.org/docs/rules/no-tabs
		// Note: tabs is better :)
		'no-tabs': 'off',

		// Disallow trailing whitespace at the end of lines (autofixable)
		// https://eslint.org/docs/rules/no-trailing-spaces
		'+no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// Disallow whitespace before properties (autofixable)
		// https://eslint.org/docs/rules/no-whitespace-before-property
		'+no-whitespace-before-property': 'error',

		// Enforce the location of single-line statements (autofixable)
		// https://eslint.org/docs/rules/nonblock-statement-body-position
		'+nonblock-statement-body-position': ['error', 'beside', {
			overrides: {},
		}],

		// Enforce linebreaks after opening and before closing braces (autofixable)
		// https://eslint.org/docs/rules/object-curly-newline
		'+object-curly-newline': ['warn', {
			ObjectExpression: { consistent: true },
			ObjectPattern: { consistent: true },
			ImportDeclaration: { consistent: true },
			ExportDeclaration: { consistent: true },
		}],

		// Enforce spacing inside braces (autofixable)
		// https://eslint.org/docs/rules/object-curly-spacing
		'+object-curly-spacing': ['warn', 'always'],

		// Enforce `same line` or `multiple line` on object properties (autofixable but unsafe cause indent)
		// https://eslint.org/docs/rules/object-property-newline
		'!object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: true,
		}],

		// Requires operator at the beginning of the line in multiline statements (autofixable)
		// https://eslint.org/docs/rules/operator-linebreak
		// Note: personal issues
		'+operator-linebreak': ['warn', 'before', {
			overrides: {
				'=': 'none',
			},
		}],

		// Require or disallow padding within blocks (autofixable)
		// https://eslint.org/docs/rules/padded-blocks
		'+padded-blocks': ['warn', {
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		}, {
			allowSingleLineBlocks: true,
		}],

		// Require or disallow padding lines between statements (autofixable)
		// https://eslint.org/docs/rules/padding-line-between-statements
		'+padding-line-between-statements': 'off',

		// Enforce use of either backticks, double, or single quotes (autofixable)
		// https://eslint.org/docs/rules/quotes
		'+quotes': ['warn', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],

		// Enforce spacing between rest and spread operators and their expressions (autofixable)
		// https://eslint.org/docs/rules/rest-spread-spacing
		'+rest-spread-spacing': ['warn', 'never'],

		// Require or disallow use of semicolons instead of ASI (autofixable)
		// https://eslint.org/docs/rules/semi
		'+semi': ['warn', 'always'],

		// Enforce spacing before and after semicolons (autofixable)
		// https://eslint.org/docs/rules/semi-spacing
		'+semi-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce location of semicolons (autofixable)
		// https://eslint.org/docs/rules/semi-style
		'+semi-style': ['error', 'last'],

		// Enforce spacing before blocks (autofixable)
		// https://eslint.org/docs/rules/space-before-blocks
		'+space-before-blocks': 'warn',

		// Require or disallow space before function opening parenthesis (autofixable)
		// https://eslint.org/docs/rules/space-before-function-paren
		'+space-before-function-paren': ['warn', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],

		// Enforce consistent spacing inside parentheses (autofixable)
		// https://eslint.org/docs/rules/space-in-parens
		'+space-in-parens': ['warn', 'never'],

		// Require spacing around infix operators (autofixable)
		// https://eslint.org/docs/rules/space-infix-ops
		'+space-infix-ops': 'warn',

		// Enforce spacing before or after unary operators (autofixable)
		// https://eslint.org/docs/rules/space-unary-ops
		'+space-unary-ops': ['warn', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// Enforce spacing around colons of switch statements (autofixable)
		// https://eslint.org/docs/rules/switch-colon-spacing
		'+switch-colon-spacing': ['warn', {
			after: true,
			before: false,
		}],

		// Require or disallow spacing around embedded expressions of template strings (autofixable)
		// https://eslint.org/docs/rules/template-curly-spacing
		'+template-curly-spacing': ['warn', 'never'],

		// Require or disallow spacing between template tags and their literals (autofixable)
		// https://eslint.org/docs/rules/template-tag-spacing
		'+template-tag-spacing': ['warn', 'never'],

		// Require or disallow Unicode byte order mark (BOM) (autofixable)
		// https://eslint.org/docs/rules/unicode-bom
		'+unicode-bom': ['error', 'never'],

		// Require parentheses around immediate `function` invocations (autofixable)
		// https://eslint.org/docs/rules/wrap-iife
		'+wrap-iife': ['warn', 'outside', {
			functionPrototypeMethods: false,
		}],

		// Require parenthesis around regex literals (autofixable)
		// https://eslint.org/docs/rules/wrap-regex
		'+wrap-regex': 'off',

		// Require or disallow spacing around the `*` in `yield*` expressions (autofixable)
		// https://eslint.org/docs/rules/yield-star-spacing
		'+yield-star-spacing': ['warn', 'after'],
	},
};
