'use strict';

module.exports = {
  valid: [
    'function foo() {}',
    'var foo = function () {}',
    'var foo = { bar() {} }',
    'var foo = { bar: function () {} }'
  ],
  invalid: [
    { code: 'function *foo() {}', errors: [{ message: 'Unexpected generator.' }] },
    { code: 'var foo = function *() {}', errors: [{ message: 'Unexpected generator.' }] },
    { code: 'var foo = { *bar() {} }', errors: [{ message: 'Unexpected generator.' }] },
    { code: 'var foo = { bar: function *() {} }', errors: [{ message: 'Unexpected generator.' }] }
  ]
};
