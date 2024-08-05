import { defineConfiguration } from '@morev/eslint-config';

export default [
	defineConfiguration('javascript'),
	// {
	// 	files: ['*.md'],
	// 	rules: {
	// 		// Doesn't respect HTML element indentation
	// 		'markdownlint/md007': 'off',
	// 		'no-autofix/markdownlint/md007': 'off',
	// 	},
	// },
].flat(Infinity);
