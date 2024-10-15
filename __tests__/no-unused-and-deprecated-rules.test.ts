import { combine, defineConfiguration } from '../src';
import RulesFinder from './rules-finder';

const ruleFinder = new RulesFinder(
	combine(
		defineConfiguration('javascript'),
		defineConfiguration('typescript'),
		defineConfiguration('browser'),
		defineConfiguration('node'),
		defineConfiguration('cypress'),
		defineConfiguration('astro'),
		defineConfiguration('html'),
		defineConfiguration('jest'),
		defineConfiguration('json'),
		defineConfiguration('jsx'),
		defineConfiguration('markdown'),
		defineConfiguration('node'),
		defineConfiguration('vitest'),
		defineConfiguration('vue', { version: 2 }),
		defineConfiguration('vue', { version: 3 }),
		defineConfiguration('yaml'),
	),
);

describe('Check unused and deprecated rules', () => {
	beforeAll(() => {
		ruleFinder.setKnownUnusedRules([
			// These rules covered with single `jest/padding-around-all` rule
			'jest/padding-around-after-all-blocks',
			'jest/padding-around-after-each-blocks',
			'jest/padding-around-before-all-blocks',
			'jest/padding-around-before-each-blocks',
			'jest/padding-around-expect-groups',
			'jest/padding-around-describe-blocks',
			'jest/padding-around-test-blocks',
			// It seems https://github.com/JuniorTour/vue-template-babel-compiler not stable,
			// turned off for a while
			'vue/prefer-template',
			// Covered with `n/prefer-node-protocol`
			'unicorn/prefer-node-protocol',
		]);
	});

	it('Has no deprecated rules', async () => {
		expect(ruleFinder.readableDeprecatedRules).toBe('');
	});

	it('Has no unconfigured rules', async () => {
		expect(ruleFinder.readableUnconfiguredRules).toBe('');
	});
});
