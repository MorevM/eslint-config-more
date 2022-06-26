const path = require('path');
const { builtinModules } = require('module');
const { resolve: resolveExports } = require('resolve.exports');

const builtins = new Set(builtinModules);

const resolve = (source, file, _config) => {
	// Needed for proper `import/order` work
	if (builtins.has(source)) return { found: true, path: null };

	try {
		const moduleId = require.resolve(source, { paths: [path.dirname(file)] });
		return { found: true, path: moduleId };
	} catch (err) {
		if (err.code === 'MODULE_NOT_FOUND' && err.path?.endsWith('/package.json')) {
			const { name, module, main, exports } = require(err.path);
			const resolved = resolveExports({ name, module, main, exports }, source);
			const moduleId = path.join(path.dirname(err.path), resolved);

			return { found: true, path: moduleId };
		}

		return { found: false };
	}
};

module.exports = { interfaceVersion: 2, resolve };
