const fs = require('fs');
const RuleFinderFactory = require('eslint-find-rules');

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
];
const TEMP_FILE = `.tmp-config.js`;

describe('Check unused and deprecated props', () => {
	let ruleFinder = null;

	// That's rough, but `eslint-find-rules` requires config to be in file :\
	beforeAll(async () => {
		const config = makeConfig(configurations);
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
			.filter(r => !r.startsWith('no-autofix'));

		expect(deprecatedRules).toHaveLength(0);
	});

	it('Has no unused rules', async () => {
		const unusedRules = ruleFinder.getUnusedRules()
			.filter(rule => !rule.startsWith('no-autofix'))
			.filter(rule => !KNOWN_UNUSED.includes(rule));

		expect(unusedRules).toHaveLength(0);
	});
});
