module.exports = {
	plugins: ['regexp'],
	rules: {
		// POSSIBLE ERRORS

		// Disallow elements that contradict assertions
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
		'regexp/no-contradiction-with-assertion': 'error',

		// Disallow control characters
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
		'regexp/no-control-character': 'error',

		// Disallow duplicate disjunctions
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
		'regexp/no-dupe-disjunctions': ['warn', {
			report: 'trivial',
			reportExponentialBacktracking: 'potential',
			reportUnreachable: 'certain',
		}],

		// Disallow alternatives without elements
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
		'regexp/no-empty-alternative': 'error',

		// Disallow capturing group that captures empty
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
		'regexp/no-empty-capturing-group': 'error',

		// Disallow character classes that match no characters
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
		'no-empty-character-class': 'off',
		'regexp/no-empty-character-class': 'error',

		// Disallow empty group
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
		'regexp/no-empty-group': 'error',

		// Disallow empty lookahead assertion or empty lookbehind assertion
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
		'regexp/no-empty-lookarounds-assertion': 'error',

		// Disallow escape backspace (`[\b]`)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
		'regexp/no-escape-backspace': 'error',

		// Disallow invalid regular expression strings in `RegExp` constructors
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
		// TODO: Maybe it also needed to turn off the basic `no-invalid-regexp` rule provided by ESLint
		'regexp/no-invalid-regexp': 'error',

		// Disallow lazy quantifiers at the end of an expression
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
		'regexp/no-lazy-ends': ['error', {
			ignorePartial: true,
		}],

		// Disallow capturing groups that don't behave as one would expect
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
		'regexp/no-misleading-capturing-group': ['error', {
			reportBacktrackingEnds: true,
		}],

		// Disallow multi-code-point characters in character classes and quantifiers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
		'+regexp/no-misleading-unicode-character': ['error', {
			fixable: true,
		}],

		// Disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
		'+regexp/no-missing-g-flag': ['error', {
			strictTypes: true,
		}],

		// Disallow optional assertions
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
		'regexp/no-optional-assertion': 'error',

		// Disallow backreferences that reference a group that might not be matched
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
		'regexp/no-potentially-useless-backreference': 'error',

		// Disallow exponential and polynomial backtracking (autofixable but too strict)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
		'+regexp/no-super-linear-backtracking': ['off', {
			report: 'certain',
		}],

		// Disallow quantifiers that cause quadratic moves
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
		// Note: too much panic
		'regexp/no-super-linear-move': ['off', {
			report: 'certain',
			ignoreSticky: true,
			ignorePartial: true,
		}],

		// Disallow assertions that are known to always accept (or reject)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
		'regexp/no-useless-assertions': 'error',

		// Disallow useless backreferences in regular expressions
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
		'no-useless-backreference': 'off',
		'regexp/no-useless-backreference': 'error',

		// Disallow useless `$` replacements in replacement string
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
		'regexp/no-useless-dollar-replacements': 'error',

		// Disallow not strictly valid regular expressions (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
		// Note: Conflicts with time-tested `unicorn/better-regex` rule
		'!regexp/strict': 'off',

		// BEST PRACTICES

		// Disallow confusing quantifiers
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
		'regexp/confusing-quantifier': 'error',

		// Enforce consistent escaping of control characters (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
		'+regexp/control-character-escape': 'error',

		// Enforce use of escapes on negation (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
		'+regexp/negation': 'error',

		// Disallow duplicate characters in the RegExp character class (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
		'+regexp/no-dupe-characters-character-class': 'error',

		// Disallow unnecessary nested lookaround assertions (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
		'+regexp/no-extra-lookaround-assertions': 'error',

		// Disallow invisible raw character (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
		'+regexp/no-invisible-character': 'error',

		// Disallow legacy RegExp features
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
		'regexp/no-legacy-features': 'error',

		// Disallow non-standard flags
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
		'regexp/no-non-standard-flag': 'error',

		// Disallow obscure character ranges
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
		// Note: Fires on a range containing cyrillic characters
		// Russia gogo
		'regexp/no-obscure-range': ['off', {
			allowed: 'alphanumeric',
		}],

		// Disallow octal escape sequence
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
		'regexp/no-octal': 'error',

		// Disallow standalone backslashes (`\`)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
		// But what if it's needed to pick `\` itself?
		'regexp/no-standalone-backslash': 'warn',

		// Disallow trivially nested assertions (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
		'+regexp/no-trivially-nested-assertion': 'error',

		// Disallow nested quantifiers that can be rewritten as one quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
		'+regexp/no-trivially-nested-quantifier': 'error',

		// Disallow unused capturing group (autofixable but may be confusing)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
		'!regexp/no-unused-capturing-group': ['warn', {
			fixable: false,
		}],

		// Disallow character class with one character (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
		'+regexp/no-useless-character-class': 'error',

		// Disallow unnecessary regex flags (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
		'+regexp/no-useless-flag': ['warn', {
			ignore: [], // An array of "i", "m", "s", "g" and "y".
			strictTypes: true,
		}], // just give it a chance for a while

		// Disallow unnecessarily non-greedy quantifiers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
		'+regexp/no-useless-lazy': 'error',

		// Disallow quantifiers that can be removed (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
		'+regexp/no-useless-quantifier': 'error',

		// Disallow unnecessary range of characters by using a hyphen (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
		'+regexp/no-useless-range': 'error',

		// Disallow unnecessary `{n,m}` quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
		'+regexp/no-useless-two-nums-quantifier': 'error',

		// Disallow quantifiers with a maximum of zero
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
		'regexp/no-zero-quantifier': 'error',

		// Disallow the alternatives of lookarounds that end with a non-constant quantifier
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
		'regexp/optimal-lookaround-quantifier': 'error',

		// Require optimal quantifiers for concatenated quantifiers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
		'+regexp/optimal-quantifier-concatenation': ['warn', {
			capturingGroups: 'report',
		}],

		// Enforces escape of replacement `$` character (`$$`)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
		'regexp/prefer-escape-replacement-dollar-char': 'error',

		// Prefer predefined assertion over equivalent lookarounds (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
		'+regexp/prefer-predefined-assertion': 'error',

		// Enforce using quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
		'+regexp/prefer-quantifier': 'error',

		// Enforce using character class range (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
		'+regexp/prefer-range': ['warn', {
			target: 'alphanumeric',
		}],

		// Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
		// It's not always better in terms of readability and understanding
		'regexp/prefer-regexp-exec': 'off',

		// Enforce that RegExp#test is used instead of String#match and RegExp#exec (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
		// It's not always better in terms of readability and understanding
		'regexp/prefer-regexp-test': 'off',

		// Enforce the use of the `u` flag (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
		'!regexp/require-unicode-regexp': 'off',

		// Sort alternatives if order doesn't matter (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
		'+regexp/sort-alternatives': 'warn',

		// Use the `i` flag if it simplifies the pattern (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
		'+regexp/use-ignore-case': 'warn',

		// STYLISTIC ISSUES

		// Enforce single grapheme in string literal
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
		'regexp/grapheme-string-literal': 'off',

		// Enforce consistent usage of hexadecimal escape (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
		'+regexp/hexadecimal-escape': ['error', 'never'],

		// Enforce into your favorite case (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
		'+regexp/letter-case': ['warn', {
			caseInsensitive: 'lowercase', // or "uppercase" or "ignore"
			unicodeEscape: 'lowercase',
			hexadecimalEscape: 'lowercase',
			controlEscape: 'uppercase',
		}],

		// Enforce match any character style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
		'+regexp/match-any': ['error', {
			allows: ['dotAll'],
		}],

		// Disallow unnecessary escape characters in RegExp (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
		'no-useless-escape': 'off',
		'+regexp/no-useless-escape': 'warn',

		// Disallow unnecessary non-capturing group (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
		'+regexp/no-useless-non-capturing-group': ['error', {
			allowTop: 'partial', // or "always" or "never"
		}],

		// Enforce using character class (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
		'+regexp/prefer-character-class': ['error', {
			minAlternatives: 2,
		}],

		// Enforce using `\d` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
		'+regexp/prefer-d': ['warn', {
			insideCharacterClass: 'ignore', // developer knows better
		}],

		// Prefer lookarounds over capturing group that do not replace (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
		// Lookarounds are much more complex to understand than substitutions
		'!regexp/prefer-lookaround': 'off',

		// Enforce using named backreferences (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
		'+regexp/prefer-named-backreference': 'error',

		// Enforce using named capture groups
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
		// Note: actually it's rarely more readable
		'regexp/prefer-named-capture-group': 'off',

		// Enforce using named replacement (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
		'+regexp/prefer-named-replacement': ['error', {
			strictTypes: true,
		}],

		// Enforce using `+` quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
		'+regexp/prefer-plus-quantifier': 'error',

		// Enforce using `?` quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
		'+regexp/prefer-question-quantifier': 'error',

		// Enforce using result array groups (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
		'+regexp/prefer-result-array-groups': ['error', {
			strictTypes: true,
		}],

		// Enforce using `*` quantifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
		'+regexp/prefer-star-quantifier': 'error',

		// Enforce use of unicode codepoint escapes (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
		'+regexp/prefer-unicode-codepoint-escapes': 'off',

		// Enforce using `\w` (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
		'+regexp/prefer-w': 'warn',

		// Enforces elements order in character class (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
		'+regexp/sort-character-class-elements': 'warn',

		// Require regex flags to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
		'+regexp/sort-flags': 'warn',

		// Enforce consistent usage of unicode escape or unicode codepoint escape (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
		'regexp/unicode-escape': 'off',
	},
};
