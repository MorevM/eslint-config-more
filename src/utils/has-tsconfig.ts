import fs from 'node:fs';
import path from 'node:path';

/**
 * Checks whether `tsconfig.json` exists
 *
 * @returns   Is there `tsconfig.json` in the project root.
 */
export const hasTsconfig = () =>
	fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));
