import { parserJson } from '#parsers';

import type { JsonConfigurationOptions } from '#types';
import { GLOB_JS_CONFIG, GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_PACKAGE_JSON, GLOB_TS_CONFIG } from '#globs';
import { mergeParts } from '#utils';

import json from './rules/json';
import extension from './rules/extension';
import jsonc from './rules/jsonc';
import packageJson from './rules/package-json';

export default function configurationJson(options: Partial<JsonConfigurationOptions> = {}) {
	const {
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/json',
			files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
			languageOptions: {
				parser: parserJson,
				sourceType: 'module',
				ecmaVersion: 'latest',
				parserOptions: {},
			},
			ignores,
			...mergeParts(
				json,
				extension,
				{
					rules: overrides,
				},
			),
		},
		{
			name: 'morev/jsonc',
			files: [GLOB_JSON5, GLOB_JSONC, GLOB_JS_CONFIG, GLOB_TS_CONFIG],
			languageOptions: {
				parser: parserJson,
				sourceType: 'module',
				ecmaVersion: 'latest',
				parserOptions: {},
			},
			ignores,
			...mergeParts(
				jsonc,
			),
		},
		{
			name: 'morev/package-json',
			files: [GLOB_PACKAGE_JSON],
			languageOptions: {
				parser: parserJson,
				sourceType: 'module',
				ecmaVersion: 'latest',
				parserOptions: {},
			},
			ignores,
			...mergeParts(
				packageJson,
			),
		},
	];
}
