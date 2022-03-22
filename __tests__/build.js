const path = require('path');
const glob = require('glob');
const { Legacy } = require('@eslint/eslintrc');

const ROOT_PATH = path.resolve(__dirname, '../').replace(/\\/g, '/');
const BUILD_PATH = `${ROOT_PATH}/build`;

describe('Build', () => {
	it('Builds valid configurations', async () => {
		const { ConfigValidator } = Legacy;
		const validator = new ConfigValidator();

		const isValid = await Promise.all(glob.sync(`${BUILD_PATH}/**/*`, { nodir: true }).map((file) => (
			new Promise((resolve, reject) => {
				const config = require(file);
				const source = file.split('/').slice(-2).join('/');

				try {
					validator.validateConfigSchema(config, source);
					resolve();
				} catch (err) {
					reject(err);
				}
			})
		)))
			.then(() => true)
			.catch(() => false);

		expect(isValid).toBe(true);
	});
});
