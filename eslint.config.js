import { combine, defineConfiguration, defineIgnores } from './dist/index.js';

export default combine([
	defineIgnores({
		extraIgnoredGlobs: ['bin'],
	}),
	defineConfiguration('javascript', {
		overrides: {
			// It's ok here to be explicit
			'sonarjs/no-duplicate-string': 'off',
		},
	}),
	defineConfiguration('browser'),
	defineConfiguration('node'),
	defineConfiguration('jsx'),
	defineConfiguration('json'),
	defineConfiguration('markdown', {
		overrides: {
			// Doesn't respect HTML element indentation
			// TODO: Maybe so automation to disable only the base rule
			'markdownlint/md007': 'off',
			'no-autofix/markdownlint/md007': 'off',
			'markdownlint/md036': 'off',
			// Doesn't take into account blockquotes with headlines
			'markdownlint/md028': 'off',
		},
	}),
	defineConfiguration('yaml'),
	defineConfiguration('html'),
	defineConfiguration('vitest'),
	defineConfiguration('typescript'),
	defineConfiguration('vue'),
	defineConfiguration('astro'),
	{
		files: ['**/cli/**'],
		rules: {
			// Used intentionally for a better visual output
			'n/no-process-exit': 'off',
			// It's ok in CLIs
			'no-await-in-loop': 'off',
		},
	},
]);
