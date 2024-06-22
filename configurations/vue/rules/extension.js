const { extensionFromBase } = require('../../../utils/extension-from-base.js');

module.exports = {
	plugins: ['vue', 'no-autofix'],
	rules: {
		// Enforce linebreaks after opening and before closing array brackets in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/array-bracket-newline
		'vue/array-bracket-newline': extensionFromBase('array-bracket-newline'),

		// Enforce consistent spacing inside array brackets in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/array-bracket-spacing.html
		'vue/array-bracket-spacing': extensionFromBase('array-bracket-spacing'),

		// Enforce line breaks after each array element in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/array-element-newline.html
		'vue/array-element-newline': extensionFromBase('array-element-newline'),

		// Enforce consistent spacing before and after the arrow in arrow functions in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/arrow-spacing.html
		'vue/arrow-spacing': extensionFromBase('arrow-spacing'),

		// Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/block-spacing.html
		'vue/block-spacing': extensionFromBase('block-spacing'),

		// Enforce consistent brace style for blocks in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/brace-style.html
		'vue/brace-style': extensionFromBase('brace-style'),

		// Enforce camelcase naming convention in `<template>`
		// https://eslint.vuejs.org/rules/camelcase.html
		'vue/camelcase': extensionFromBase('camelcase'),

		// Require or disallow trailing commas in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/comma-dangle.html
		'vue/comma-dangle': extensionFromBase('comma-dangle'),

		// Enforce consistent spacing before and after commas in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/comma-spacing.html
		'vue/comma-spacing': extensionFromBase('comma-spacing'),

		// Enforce consistent comma style in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/comma-style.html
		'vue/comma-style': extensionFromBase('comma-style'),

		// Enforce consistent newlines before and after dots in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/dot-location.html
		'vue/dot-location': extensionFromBase('dot-location'),

		// Enforce dot notation whenever possible in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/dot-notation.html
		'vue/dot-notation': extensionFromBase('dot-notation'),

		// Require the use of `===` and `!==` in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/eqeqeq.html
		'vue/eqeqeq': 'off',
		'no-autofix/vue/eqeqeq': extensionFromBase('eqeqeq'),

		// Require or disallow spacing between function identifiers and their invocations in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/func-call-spacing.html
		'vue/func-call-spacing': extensionFromBase('func-call-spacing'),

		// Enforce consistent spacing between keys and values in object literal properties in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/key-spacing.html
		'vue/key-spacing': extensionFromBase('key-spacing'),

		// Enforce consistent spacing before and after keywords in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/keyword-spacing.html
		'vue/keyword-spacing': extensionFromBase('keyword-spacing'),

		// Enforce a maximum line length in `.vue` files
		// https://eslint.vuejs.org/rules/max-len.html
		'@stylistic/js/max-len': 'off',
		'vue/max-len': extensionFromBase('max-len'),

		// Enforce newlines between operands of ternary expressions in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/multiline-ternary.html
		'vue/multiline-ternary': extensionFromBase('multiline-ternary'),

		// Disallow the use of `console` in `<template>`
		// https://eslint.vuejs.org/rules/no-console.html
		'vue/no-console': extensionFromBase('no-console'),

		// Disallow constant expressions in conditions in `<template>`
		// https://eslint.vuejs.org/rules/no-constant-condition.html
		'vue/no-constant-condition': extensionFromBase('no-constant-condition'),

		// Disallow empty destructuring patterns in `<template>`
		// https://eslint.vuejs.org/rules/no-empty-pattern.html
		'vue/no-empty-pattern': extensionFromBase('no-empty-pattern'),

		// Disallow unnecessary parentheses in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/no-extra-parens.html
		'vue/no-extra-parens': extensionFromBase('no-extra-parens'),

		// Disallow irregular whitespace in `.vue` files
		// https://eslint.vuejs.org/rules/no-irregular-whitespace.html
		'no-irregular-whitespace': 'off',
		'vue/no-irregular-whitespace': extensionFromBase('no-irregular-whitespace'),

		// Disallow literal numbers that lose precision in `<template>`
		// https://eslint.vuejs.org/rules/no-loss-of-precision.html
		'vue/no-loss-of-precision': extensionFromBase('no-loss-of-precision'),

		// Disallow specified syntax in `<template>`
		// https://eslint.vuejs.org/rules/no-restricted-syntax.html
		'vue/no-restricted-syntax': extensionFromBase('no-restricted-syntax'),

		// Disallow sparse arrays in `<template>`
		// https://eslint.vuejs.org/rules/no-sparse-arrays.html
		'vue/no-sparse-arrays': extensionFromBase('no-sparse-arrays'),

		// Disallow unnecessary concatenation of literals or template literals in `<template>`
		// https://eslint.vuejs.org/rules/no-useless-concat.html
		'vue/no-useless-concat': extensionFromBase('no-useless-concat'),

		// Enforce consistent line breaks after opening and before closing braces in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/object-curly-newline.html
		'vue/object-curly-newline': extensionFromBase('object-curly-newline'),

		// Enforce consistent spacing inside braces in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/object-curly-spacing.html
		'vue/object-curly-spacing': extensionFromBase('object-curly-spacing'),

		// Enforce placing object properties on separate lines in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/object-property-newline.html
		'vue/object-property-newline': extensionFromBase('object-property-newline'),

		// Require or disallow method and property shorthand syntax for object literals in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/object-shorthand.html
		'vue/object-shorthand': extensionFromBase('object-shorthand'),

		// Enforce consistent linebreak style for operators in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/operator-linebreak.html
		'vue/operator-linebreak': extensionFromBase('operator-linebreak'),

		// Require template literals instead of string concatenation in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/prefer-template.html
		// It seems https://github.com/JuniorTour/vue-template-babel-compiler is not stable, turned off for a while
		// TODO: [2025-05-11] Try again with vue-template-babel-compiler
		// 'vue/prefer-template': extensionFromBase('prefer-template'),
		'vue/prefer-template': 'off',

		// Require quotes around object literal property names in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/quote-props.html
		'vue/quote-props': extensionFromBase('quote-props'),

		// Enforce consistent spacing inside parentheses in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/space-in-parens.html
		'vue/space-in-parens': extensionFromBase('space-in-parens'),

		// Require spacing around infix operators in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/space-infix-ops.html
		'vue/space-infix-ops': extensionFromBase('space-infix-ops'),

		// Enforce consistent spacing before or after unary operators in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/space-unary-ops.html
		'vue/space-unary-ops': extensionFromBase('space-unary-ops'),

		// Require or disallow spacing around embedded expressions of template strings in `<template>` (autofixable)
		// https://eslint.vuejs.org/rules/template-curly-spacing.html
		'vue/template-curly-spacing': extensionFromBase('template-curly-spacing'),
	},
};
