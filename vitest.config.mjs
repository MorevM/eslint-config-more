import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		watch: false,
		watchExclude: ['**/node_modules/**', '**/build/**'],
	},
});
