import type { PlainObject } from '@morev/utils';
import { isArray, isEmpty } from '@morev/utils';
import { ESLINT_FORMATTING_RULES } from '#constants';
import type { RuleValue } from '#types';
import configurationJavascript from '~configurations/javascript';

type ExtensionFromBaseFactoryOptions = {
	/**
	 * The prefix of the resulting extension rule name.
	 *
	 * @example 'vue'
	 */
	prefix: string;

	/**
	 * Whether to always disable the original ESLint rule. \
	 * Rules can be disabled selectively by adding `-` before the rule name.
	 */
	alwaysDisableBaseRule?: boolean;
};

/**
 * Utility function to create extension rules.
 *
 * @param   options   Custom factory options.
 *
 * @returns           The function to define extension rule.
 */
export const extensionFromBaseFactory = (options: ExtensionFromBaseFactoryOptions) => {
	const { prefix, alwaysDisableBaseRule = false } = options;
	const baseConfigRules = configurationJavascript().rules!;

	/**
	 * Function to define extension rule based on the original ESLint rule value.
	 *
	 * @param   rule         The name of the base rule from ESLint to use its name and options.
	 *                       If the rule name is prefixed with `-` character, then the base rule will be disabled.
	 * @param   extendWith   The options to merge with the base rule options.
	 *
	 * @returns              An object containing extension rule with configured `prefix` and,
	 *                       optionally, disabled base rule.
	 *
	 * @throws               Throws if the rule is not found in the base config.
	 */
	return (rule: string, extendWith?: PlainObject) => {
		const shouldDisable = alwaysDisableBaseRule || rule.startsWith('-');
		const cleanRule = rule.replace(/^-/, '');

		const ruleName = ESLINT_FORMATTING_RULES.includes(cleanRule)
			? `@stylistic/${cleanRule}`
			: cleanRule;

		const ruleValue = baseConfigRules[ruleName];
		if (!ruleValue) {
			throw new Error(`There is no rule '${ruleName}' to extend.`);
		}

		const result: PlainObject<RuleValue> = shouldDisable
			? { [ruleName]: 'off' }
			: {};

		const severity = isArray(ruleValue) ? ruleValue[0] : ruleValue;
		const baseOptions = isArray(ruleValue) ? ruleValue.slice(1)[0] : null;

		const newOptions = extendWith
			? { ...baseOptions as object, ...extendWith }
			: baseOptions;

		result[`${prefix}/${cleanRule}`] = isEmpty(newOptions)
			? severity
			: [severity, newOptions];

		return result;
	};
};
