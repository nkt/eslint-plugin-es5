'use strict';

module.exports = {
  valid: [
    'a * b',
    'var foo = a * b;'
  ],
  invalid: [
    { code: 'a ** b', errors: [{ message: 'Unexpected exponentiation operator.' }] },
    { code: 'var foo = a ** b', errors: [{ message: 'Unexpected exponentiation operator.' }] },
    { code: 'a **= b', errors: [{ message: 'Unexpected exponentiation operator.' }] },
  ]
};
