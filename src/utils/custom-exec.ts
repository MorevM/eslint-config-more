import { exec } from 'node:child_process';

/**
 * Executes the given command.
 *
 * @param   command   Command to run.
 *
 * @returns           Promise that resolves to command output or rejects with `ExecException`.
 */
export const customExec = (command: string) =>
	new Promise<string>((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error === null) {
				resolve(stdout.trim());
				return;
			}
			reject(error);
		});
	});
