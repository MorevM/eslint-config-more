import { GLOB_YAML } from '#globs';
import { parserYaml } from '#parsers';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import yaml from './rules/yaml';

import type { YamlConfigurationOptions } from '#types';

export default function configurationYaml(options: Partial<YamlConfigurationOptions> = {}) {
	const {
		files = [GLOB_YAML],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/yaml/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/yaml/core',
			languageOptions: {
				parser: parserYaml,
			},
			files,
			ignores,
			...mergeParts(
				yaml,
			),
		}),
		defineConfigurationPart({
			name: 'morev/yaml/disables',
			files,
			rules: {
				'@stylistic/spaced-comment': 'off',
				'@stylistic/no-multiple-empty-lines': 'off',
				'@stylistic/no-multi-spaces': 'off',
				'@stylistic/max-len': 'off',
			},
		}),
		defineConfigurationPart({
			name: 'morev/yaml/exceptions',
			files: ['**/dependabot.yml', '**/.gitlab-ci.yml', '**/.yarnrc.yml'],
			rules: {
				'yml/file-extension': 'off',
			},
		}),
		defineConfigurationPart({
			name: 'morev/yaml/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
