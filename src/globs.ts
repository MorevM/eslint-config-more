export const GLOB_JS = '**/*.js';
export const GLOB_CJS = '**/*.cjs';
export const GLOB_MJS = '**/*.mjs';
export const GLOB_ANY_JS = '**/*.?([cm])js';

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])ts?(x)'

export const GLOB_ASTRO = '**/*.astro'

export const GLOB_VUE = '**/*.vue'

export const GLOB_EXCLUDE = [
  '**/node_modules',
	//
  '**/dist',
  '**/build',
  '**/output',
	//
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
	//
  '**/coverage',
	//
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
  '**/vite.config.*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]
