import { defineConfiguration } from './dist/index.js';

export default [
	defineConfiguration('javascript'),
	defineConfiguration('node'),
	defineConfiguration('typescript'),
	// {
	// 	files: ['*.md'],
	// 	rules: {
	// 		// Doesn't respect HTML element indentation
	// 		'markdownlint/md007': 'off',
	// 		'no-autofix/markdownlint/md007': 'off',
	// 	},
	// },
].flat(Infinity);
