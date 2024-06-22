const _mergeWith = require('lodash.mergewith');
const { deepClone } = require('@morev/utils');

const mergeWithArrayComparer = (ov, sv, key) =>
	Array.isArray(ov) && ['plugins', 'overrides'].includes(key)
		? [...new Set([...sv, ...ov])]
		: undefined;

const processExports = ({ base, parts }) => {
	return _mergeWith(
		deepClone(base),
		...parts,
		mergeWithArrayComparer,
	);
};

module.exports = { processExports, mergeWithArrayComparer };
