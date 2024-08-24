import { pluginChaiFriendly, pluginCypress } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'cypress': pluginCypress,
		'chai-friendly': pluginChaiFriendly,
	},
	rules: {
		// Prevent assigning return values of cy calls
		// https://docs.cypress.io/guides/references/best-practices#Assigning-Return-Values
		'cypress/no-assigning-return-values': 'error',

		// Prevent waiting for arbitrary time periods
		// https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting
		'cypress/no-unnecessary-waiting': 'error',

		// Prevent using async/await in Cypress test case
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/HEAD/docs/rules/no-async-tests.md
		'cypress/no-async-tests': 'error',

		// Prevent using async/await in Cypress test cases
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-async-before.md
		'cypress/no-async-before': 'error',

		// Prevent chaining from unsafe to chain commands
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/unsafe-to-chain-command.md
		'cypress/unsafe-to-chain-command': 'error',

		// Disallow using `force: true` with action commands
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/HEAD/docs/rules/no-force.md
		'cypress/no-force': 'error',

		// Ensure screenshots are preceded by an assertion
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/HEAD/docs/rules/assertion-before-screenshot.md
		'cypress/assertion-before-screenshot': 'error',

		// Only allow `data-*` attribute selectors
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/HEAD/docs/rules/require-data-selectors.md
		'cypress/require-data-selectors': 'off',

		// Disallow `cy.pause()` parent command
		// https://github.com/cypress-io/eslint-plugin-cypress/blob/HEAD/docs/rules/no-pause.md
		'cypress/no-pause': 'warn',

		// Override `no-unused-expressions` rule to make it friendly towards chai `expect` and `should` statements.
		// https://github.com/ihordiachenko/eslint-plugin-chai-friendly#readme
		'no-unused-expressions': 'off',
		'chai-friendly/no-unused-expressions': 'warn',
	},
});
