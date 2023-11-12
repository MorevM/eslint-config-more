const fs = require('fs');
const RuleFinderFactory = require('eslint-find-rules');

const { ESLINT_FORMATTING_RULES } = require('../utils/constants.js');
const { makeConfig } = require('../utils/tools.js');
const { configurations } = require('../utils/meta.js');

const KNOWN_UNUSED = [
	// These rules covered with single `jest-formatting/all` rule
	'jest-formatting/padding-around-after-all-blocks',
	'jest-formatting/padding-around-after-each-blocks',
	'jest-formatting/padding-around-before-all-blocks',
	'jest-formatting/padding-around-before-each-blocks',
	'jest-formatting/padding-around-describe-blocks',
	'jest-formatting/padding-around-expect-groups',
	'jest-formatting/padding-around-test-blocks',
	// It seems https://github.com/JuniorTour/vue-template-babel-compiler not stable,
	// turned off for a while
	'vue/prefer-template',
	// Turned off due of wrong implementation, now replaced with standard `no-multiple-empty-lines`
	'markdownlint/md012',
	// Due of deprecation of stylistic rules
	// https://eslint.org/blog/2023/10/deprecating-formatting-rules/
	...ESLINT_FORMATTING_RULES,
	// And a TS versions as well
	...ESLINT_FORMATTING_RULES.map((rule) => `@typescript-eslint/${rule}`),
];

// eslint-disable-next-line unicorn/no-useless-spread
const KNOWN_DEPRECATED = [
	// As `vue-eslint-plugin` only wraps a core rules, they become deprecated
	...ESLINT_FORMATTING_RULES.map((rule) => `vue/${rule}`),
];

const TEMP_FILE = `.tmp-config.js`;

// Smth wrong with it since jest 28, affects nothing in this test
const removeNoAutofixPlugin = (config) => {
	delete config.env['jest/globals'];
	config.plugins = config.plugins.filter(p => p !== 'no-autofix');
	config.rules = Object.fromEntries(
		Object.entries(config.rules).filter(([key, value]) => !key.startsWith('no-autofix')),
	);
};

describe('Check unused and deprecated props', () => {
	let ruleFinder = null;

	// That's rough, but `eslint-find-rules` requires config to be in file :\
	beforeAll(async () => {
		const config = makeConfig(configurations);
		removeNoAutofixPlugin(config);

		fs.writeFileSync(
			TEMP_FILE,
			`module.exports = ${JSON.stringify(config, null, '\t')}`,
			{ encoding: 'utf8' },
		);

		ruleFinder = await RuleFinderFactory(TEMP_FILE);
	});

	afterAll(() => {
		fs.unlinkSync(TEMP_FILE);
	});

	it('Has no deprecated rules', async () => {
		const deprecatedRules = ruleFinder.getDeprecatedRules()
			.filter((rule) => !KNOWN_DEPRECATED.includes(rule));

		expect(deprecatedRules).toHaveLength(0);
	});

	it('Has no unused rules', async () => {
		const unusedRules = ruleFinder.getUnusedRules()
			.filter(rule => !KNOWN_UNUSED.includes(rule));

		expect(unusedRules).toHaveLength(0);
	});
});
