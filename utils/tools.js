const _mergeWith = require('lodash.mergewith');
const { resolve, sep } = require('path');
const { mergeWithArrayComparer } = require('../utils/helpers');

const CONFIGS_PATH = resolve(__dirname, '../configurations');

const CONFIGURATION_DEFAULTS = { autofixable: 'warn' };

const makeConfig = (_configs) => {
	const configs = _configs.map(c => ({
		...CONFIGURATION_DEFAULTS,
		...c,
		name: c?.name.includes('/') ? c.name : `${c.name}${sep}index`,
	}));

	let result = {};

	configs.forEach(({ name, autofixable, overrides }) => {
		// eslint-disable-next-line node/global-require
		const configFactory = require(resolve(CONFIGS_PATH, name));
		let processed = configFactory(autofixable);

		if (overrides) {
			processed = { overrides: [_mergeWith({}, processed, overrides, mergeWithArrayComparer)] };
		}

		result = _mergeWith(result, processed, mergeWithArrayComparer);
	});

	return result;
};

module.exports = { makeConfig };
