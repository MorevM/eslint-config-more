import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		watch: false,
		include: ['__tests__/**/*.js'],
		exclude: ['__tests__/tests-utils.js'],
		watchExclude: ['**/node_modules/**', '**/build/**'],
	},
});
