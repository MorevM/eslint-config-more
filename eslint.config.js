import { combine, defineConfiguration, defineIgnores } from './dist/index.js';

export default combine([
	defineIgnores(),
	defineConfiguration('javascript', {
		overrides: {
			// It's ok here to be explicit
			'sonarjs/no-duplicate-string': 'off',
		},
	}),
	defineConfiguration('node'),
	defineConfiguration('typescript'),
	defineConfiguration('yaml'),
	defineConfiguration('markdown'),
	defineConfiguration('json'),
	defineConfiguration('vitest'),
	// {
	// 	files: ['*.md'],
	// 	rules: {
	// 		// Doesn't respect HTML element indentation
	// 		'markdownlint/md007': 'off',
	// 		'no-autofix/markdownlint/md007': 'off',
	// 	},
	// },
]);
