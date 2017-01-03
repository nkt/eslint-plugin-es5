'use strict';

module.exports = {
  valid: [
    'function foo() {}',
    'var foo = function () {};'
  ],
  invalid: [
    { code: 'var foo = () => {};', errors: [{ message: 'Unexpected arrow-function expression.' }] },
    { code: 'var foo = bar => baz;', errors: [{ message: 'Unexpected arrow-function expression.' }] }
  ]
};
