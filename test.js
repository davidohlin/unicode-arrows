'use strict';
var test = require('ava');
var unicodeArrows = require('./');

test(function (t) {
	t.is(typeof unicodeArrows, 'object');
	t.true(unicodeArrows.hasOwnProperty('n'));
	t.end();
});
