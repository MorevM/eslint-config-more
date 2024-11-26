export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)';
export const GLOB_JS = '**/*.js';
export const GLOB_JSX = '**/*.?([cm])js?(x)';
export const GLOB_CJS = '**/*.cjs';
export const GLOB_MJS = '**/*.mjs';
export const GLOB_ANY_JS = '**/*.?([cm])js?(x)';
export const GLOB_ANY_TS = '**/*.?([cm])ts?(x)';

export const GLOB_SRC = `**/*.${GLOB_SRC_EXT}`;
export const GLOB_ANY_CONTAINING_JS = `**/*.{${GLOB_SRC_EXT},vue,astro}`;

export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_TSX = '**/*.?([cm])ts?(x)';

export const GLOB_ASTRO = '**/*.astro';

export const GLOB_VUE = '**/*.vue';

export const GLOB_YAML = '**/*.y?(a)ml';

export const GLOB_HTML = '**/*.htm?(l)';

export const GLOB_MARKDOWN = '**/*.md';

export const GLOB_JSON = '**/*.json';
export const GLOB_JSON5 = '**/*.json5';
export const GLOB_JSONC = '**/*.jsonc';
export const GLOB_JS_CONFIG = '**/jsconfig.json';
export const GLOB_TS_CONFIG = '**/tsconfig.json';
export const GLOB_VSCODE_DIR = '**/.vscode/*.json';
export const GLOB_PACKAGE_JSON = '**/package.json';
export const GLOB_ANY_JSON = ['**/*.json?([5c])'];

export const GLOB_TESTS = [
	`**/__tests__/**/*.${GLOB_SRC_EXT}`,
	`**/*.spec.${GLOB_SRC_EXT}`,
	`**/*.test.${GLOB_SRC_EXT}`,
	`**/*.bench.${GLOB_SRC_EXT}`,
	`**/*.benchmark.${GLOB_SRC_EXT}`,
];
export const GLOB_CYPRESS = [
	'**/cypress/integration/**/*.*', // Cypress < 10 defaults
	'**/cypress/e2e/**/*.*', // Cypress >= 10 defaults
];

export const GLOB_EXCLUDE = [
	// OS files
	'.DS_Store',
	'Thumbs.db',
	// Dependencies
	'**/node_modules',
	// Artifacts
	'**/dist',
	'**/build',
	'**/output',
	// Lock files
	'**/package-lock.json',
	'**/yarn.lock',
	'**/pnpm-lock.yaml',
	'**/bun.lockb',
	// Log files
	'**/*.log',
	'**/npm-debug.log*',
	'**/yarn-debug.log*',
	'**/yarn-error.log*',
	// Test-related
	'**/coverage',
	// Temp files && meta artifacts
	'**/temp',
	'**/.temp',
	'**/tmp',
	'**/.tmp',
	'**/.history',
	'**/.vitepress/cache',
	'**/.nuxt',
	'**/.next',
	'**/.svelte-kit',
	'**/.vercel',
	'**/.changeset',
	'**/.idea',
	'**/.cache',
	'**/.output',
	'**/.vite-inspect',
	'**/.yarn',
	'**/.tsup',
	'**/vite.config.*.timestamp-*',

	'**/CHANGELOG*.md',
	'**/*.min.*',
	'**/LICENSE*',
	'**/__snapshots__',
	'**/auto-import?(s).d.ts',
	'**/components.d.ts',
];
