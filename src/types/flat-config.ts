import type { Linter } from 'eslint';
import type { ElementOf } from '@morev/utils';
import type { Config } from 'typescript-eslint';

export type FlatConfig = ElementOf<Awaited<Config>>;

export type RuleValue = Linter.RuleSeverity
	| [Linter.RuleSeverity, any]
	| [Linter.RuleSeverity, ...unknown[]]
	// Actually `undefined` is not valid,
	// but presented in some configuration types ¯\_(ツ)_/¯
	| undefined;
