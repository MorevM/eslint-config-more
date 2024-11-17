import { arrayUnique, isObject, quote } from '@morev/utils';
import riskyEslint from 'eslint/use-at-your-own-risk';
import type { FlatConfig } from '#types';

type Provider = {
	name: string;
	allRules: string[];
	activeRules: string[];
	deprecatedRules: string[];
};

type ReadableSource = {
	name: string;
	rules: string[];
};

/**
 * Utility class for testing deprecated and unconfigured rules.
 */
export default class RulesFinder {
	/**
	 * Data of each provider (ESLint itself and all plugins).
	 */
	private readonly rulesData: Provider[] = [];

	/**
	 * All configured rules extracted from the provided config.
	 */
	private readonly configuredRules: string[] = [];

	/**
	 * List of known rules which are intentionally not used.
	 */
	private knownUnusedRules: string[] = [];

	/**
	 * Extracts the data of each provider rules and the list of configured rules.
	 *
	 * @param   config   ESLint-compatible configuration.
	 *
	 * @returns          The class instance.
	 */
	public constructor(config: FlatConfig[]) {
		this.rulesData = [
			this.loadEslintRulesData(),
			...this.loadPluginRulesData(config),
		];

		this.configuredRules = this.loadConfiguredRules(config);
	}

	/**
	 * Creates an empty provider for future work.
	 *
	 * @param   options   Partial options of the new provider.
	 *
	 * @returns           Provider object.
	 */
	private createProvider(options: Partial<Provider>): Provider {
		return ({
			name: '',
			allRules: [],
			activeRules: [],
			deprecatedRules: [],
			...options,
		});
	}

	/**
	 * Extracts the data of ESLint rules.
	 *
	 * @returns   ESLint provider object.
	 */
	private loadEslintRulesData() {
		// eslint-disable-next-line @typescript-eslint/no-deprecated -- There's no other way
		const eslintRules = [...riskyEslint.builtinRules.entries()];

		return eslintRules.reduce<Provider>((acc, [ruleName, ruleDefinition]) => {
			acc.allRules.push(ruleName);
			ruleDefinition.meta?.deprecated && acc.deprecatedRules.push(ruleName);
			!ruleDefinition.meta?.deprecated && acc.activeRules.push(ruleName);

			return acc;
		}, this.createProvider({ name: 'eslint' }));
	}

	/**
	 * Extracts the data of each plugin rules.
	 *
	 * @param   config   ESLint-compatible configuration.
	 *
	 * @returns          The array of provider objects for all plugins in the config.
	 */
	private loadPluginRulesData(config: FlatConfig[]) {
		return config.reduce<Provider[]>((acc, configItem) => {
			if (!configItem.plugins) return acc;

			Object.entries(configItem.plugins).forEach(([mapName, pluginDefinition]) => {
				if (!pluginDefinition.rules) return;

				// `eslint-plugin-no-autofix` creates a prefixed alias for all other rules.
				// It's irrelevant for calculation.
				if (mapName === 'no-autofix') return;

				// Some plugins occur multiple times in different configurations -
				// no need to process them twice.
				if (acc.some((item) => item.name === mapName)) return;

				const provider = this.createProvider({ name: mapName });

				Object.entries(pluginDefinition.rules).forEach(([ruleName, ruleDefinition]) => {
					const neededName = `${mapName}/${ruleName}`;

					provider.allRules.push(neededName);

					if ('meta' in ruleDefinition && isObject(ruleDefinition.meta) && 'deprecated' in ruleDefinition.meta) {
						ruleDefinition.meta.deprecated && provider.deprecatedRules.push(neededName);
						!ruleDefinition.meta?.deprecated && provider.activeRules.push(neededName);
					} else {
						provider.activeRules.push(neededName);
					}
				});

				acc.push(provider);
			});

			return acc;
		}, []);
	}

	/**
	 * Extracts the list of configured rules from the config.
	 *
	 * @param   config   ESLint-compatible configuration.
	 *
	 * @returns          Array of configured rule names.
	 */
	private loadConfiguredRules(config: FlatConfig[]) {
		return config.reduce<string[]>((acc, configItem) => {
			if (!configItem.rules) return acc;

			const configuredRules = Object.keys(configItem.rules)
				// `no-autofix` rules are skipped as they are
				// just mappings to the real ones.
				.filter((ruleName) => !ruleName.startsWith('no-autofix'));

			acc.push(...configuredRules);
			return acc;
		}, []);
	}

	/**
	 * Sets the list of known rules which are intentionally not used.
	 * These rules are not counted.
	 *
	 * @param   rules   Array containing rule names.
	 */
	public setKnownUnusedRules(rules: string[]) {
		this.knownUnusedRules = arrayUnique([
			...this.knownUnusedRules,
			...rules.filter(Boolean),
		]);
	}

	/**
	 * All rules presented in all plugins and ESLint itself.
	 *
	 * @returns   List of all rules.
	 */
	public get allRules() {
		return Object.values(this.rulesData).reduce<string[]>((acc, pluginData) => {
			acc.push(...pluginData.allRules);
			return acc;
		}, []);
	}

	/**
	 * Active (not deprecated) rules list collected from all plugins and ESLint itself.
	 *
	 * @returns   List of all active rules.
	 */
	public get activeRules() {
		return Object.values(this.rulesData).reduce<string[]>((acc, pluginData) => {
			acc.push(...pluginData.activeRules);
			return acc;
		}, []);
	}

	/**
	 * Deprecated rules list collected from all plugins and ESLint itself.
	 *
	 * @returns   List of all deprecated rules.
	 */
	public get deprecatedRules() {
		return Object.values(this.rulesData).reduce<string[]>((acc, pluginData) => {
			acc.push(...pluginData.deprecatedRules);
			return acc;
		}, []);
	}

	/**
	 * Unknown rules list presented in the config.
	 * Used to prevent typos.
	 *
	 * @returns   List of all unknown rules.
	 */
	public get unknownRules() {
		return this.configuredRules
			.filter((rule) => !this.allRules.includes(rule));
	}

	/**
	 * Active but not configured rules list collected from all plugins and ESLint itself.
	 *
	 * @returns   List of all active rules that are not configured.
	 */
	public get unconfiguredRules() {
		return this.activeRules
			.filter((rule) => !this.configuredRules.includes(rule))
			.filter((rule) => !this.knownUnusedRules.includes(rule));
	}

	/**
	 * Deprecated but configured rules list collected from all plugins and ESLint itself.
	 *
	 * @returns   List of all deprecated rules presented in the config.
	 */
	public get configuredDeprecatedRules() {
		return this.configuredRules.filter((rule) => this.deprecatedRules.includes(rule));
	}

	/**
	 * Extracts rule data grouped by provider.
	 * This is used to generate readable error texts.
	 *
	 * @param   ruleNames   Rule names to group by provider.
	 * @param   property    Source key to check.
	 *
	 * @returns             Array containing rules grouped by provider.
	 */
	private getReadableSource(ruleNames: string[], property: keyof Provider) {
		return ruleNames.reduce<ReadableSource[]>((acc, rule) => {
			const source = this.rulesData.find((source) => source[property].includes(rule))!;
			const existingEntry = acc.find((item) => item.name === source.name);
			existingEntry?.rules.push(rule);
			!existingEntry && acc.push({ name: source.name, rules: [rule] });

			return acc;
		}, []);
	}

	/**
	 * Gets information about used deprecated rules in human-readable form.
	 *
	 * @returns   Deprecated rules list grouped by provider.
	 */
	public get readableDeprecatedRules() {
		const data = this.getReadableSource(this.configuredDeprecatedRules, 'deprecatedRules');

		return data.reduce<string[]>((acc, curr) => {
			const deprecatedRules = curr.rules.map((rule) => quote(rule, '`')).join(', ');
			const prefix = curr.name === 'eslint' ? 'ESLint' : `Plugin '${curr.name}'`;
			acc.push(`${prefix} has ${curr.rules.length} deprecated rule(s): ${deprecatedRules}`);
			return acc;
		}, []).join('\n');
	}

	/**
	 * Gets information about not configured rules in human-readable form.
	 *
	 * @returns   Not configured rules list grouped by provider.
	 */
	public get readableUnconfiguredRules() {
		const data = this.getReadableSource(this.unconfiguredRules, 'allRules');

		return data.reduce<string[]>((acc, curr) => {
			const unconfiguredRules = curr.rules.map((rule) => quote(rule, '`')).join(', ');
			const prefix = curr.name === 'eslint' ? 'ESLint' : `Plugin '${curr.name}'`;
			acc.push(`${prefix} has ${curr.rules.length} unconfigured rule(s): ${unconfiguredRules}`);
			return acc;
		}, []).join('\n');
	}
}
