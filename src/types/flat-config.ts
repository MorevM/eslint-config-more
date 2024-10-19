import type { ElementOf } from '@morev/utils';
import type { Config } from 'typescript-eslint';

type RuleLevel = 0 | 1 | 2 | 'off' | 'warn' | 'error';

export type FlatConfig = ElementOf<Awaited<Config>>;

// Actually `undefined` is not valid, but presented in some configuration types ¯\_(ツ)_/¯
export type RuleValue = RuleLevel | [RuleLevel, any] | [RuleLevel, ...unknown[]] | undefined;
