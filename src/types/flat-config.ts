import type { Linter } from 'eslint';

export type FlatConfig = Linter.Config;

export type RuleValue = Linter.RuleSeverity
	| [Linter.RuleSeverity, any]
	| [Linter.RuleSeverity, ...unknown[]]
	// Actually `undefined` is not valid,
	// but presented in some configuration types ¯\_(ツ)_/¯
	| undefined;
