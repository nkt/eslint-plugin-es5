'use strict';

module.exports = {
  valid: [
    'foo()',
    '[]',
    '[1].concat([2], [3]);',
    'function foo (...args) {}'
  ],
  invalid: [
    {
      code: 'foo(...args)',
      output: null,
      errors: [{ message: 'Unexpected spread expression.' }]
    },
    {
      code: 'foo(a, b, c, ...args)',
      output: null,
      errors: [{ message: 'Unexpected spread expression.' }]
    },
    {
      code: '[...args]',
      output: '[].concat(args)',
      errors: [{ message: 'Unexpected spread expression.' }]
    },
    {
      code: '[1, ...[2], 3]',
      output: '[].concat([1],[2],[3])',
      errors: [{ message: 'Unexpected spread expression.' }]
    },
    {
      code: '[1, ...args, ]',
      output: '[].concat([1],args)',
      errors: [{ message: 'Unexpected spread expression.' }]
    },
    {
      code: '["a", ...b(), ...c]',
      output: '[].concat(["a"],b(),c)',
      errors: [{ message: 'Unexpected spread expression.' }, { message: 'Unexpected spread expression.' }]
    },
    {
      code: '[...[...args]]',
      output: '[].concat([...args])',
      errors: [{ message: 'Unexpected spread expression.' }, { message: 'Unexpected spread expression.' }]
    }
  ]
};
