const path = require('path');
const { glob } = require('glob');
const { Legacy } = require('@eslint/eslintrc');

const ROOT_PATH = path.resolve(__dirname, '../').replace(/\\/g, '/');
const BUILD_PATH = `${ROOT_PATH}/build`;

describe('Build', () => {
	it('Builds valid configurations', async () => {
		const { ConfigValidator } = Legacy;
		const validator = new ConfigValidator();

		const configurationsToCheck = await glob(`${BUILD_PATH}/!(utils)/**/*`, { nodir: true });

		const errors = await Promise.allSettled(
			configurationsToCheck.map((file) => (
				new Promise((resolve, reject) => {
					const config = require(file);
					const source = file.split('/').slice(-2).join('/');

					try {
						validator.validateConfigSchema(config, source);
						resolve(source);
					} catch {
						reject(source);
					}
				})
			)),
		)
			.then((results) => (
				results
					.filter(({ status }) => status === 'rejected')
					.map(({ reason }) => reason)
			));

		expect(errors).toHaveLength(0);
	});
});
