'use strict';

module.exports = {
  valid: [
    'var foo = [];',
    'var foo = {}',
    'function foo(bar) {}'
  ],
  invalid: [
    { code: 'var [ foo ] = [];', errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'var { foo } = {};', errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'function foo([ bar ]) {}', errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'function foo({ bar }) {}', errors: [{ message: 'Unexpected destructuring.' }] }
  ]
};
