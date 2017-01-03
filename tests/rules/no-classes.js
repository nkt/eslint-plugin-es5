'use strict';

module.exports = {
  valid: [
    'function foo() {}',
    'var foo = function () {};'
  ],
  invalid: [
    { code: 'class foo {}', errors: [{ message: 'Unexpected class declaration. Use function instead.' }] },
    { code: 'var foo = class {}', errors: [{ message: 'Unexpected class declaration. Use function instead.' }] }
  ]
};
