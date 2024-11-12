import type { PackageJson } from '@morev/utils';

export type StepOptions = {
	/**
	 * The object containing `package.json` contents
	 * of executing CLI controller.
	 */
	selfPackageJson: PackageJson;

	/**
	 * Delay between commands for better UX.
	 */
	delay: number;

	/**
	 * Small delay after the commands for better UX.
	 */
	smallDelay: number;
};
