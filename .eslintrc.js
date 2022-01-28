module.exports = {
	root: true,
	extends: [
		'./configurations/base/base-warn-autofixable.js',
		'./configurations/vue2/vue2-warn-autofixable.js',
		'./configurations/yaml/yaml-warn-autofixable.js',
		'./configurations/json/json-warn-autofixable.js',
		'./configurations/jest/jest-warn-autofixable.js',
	],
};
