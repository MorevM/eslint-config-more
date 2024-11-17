import { execSync } from 'node:child_process';

describe('Test the project for type-safety', () => {
	it('Has no type errors', () => {
		let tscOutput: any = '';

		try {
			// Node's `exec` does not provide stdout of an error.
			execSync('tsc --noEmit');
		} catch (error: any) {
			tscOutput = error.stdout?.toString() ?? 'Unknown error executing `tsc --noEmit`';
		}

		// `not.toThrow()` does not provide stdout of the error,
		// forcing a manual run of the command after the failed test.
		// This way the information appears immediately in the test output.
		expect(tscOutput).toBe('');
	});
});
