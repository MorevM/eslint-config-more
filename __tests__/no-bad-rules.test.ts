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

describe('Check unknown, unused and deprecated rules', () => {
	beforeAll(() => {
		ruleFinder.setKnownUnusedRules([
			// These rules covered with single `(jest|vitest)/padding-around-all` rule
			...[
				'padding-around-after-all-blocks',
				'padding-around-after-each-blocks',
				'padding-around-before-all-blocks',
				'padding-around-before-each-blocks',
				'padding-around-expect-groups',
				'padding-around-describe-blocks',
				'padding-around-test-blocks',
			].flatMap((name) => [`jest/${name}`, `vitest/${name}`]),
			// It seems https://github.com/JuniorTour/vue-template-babel-compiler not stable,
			// turned off for a while
			'vue/prefer-template',
			// Covered with `n/prefer-node-protocol`
			'unicorn/prefer-node-protocol',
			// Turned off due to wrong implementation
			'markdownlint/md012',
		]);
	});

	it('Has no deprecated rules', async () => {
		expect(ruleFinder.readableDeprecatedRules).toBe('');
	});

	it('Has no unconfigured rules', async () => {
		expect(ruleFinder.readableUnconfiguredRules).toBe('');
	});

	it('Has no unknown rules', async () => {
		expect(ruleFinder.unknownRules).toStrictEqual([]);
	});
});
