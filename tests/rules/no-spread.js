'use strict';

module.exports = {
  valid: [
    'foo()',
    '[]',
    '[1].concat([2], [3]);',
    'function foo (...args) {}'
  ],
  invalid: [
    { code: 'foo(...args)', errors: [{ message: 'Unexpected spread expression.' }] },
    { code: 'foo(a, b, c, ...args)', errors: [{ message: 'Unexpected spread expression.' }] },
    { code: '[...args]', errors: [{ message: 'Unexpected spread expression.' }] },
    { code: '[1, ...[2], 3]', errors: [{ message: 'Unexpected spread expression.' }] }
  ]
};
