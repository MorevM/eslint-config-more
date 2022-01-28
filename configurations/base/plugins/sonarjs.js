module.exports = {
	plugins: ['sonarjs'],
	rules: {
		//===============
		// Bug Detection
		//===============

		// All branches in a conditional structure should not have exactly the same implementation
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md
		'sonarjs/no-all-duplicated-branches': 'error',

		// Collection elements should not be replaced unconditionally
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md
		'sonarjs/no-element-overwrite': 'error',

		// Empty collections should not be accessed or iterated
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md
		'sonarjs/no-empty-collection': 'error',

		// Function calls should not pass extra arguments
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md
		'sonarjs/no-extra-arguments': 'error',

		// Related "if/else if" statements should not have the same condition
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md
		'sonarjs/no-identical-conditions': 'error',

		// Identical expressions should not be used on both sides of a binary operator
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md
		'sonarjs/no-identical-expressions': 'error',

		// Return values from functions without side effects should not be ignored
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md
		'sonarjs/no-ignored-return': 'error',

		// Loops with at most one iteration should be refactored
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md
		'sonarjs/no-one-iteration-loop': 'error',

		// The output of functions that don't return anything should not be used
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-use-of-empty-return-value.md
		'sonarjs/no-use-of-empty-return-value': 'error',

		// Non-existent operators '=+', '=-' and '=!' should not be used
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md
		'sonarjs/non-existent-operator': 'error',

		//======================
		// Code Smell Detection
		//======================

		// Cognitive Complexity of functions should not be too high
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md
		// Note: duplicate of standard eslint `complexity` rule
		'sonarjs/cognitive-complexity': 'off',

		// "if ... else if" constructs should end with "else" clauses
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md
		// Reason for `off`: conflicts with `no-else-return`
		'sonarjs/elseif-without-else': 'off',

		// "switch" statements should not have too many "case" clauses
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md
		// Note: should have as much as it takes
		'sonarjs/max-switch-cases': 'off',

		// Collapsible "if" statements should be merged
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md
		// Developer knows better
		'sonarjs/no-collapsible-if': 'off',

		// Collection sizes and array length comparisons should make sense
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md
		'sonarjs/no-collection-size-mischeck': 'error',

		// String literals should not be duplicated
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md
		'sonarjs/no-duplicate-string': ['warn', 5],

		// Two branches in a conditional structure should not have exactly the same implementation
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md
		'sonarjs/no-duplicated-branches': 'error',

		// Boolean expressions should not be gratuitous
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md
		'sonarjs/no-gratuitous-expressions': 'error',

		// Functions should not have identical implementations (autofixable but may be confusing)
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md
		'!sonarjs/no-identical-functions': 'warn',

		// Boolean checks should not be inverted (autofixable but may be confusing to autofix)
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md
		'sonarjs/no-inverted-boolean-check': 'warn',

		// "switch" statements should not be nested
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md
		'sonarjs/no-nested-switch': 'error',

		// Template literals should not be nested
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md
		'sonarjs/no-nested-template-literals': 'error',

		// Boolean literals should not be redundant
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md
		'sonarjs/no-redundant-boolean': 'error',

		// Jump statements should not be redundant
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md
		'sonarjs/no-redundant-jump': 'error',

		// Conditionals should start on new lines
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md
		'sonarjs/no-same-line-conditional': 'error',

		// "switch" statements should have at least 3 "case" clauses
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md
		// Note: some code written to extend it with new options in future
		'sonarjs/no-small-switch': 'off',

		// Collection and array contents should be used
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md
		'sonarjs/no-unused-collection': 'error',

		// "catch" clauses should do more than rethrow
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md
		// Note: seems duplicate of standard eslint `no-useless-catch` rule
		'sonarjs/no-useless-catch': 'off',

		// Local variables should not be declared and then immediately returned or thrown
		// (autofixable but may be confusing to autofix)
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md
		'!sonarjs/prefer-immediate-return': 'warn',

		// Object literal syntax should be used
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md
		'sonarjs/prefer-object-literal': 'error',

		// Return of boolean expressions should not be wrapped into an "if-then-else" statement
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md
		'sonarjs/prefer-single-boolean-return': 'error',

		// A "while" loop should be used instead of a "for" loop (autofixable)
		// https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md
		'+sonarjs/prefer-while': 'error',
	},
};
