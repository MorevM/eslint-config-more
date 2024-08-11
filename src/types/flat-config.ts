import type { ElementOf } from '@morev/utils';
import type { Config } from 'typescript-eslint';

export type FlatConfig = ElementOf<Awaited<Config>>;
