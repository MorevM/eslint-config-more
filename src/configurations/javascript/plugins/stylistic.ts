import { defineConfigurationPart } from '#utils';
import { pluginNoAutofix, pluginStylistic } from '#plugins';

export default defineConfigurationPart({
	plugins: {
		'@stylistic': pluginStylistic,
		'no-autofix': pluginNoAutofix,
	},
	rules: {
		// Enforce linebreaks after opening and before closing array brackets (autofixable)
		// https://eslint.style/rules/js/array-bracket-newline
		'@stylistic/array-bracket-newline': ['warn', 'consistent'],

		// Enforce spacing inside array brackets (autofixable)
		// https://eslint.style/rules/js/array-bracket-spacing
		'@stylistic/array-bracket-spacing': ['warn', 'never'],

		// Enforce line breaks between array elements (autofixable)
		// https://eslint.style/rules/js/array-element-newline
		'@stylistic/array-element-newline': 'off',

		// Require or disallow parentheses around arrow function arguments (autofixable)
		// https://eslint.style/rules/js/arrow-parens
		'@stylistic/arrow-parens': ['warn', 'always'],

		// Enforce spacing before and after the arrow in arrow functions (autofixable)
		// https://eslint.style/rules/js/arrow-spacing
		'@stylistic/arrow-spacing': ['warn', {
			before: true,
			after: true,
		}],

		// Enforce spacing inside single-line blocks (autofixable)
		// https://eslint.style/rules/js/block-spacing
		'@stylistic/block-spacing': ['warn', 'always'],

		// Enforce brace style for blocks (autofixable)
		// https://eslint.style/rules/js/brace-style
		// Note: 1true style
		'@stylistic/brace-style': ['warn', '1tbs', {
			allowSingleLine: true,
		}],

		// Require or disallow trailing commas (autofixable)
		// https://eslint.style/rules/js/comma-dangle
		'@stylistic/comma-dangle': ['warn', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],

		// Enforce spacing before and after commas (autofixable)
		// https://eslint.style/rules/js/comma-spacing
		'@stylistic/comma-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce comma style (autofixable)
		// https://eslint.style/rules/js/comma-style
		// Note: 1true style
		'@stylistic/comma-style': ['warn', 'last', {
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
		// https://eslint.style/rules/js/computed-property-spacing
		'@stylistic/computed-property-spacing': ['warn', 'never'],

		// Enforce consistent line breaks after opening and before closing braces (autofixable)
		// https://eslint.style/rules/default/curly-newline
		'@stylistic/curly-newline': ['warn', {
			multiline: true,
			consistent: true,
		}],

		// Enforces consistent newlines before or after dots (autofixable)
		// https://eslint.style/rules/js/dot-location
		'@stylistic/dot-location': ['warn', 'property'],

		// Require or disallow newline at the end of files (autofixable)
		// https://eslint.style/rules/js/eol-last
		'@stylistic/eol-last': ['warn', 'always'],

		// Require or disallow spacing between function identifiers and their invocations (autofixable)
		// https://eslint.style/rules/js/func-call-spacing
		'@stylistic/func-call-spacing': 'off',

		// Enforce linebreaks between arguments of a function call (autofixable)
		// https://eslint.style/rules/js/function-call-argument-newline
		'@stylistic/function-call-argument-newline': ['warn', 'consistent'],

		// Require or disallow spacing between function identifiers and their invocations (autofixable)
		// https://eslint.style/rules/default/function-call-spacing
		'@stylistic/function-call-spacing': ['warn', 'never'],

		// Enforce consistent linebreaks inside function parentheses (autofixable)
		// https://eslint.style/rules/js/function-paren-newline
		'@stylistic/function-paren-newline': ['warn', 'consistent'],

		// Enforce spacing around `*` operators in generator functions (autofixable)
		// https://eslint.style/rules/js/generator-star-spacing
		'@stylistic/generator-star-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce the location of arrow function bodies (autofixable)
		// https://eslint.style/rules/js/implicit-arrow-linebreak
		// Note: Doesn't care about max-len when autofix
		'@stylistic/implicit-arrow-linebreak': 'off',
		'no-autofix/@stylistic/implicit-arrow-linebreak': ['off', 'beside'],

		// Enforce consistent indentation (autofixable)
		// https://eslint.style/rules/js/indent
		// Note: let's care about all people
		'@stylistic/indent': ['warn', 'tab', {
			SwitchCase: 1,
			tabLength: 2,
		}],

		// Indentation for binary operators in multiline expressions (autofixable)
		// https://eslint.style/rules/default/indent-binary-ops
		'@stylistic/indent-binary-ops': ['warn', 'tab'],

		// Enforce the consistent use of either double or single quotes in JSX attributes (autofixable)
		// https://eslint.style/rules/js/jsx-quotes
		'@stylistic/jsx-quotes': ['warn', 'prefer-double'],

		// Enforces spacing between keys and values in object literal properties (autofixable)
		// https://eslint.style/rules/js/key-spacing
		'@stylistic/key-spacing': ['warn', {
			beforeColon: false,
			afterColon: true,
		}],

		// Enforce spacing before and after certain keywords (autofixable)
		// https://eslint.style/rules/js/keyword-spacing
		'@stylistic/keyword-spacing': ['warn', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		}],

		// Enforce position of line comments (autofixable)
		// https://eslint.style/rules/js/line-comment-position
		'@stylistic/line-comment-position': 'off',

		// Enforce consistent linebreak style (autofixable)
		// https://eslint.style/rules/js/linebreak-style
		'@stylistic/linebreak-style': ['error', 'unix'],

		// Enforce empty lines around comments (autofixable)
		// https://eslint.style/rules/js/lines-around-comment
		'@stylistic/lines-around-comment': 'off',

		// Require or disallow an empty line between class members (autofixable)
		// https://eslint.style/rules/js/lines-between-class-members
		'@stylistic/lines-between-class-members': ['warn', 'always', {
			exceptAfterSingleLine: false,
		}],

		// Enforce a maximum line length
		// https://eslint.style/rules/js/max-len
		// Note: 80 or 100 is not enough, comments are ignored
		'@stylistic/max-len': ['warn', {
			code: 120,
			tabWidth: 2,
			ignoreComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
		}],

		// Enforce a maximum number of statements allowed per line
		// https://eslint.style/rules/js/max-statements-per-line
		'@stylistic/max-statements-per-line': ['warn', {
			max: 3,
		}],

		// Enforce a particular style for multiline comments (autofixable)
		// https://eslint.style/rules/js/multiline-comment-style
		'@stylistic/multiline-comment-style': 'off',

		// Enforce newlines between operands of ternary expressions (autofixable)
		// https://eslint.style/rules/js/multiline-ternary
		'@stylistic/multiline-ternary': ['warn', 'always-multiline'],

		// Enforce or disallow parentheses when invoking a constructor with no arguments (autofixable)
		// https://eslint.style/rules/js/new-parens
		'@stylistic/new-parens': 'warn',

		// Require a newline after each call in a method chain (autofixable)
		// https://eslint.style/rules/js/newline-per-chained-call
		// Note: remain it on developers
		'@stylistic/newline-per-chained-call': 'off',

		// Disallow arrow functions where they could be confused with comparisons (autofixable)
		// https://eslint.style/rules/js/no-confusing-arrow
		'@stylistic/no-confusing-arrow': ['error', {
			allowParens: true,
			onlyOneSimpleParam: true,
		}],

		// Disallow unnecessary parentheses (autofixable)
		// https://eslint.style/rules/js/no-extra-parens
		// Note: let developer decide which format is better
		'@stylistic/no-extra-parens': 'off',

		// Disallow unnecessary semicolons (autofixable)
		// https://eslint.style/rules/js/no-extra-semi
		'@stylistic/no-extra-semi': 'warn',

		// Disallow floating decimals (autofixable but...I just hate a leading zeros)
		// https://eslint.style/rules/js/no-floating-decimal
		'@stylistic/no-floating-decimal': 'off',
		'no-autofix/@stylistic/no-floating-decimal': 'off',

		// Disallow mixes of different operators
		// https://eslint.style/rules/js/no-mixed-operators
		'@stylistic/no-mixed-operators': ['error', {
			// the list of arithmetic groups disallows mixing `%` and `**`
			// with other arithmetic operators.
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['/', '*'],
				['&', '|', '<<', '>>', '>>>'],
				['==', '!=', '===', '!=='],
				['&&', '||'],
			],
			allowSamePrecedence: true,
		}],

		// Disallow mixed spaces and tabs for indentation
		// https://eslint.style/rules/js/no-mixed-spaces-and-tabs
		'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

		// Disallow use of multiple spaces (autofixable)
		// https://eslint.style/rules/js/no-multi-spaces
		// Note: sometimes `fancy formatting` can really increase the readability
		'@stylistic/no-multi-spaces': ['warn', {
			exceptions: {
				Property: true,
				VariableDeclarator: true,
				ImportDeclaration: true,
			},
		}],

		// Disallow multiple empty lines (autofixable)
		// https://eslint.style/rules/js/no-multiple-empty-lines
		// Note: only one newline at the end, and no new lines at the beginning
		'@stylistic/no-multiple-empty-lines': ['warn', {
			max: 2,
			maxBOF: 0,
			maxEOF: 0,
		}],

		// Disallow all tabs
		// https://eslint.style/rules/js/no-tabs
		// Note: tabs are better :)
		'@stylistic/no-tabs': 'off',

		// Disallow trailing whitespace at the end of lines (autofixable)
		// https://eslint.style/rules/js/no-trailing-spaces
		'@stylistic/no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// Disallow whitespace before properties (autofixable)
		// https://eslint.style/rules/js/no-whitespace-before-property
		'@stylistic/no-whitespace-before-property': 'error',

		// Enforce the location of single-line statements (autofixable)
		// https://eslint.style/rules/js/nonblock-statement-body-position
		'@stylistic/nonblock-statement-body-position': ['error', 'beside', {
			overrides: {},
		}],

		// Enforce linebreaks after opening and before closing braces (autofixable)
		// https://eslint.style/rules/js/object-curly-newline
		'@stylistic/object-curly-newline': ['warn', {
			ObjectExpression: { consistent: true },
			ObjectPattern: { consistent: true },
			ImportDeclaration: { consistent: true },
			ExportDeclaration: { consistent: true },
		}],

		// Enforce spacing inside braces (autofixable)
		// https://eslint.style/rules/js/object-curly-spacing
		'@stylistic/object-curly-spacing': ['warn', 'always'],

		// Enforce `same line` or `multiple line` on object properties (autofixable but unsafe cause indent)
		// https://eslint.style/rules/js/object-property-newline
		'@stylistic/object-property-newline': ['off', {
			allowAllPropertiesOnSameLine: true,
		}],

		// Require or disallow newlines around variable declarations (autofixable)
		// https://eslint.style/rules/js/one-var-declaration-per-line
		'@stylistic/one-var-declaration-per-line': ['error', 'always'],

		// Requires operator at the beginning of the line in multiline statements (autofixable)
		// https://eslint.style/rules/js/operator-linebreak
		'@stylistic/operator-linebreak': ['warn', 'before', {
			overrides: {
				'=': 'none',
			},
		}],

		// Require or disallow padding within blocks (autofixable)
		// https://eslint.style/rules/js/padded-blocks
		'@stylistic/padded-blocks': ['warn', {
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		}, {
			allowSingleLineBlocks: true,
		}],

		// Require or disallow padding lines between statements (autofixable)
		// https://eslint.style/rules/js/padding-line-between-statements
		'@stylistic/padding-line-between-statements': 'off',

		// Require quotes around object literal property names (autofixable)
		// https://eslint.style/rules/js/quote-props
		'@stylistic/quote-props': ['warn', 'consistent-as-needed', {
			keywords: false,
			unnecessary: false,
			numbers: true,
		}],

		// Enforce use of either backticks, double, or single quotes (autofixable)
		// https://eslint.style/rules/js/quotes
		'@stylistic/quotes': ['warn', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],

		// Enforce spacing between rest and spread operators and their expressions (autofixable)
		// https://eslint.style/rules/js/rest-spread-spacing
		'@stylistic/rest-spread-spacing': ['warn', 'never'],

		// Require or disallow use of semicolons instead of ASI (autofixable)
		// https://eslint.style/rules/js/semi
		'@stylistic/semi': ['warn', 'always'],

		// Enforce spacing before and after semicolons (autofixable)
		// https://eslint.style/rules/js/semi-spacing
		'@stylistic/semi-spacing': ['warn', {
			before: false,
			after: true,
		}],

		// Enforce location of semicolons (autofixable)
		// https://eslint.style/rules/js/semi-style
		'@stylistic/semi-style': ['warn', 'last'],

		// Enforce spacing before blocks (autofixable)
		// https://eslint.style/rules/js/space-before-blocks
		'@stylistic/space-before-blocks': 'warn',

		// Require or disallow space before function opening parenthesis (autofixable)
		// https://eslint.style/rules/js/space-before-function-paren
		'@stylistic/space-before-function-paren': ['warn', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],

		// Enforce consistent spacing inside parentheses (autofixable)
		// https://eslint.style/rules/js/space-in-parens
		'@stylistic/space-in-parens': ['warn', 'never'],

		// Require spacing around infix operators (autofixable)
		// https://eslint.style/rules/js/space-infix-ops
		'@stylistic/space-infix-ops': 'warn',

		// Enforce spacing before or after unary operators (autofixable)
		// https://eslint.style/rules/js/space-unary-ops
		'@stylistic/space-unary-ops': ['warn', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// Enforce consistent spacing after the `//` or `/*` in a comment (autofixable)
		// https://eslint.style/rules/js/spaced-comment
		'@stylistic/spaced-comment': ['warn', 'always', {
			line: {
				exceptions: ['-', '+', '='],
				markers: ['=', '!', '/'], // slash for TS /// comments
			},
			block: {
				exceptions: ['-', '+', '='],
				markers: ['=', '!', ':', '::'],
				balanced: true,
			},
		}],

		// Enforce spacing around colons of switch statements (autofixable)
		// https://eslint.style/rules/js/switch-colon-spacing
		'@stylistic/switch-colon-spacing': ['warn', {
			after: true,
			before: false,
		}],

		// Require or disallow spacing around embedded expressions of template strings (autofixable)
		// https://eslint.style/rules/js/template-curly-spacing
		'@stylistic/template-curly-spacing': ['warn', 'never'],

		// Require or disallow spacing between template tags and their literals (autofixable)
		// https://eslint.style/rules/js/template-tag-spacing
		'@stylistic/template-tag-spacing': ['warn', 'never'],

		// Require parentheses around immediate `function` invocations (autofixable)
		// https://eslint.style/rules/js/wrap-iife
		'@stylistic/wrap-iife': ['warn', 'inside', {
			functionPrototypeMethods: false,
		}],

		// Require parenthesis around regex literals (autofixable)
		// https://eslint.style/rules/js/wrap-regex
		'@stylistic/wrap-regex': 'off',

		// Require or disallow spacing around the `*` in `yield*` expressions (autofixable)
		// https://eslint.style/rules/js/yield-star-spacing
		'@stylistic/yield-star-spacing': ['warn', 'after'],
	},
});
