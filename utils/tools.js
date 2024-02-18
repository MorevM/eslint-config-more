const { resolve, sep } = require('path');
const _mergeWith = require('lodash.mergewith');
const { mergeWithArrayComparer } = require('./helpers.js');

const CONFIGS_PATH = resolve(__dirname, '../configurations');


const makeConfig = (_configs) => {
	const configs = _configs.map(c => ({
		...c,
		name: c?.name.includes('/') ? c.name : `${c.name}${sep}index`,
	}));

	let result = {
		settings: {
			'import/resolver': {
				'[path.resolve(__dirname, \'../utils/eslint-plugin-import-resolver.js\')]': {}, // will be unwrapped during build
			},
			'import/ignore': [
				'node_modules',
			],
		},
	};

	configs.forEach(({ name, overrides }) => {
		let config = require(resolve(CONFIGS_PATH, name));

		if (overrides) {
			config = { overrides: [_mergeWith({}, config, overrides, mergeWithArrayComparer)] };
		}

		result = _mergeWith(result, config, mergeWithArrayComparer);
	});

	return result;
};

module.exports = { makeConfig };
