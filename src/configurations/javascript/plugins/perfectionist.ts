import { pluginPerfectionist } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		// Enforce sorted array values if the includes method is immediately called after the array is created (autofixable)
		// https://perfectionist.dev/rules/sort-array-includes
		'perfectionist/sort-array-includes': 'off',

		// Enforce sorted class members (autofixable)
		// https://perfectionist.dev/rules/sort-classes
		'perfectionist/sort-classes': 'off',

		// Enforce sorted decorators. (autofixable)
		// https://perfectionist.dev/rules/sort-decorators
		'perfectionist/sort-decorators': 'off',

		// Enforce sorted TypeScript enum members (autofixable)
		// https://perfectionist.dev/rules/sort-enums
		'perfectionist/sort-enums': 'off',

		// Enforce sorted exports (autofixable)
		// https://perfectionist.dev/rules/sort-exports
		'perfectionist/sort-exports': ['warn', {
			type: 'natural',
			order: 'asc',
			ignoreCase: true,
			specialCharacters: 'keep',
			groupKind: 'values-first',
			partitionByComment: false,
			partitionByNewLine: true,
		}],

		// Enforce sorted imports (autofixable)
		// https://perfectionist.dev/rules/sort-imports
		'perfectionist/sort-imports': ['warn', {
			type: 'natural',
			order: 'asc',
			ignoreCase: true,
			specialCharacters: 'keep',
			internalPattern: [
				'^~.*',
				'^@/.*',
				'^#.*',
			],
			sortSideEffects: false,
			newlinesBetween: 'ignore',
			partitionByComment: false,
			partitionByNewLine: false,
			groups: [
				['vitest', 'jest'],
				['vite'],
				['vue', 'react'],
				['builtin'],
				['external'],
				['internal'],
				['parent'],
				['sibling'],
				['index'],
				['object'],
				['external-type'],
				['builtin-type'],
				['internal-type'],
				['parent-type'],
				['sibling-type'],
				['index-type'],
				['style'],
				['side-effect'],
				['side-effect-style'],
				['unknown'],
			],
			customGroups: {
				value: {
					vitest: ['^vitest(\/.*)?$'],
					jest: ['^jest(/.*)?$'],
					vite: ['^vite(\/.*)?$'],
					vue: ['^vue(\/.*)?$'],
					react: ['^react(-.*)?$'],
				},
				type: {},
			},
			environment: 'node',
		}],

		// Enforce sorted TypeScript interface properties (autofixable)
		// https://perfectionist.dev/rules/sort-interfaces
		'perfectionist/sort-interfaces': 'off',

		// Enforce sorted intersection types in TypeScript (autofixable)
		// https://perfectionist.dev/rules/sort-intersection-types
		'perfectionist/sort-intersection-types': 'off',

		// Enforce sorted JSX props within JSX elements (autofixable)
		// https://perfectionist.dev/rules/sort-jsx-props
		'perfectionist/sort-jsx-props': 'off',

		// Enforce sorted elements within JavaScript Map object (autofixable)
		// https://perfectionist.dev/rules/sort-maps
		'perfectionist/sort-maps': 'off',

		// Enforce sorted named exports (autofixable)
		// https://perfectionist.dev/rules/sort-named-exports
		'perfectionist/sort-named-exports': ['warn', {
			type: 'natural',
			order: 'asc',
			ignoreCase: true,
			specialCharacters: 'keep',
			groupKind: 'values-first',
			partitionByComment: false,
			partitionByNewLine: true,
		}],

		// Enforce sorted named imports (autofixable)
		// https://perfectionist.dev/rules/sort-named-imports
		'perfectionist/sort-named-imports': ['warn', {
			type: 'natural',
			order: 'asc',
			ignoreCase: true,
			specialCharacters: 'keep',
			ignoreAlias: false,
			groupKind: 'values-first',
			partitionByComment: false,
			partitionByNewLine: true,
		}],

		// Enforce sorted object types (autofixable)
		// https://perfectionist.dev/rules/sort-object-types
		'perfectionist/sort-object-types': 'off',

		// Enforce sorted objects (autofixable)
		// https://perfectionist.dev/rules/sort-objects
		'perfectionist/sort-objects': 'off',

		// Enforce sorted set values (autofixable)
		// https://perfectionist.dev/rules/sort-sets
		'perfectionist/sort-sets': 'off',

		// Enforce sorted switch case statements (autofixable)
		// https://perfectionist.dev/rules/sort-switch-case
		'perfectionist/sort-switch-case': 'off',

		// Enforce sorted TypeScript union types (autofixable)
		// https://perfectionist.dev/rules/sort-union-types
		'perfectionist/sort-union-types': 'off',

		// Enforce sorted variable declarations within a scope (autofixable)
		// https://perfectionist.dev/rules/sort-variable-declarations
		'perfectionist/sort-variable-declarations': 'off',
	},
});
