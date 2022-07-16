const path = require('path');
const fs = require('fs');
const { builtinModules } = require('module');
const { resolve: resolveExports } = require('resolve.exports');

const allBuiltins = builtinModules.flatMap(m => [m, `node:${m}`]);

const resolve = (source, file, _config) => {
	// Needed for proper `import/order` work
	if (allBuiltins.includes(source)) return { found: true, path: null };
	// `moduleId` (below) resolves to non-existed package with `node:` prefix
	if (source.startsWith('node:') && !allBuiltins.includes(source)) return { found: false };

	try {
		const moduleId = require.resolve(source, { paths: [path.dirname(file)] });
		return { found: true, path: moduleId };
	} catch (err) {
		if (err.code === 'MODULE_NOT_FOUND' && err.path?.endsWith('package.json')) {
			const { name, module, main, exports } = require(err.path);
			const resolved = resolveExports({ name, module, main, exports }, source);
			const moduleId = path.join(path.dirname(err.path), resolved);

			return { found: true, path: moduleId };
		}

		if (err.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED') {
			// TODO: Is there a better way?
			const [, subpath, base] = err.message.match(/subpath ["'](.*)["'] .* in (.*)/) || [null, null, null];
			if (!base) return { found: false };

			const fullPath = path.join(path.dirname(base), subpath);
			if (fs.existsSync(fullPath)) {
				return { found: true, path: fullPath };
			}
		}

		return { found: false };
	}
};

module.exports = { interfaceVersion: 2, resolve };
