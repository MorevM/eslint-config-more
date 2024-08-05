export const CONFUSING_BROWSER_GLOBALS = [
	'addEventListener', 'blur', 'close', 'closed', 'confirm', 'defaultStatus',
	'defaultstatus', 'event', 'external', 'find', 'focus', 'frameElement',
	'frames', 'history', 'innerHeight', 'innerWidth', 'length', 'location',
	'locationbar', 'menubar', 'moveBy', 'moveTo', 'name', 'onblur',
	'onerror', 'onfocus', 'onload', 'onresize', 'onunload', 'open', 'opener',
	'opera', 'outerHeight', 'outerWidth', 'pageXOffset', 'pageYOffset', 'parent',
	'print', 'removeEventListener', 'resizeBy', 'resizeTo', 'screen',
	'screenLeft', 'screenTop', 'screenX', 'screenY', 'scroll', 'scrollbars',
	'scrollBy', 'scrollTo', 'scrollX', 'scrollY', 'self', 'status',
	'statusbar', 'stop', 'toolbar', 'top',
] as const;

export const INLINE_ELEMENTS = [
	'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data',
	'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark',
	'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small',
	'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video',
] as const;

export const SPECIAL_CHARACTERS = [
	'(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '№', '$',
	'%', '!', '?', ':', '[', ']', '{', '}', '<', '>', '|',
	'\u00B7', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212',
	'©', '®', '™',
] as const;

export const DIGIT_CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const ESLINT_FORMATTING_RULES = [
	'array-bracket-newline', 'array-bracket-spacing', 'array-element-newline',
	'arrow-parens', 'arrow-spacing', 'block-spacing', 'brace-style',
	'comma-dangle', 'comma-spacing', 'comma-style', 'computed-property-spacing',
	'dot-location', 'eol-last', 'func-call-spacing', 'function-call-spacing', 'function-call-argument-newline',
	'function-paren-newline', 'generator-star-spacing', 'implicit-arrow-linebreak',
	'indent', 'jsx-quotes', 'key-spacing', 'keyword-spacing', 'linebreak-style',
	'lines-between-class-members', 'lines-around-comment', 'max-len', 'max-statements-per-line',
	'multiline-ternary', 'new-parens', 'newline-per-chained-call',
	'no-confusing-arrow', 'no-extra-parens', 'no-extra-semi', 'no-floating-decimal', 'no-mixed-operators',
	'no-mixed-spaces-and-tabs', 'no-multi-spaces', 'no-multiple-empty-lines',
	'no-tabs', 'no-trailing-spaces', 'no-whitespace-before-property',
	'nonblock-statement-body-position', 'object-curly-newline', 'object-curly-spacing', 'object-property-newline',
	'one-var-declaration-per-line', 'operator-linebreak', 'padded-blocks', 'padding-line-between-statements',
	'quote-props', 'quotes', 'rest-spread-spacing',
	'semi', 'semi-spacing', 'semi-style',
	'space-before-blocks', 'space-before-function-paren', 'space-in-parens', 'space-infix-ops', 'space-unary-ops',
	'spaced-comment', 'switch-colon-spacing', 'template-curly-spacing', 'template-tag-spacing',
	'wrap-iife', 'wrap-regex', 'yield-star-spacing',
] as const;
