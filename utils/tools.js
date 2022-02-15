const { resolve, sep } = require('path');
const _mergeWith = require('lodash.mergewith');
const { mergeWithArrayComparer } = require('./helpers.js');

const CONFIGS_PATH = resolve(__dirname, '../configurations');

const CONFIGURATION_DEFAULTS = { mode: 'default' };

const makeConfig = (_configs) => {
	const configs = _configs.map(c => ({
		...CONFIGURATION_DEFAULTS,
		...c,
		name: c?.name.includes('/') ? c.name : `${c.name}${sep}index`,
	}));

	let result = {};

	configs.forEach(({ name, mode, overrides }) => {
		const configFactory = require(resolve(CONFIGS_PATH, name));
		let processed = configFactory(mode);

		if (overrides) {
			processed = { overrides: [_mergeWith({}, processed, overrides, mergeWithArrayComparer)] };
		}

		result = _mergeWith(result, processed, mergeWithArrayComparer);
	});

	return result;
};

module.exports = { makeConfig };
