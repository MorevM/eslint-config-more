import { builtinCommands } from 'eslint-plugin-command/commands';
import command from 'eslint-plugin-command/config';
import toLineCommand from './to-line';

// @see https://eslint-plugin-command.antfu.me
export default command({
	commands: [
		...builtinCommands,
		toLineCommand,
	],
});
