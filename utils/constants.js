const CONFUSING_BROWSER_GLOBALS = [
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
];

const INLINE_ELEMENTS = [
	'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data',
	'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark',
	'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small',
	'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video',
];

const SPECIAL_CHARACTERS = [
	'(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '№', '$',
	'%', '!', '?', ':', '[', ']', '{', '}', '<', '>', '|',
	'\u00B7', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212',
];

module.exports = { CONFUSING_BROWSER_GLOBALS, INLINE_ELEMENTS, SPECIAL_CHARACTERS };
