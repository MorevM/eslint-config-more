import { cancel, isCancel, log, multiselect, note, outro } from '@clack/prompts';
import { tsObject } from '@morev/utils';
import selfPackageJson from '../../package.json';
import { addScripts } from './add-scripts';
import { createConfig } from './create-config';
import { install } from './install';
import { updateSettings } from './update-settings';
import { createStepMessage, formatCliMessage } from './utils';
import type { PackageJson } from '@morev/utils';

// TODO: Custom flag to skip the prompts
const cleanArguments = process.argv.slice(2);
const NO_DELAY = cleanArguments.includes('--no-delay');

const [delay, smallDelay] = NO_DELAY ? [0, 0]	: [3000, 2000];

note(
	formatCliMessage(`
		<g>Hello!</g>
		This installation wizard will help you to setup
		ESLint configuration and related settings.
	`),
	`${selfPackageJson.name}@${selfPackageJson.version}`,
);

const steps = {
	'install': {
		title: 'Install or update <c>the package and its dependencies</c>',
		controller: install,
	},
	'create-config': {
		title: 'Create <c>eslint.config.js</c> file',
		controller: createConfig,
	},
	'update-settings': {
		title: 'Create or update <c>.vscode/settings.json</c> file',
		controller: updateSettings,
	},
	'add-scripts': {
		title: 'Add <c>npm scripts</c> for the linting',
		controller: addScripts,
	},
} as const;

const actions = await multiselect({
	message: 'What would you like to do?\n',
	required: true,
	options: tsObject.entries(steps).map(([key, value]) => ({
		label: formatCliMessage(value.title),
		value: key,
	})),
});

if (isCancel(actions) || actions.length === 0) {
	cancel('Well, maybe next time.');
	process.exit(0);
}

let stepNumber = 1;
const stepMessage = createStepMessage(actions.length, smallDelay);
const stepOptions = {
	selfPackageJson: selfPackageJson as PackageJson,
	delay,
	smallDelay,
};

for (const action of actions) {
	const step = steps[action];
	await stepMessage(step.title, stepNumber++);
	await step.controller(stepOptions);
}

log.success(
	formatCliMessage(`
		<g>All done!</g>
		You may need to restart the IDE to see the changes.

		Recent updates:
		<c>https://github.com/morevm/eslint-config</c>
	`),
);

outro(
	formatCliMessage('<g>Have a nice day!</g>'),
);
