import { defineCommand } from 'eslint-plugin-command/commands';

export default defineCommand({
	name: 'morev/command/to-line',
	match: /^\s*[/:@]\s*(2line|to-line)$/,
	action(context) {
		const expression = context.findNodeBelow(
			'ObjectExpression',
			'ArrayExpression',
			'TSTypeAliasDeclaration',
			'TSInterfaceDeclaration',
		);
		if (!expression) {
			return context.reportError('Unable to find the expression to convert');
		}

		const contents = context.getTextOf(expression);

		context.report({
			node: expression,
			loc: expression.loc,
			message: 'Rewrite in one line',
			fix(fixer) {
				const fix = contents.replaceAll(/\n+/g, ' ');
				return fixer.replaceText(expression, fix);
			},
		});
	},
});
