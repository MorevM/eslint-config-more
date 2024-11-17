import { parserJson } from '#parsers';

import type { JsonConfigurationOptions } from '#types';
import { GLOB_ANY_JSON, GLOB_JS_CONFIG, GLOB_JSON5, GLOB_JSONC, GLOB_PACKAGE_JSON, GLOB_TS_CONFIG, GLOB_VSCODE_DIR } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';

import { universalRules } from '~configurations/universal-rules';

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
		defineConfigurationPart({
			name: 'morev/json/universal',
			files: [GLOB_ANY_JSON],
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/json/core',
			files: [GLOB_ANY_JSON],
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
		}),
		defineConfigurationPart({
			name: 'morev/json/jsonc',
			files: [GLOB_JSON5, GLOB_JSONC, GLOB_JS_CONFIG, GLOB_TS_CONFIG, GLOB_VSCODE_DIR],
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
		}),
		defineConfigurationPart({
			name: 'morev/json/package-json',
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
		}),
	];
}
