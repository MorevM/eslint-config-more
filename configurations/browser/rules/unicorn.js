module.exports = {
	plugins: ['unicorn'],
	rules: {
		// Prefer `Node#append()` over `Node#appendChild()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md
		'unicorn/prefer-dom-node-append': 'warn',

		// Prefer using `.dataset` on DOM elements over `.setAttribute(…)` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md
		'unicorn/prefer-dom-node-dataset': 'warn',

		// Prefer `childNode.remove()` over `parentNode.removeChild(childNode)` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md
		'unicorn/prefer-dom-node-remove': 'warn',

		// Prefer `.textContent` over `.innerText`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md
		'unicorn/prefer-dom-node-text-content': 'error',

		// Prefer `EventTarget` over `EventEmitter`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
		'unicorn/prefer-event-target': 'error',

		// Prefer modern DOM APIs (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md
		'unicorn/prefer-modern-dom-apis': 'warn',

		// Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md
		'unicorn/prefer-keyboard-event-key': 'error',
	},
};
