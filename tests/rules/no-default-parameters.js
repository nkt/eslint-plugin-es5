'use strict';

module.exports = {
  valid: [
    'a = b',
    'a = b + 1',
    'function foo(a) {}'
  ],
  invalid: [
    { code: 'function foo(a = b) {}', errors: [{ message: 'Unexpected parameter with default value.' }] },
    { code: 'var foo = (a = 1) => {};', errors: [{ message: 'Unexpected parameter with default value.' }] },
    { code: 'var foo = (a = 1 + 5) => {};', errors: [{ message: 'Unexpected parameter with default value.' }] },
    { code: 'var foo = { bar(a = b) {} }', errors: [{ message: 'Unexpected parameter with default value.' }] }
  ]
};
