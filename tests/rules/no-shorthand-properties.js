'use strict';

module.exports = {
  valid: [
    'var foo = { bar: 1 };',
    'var foo = { bar: function () {} };'
  ],
  invalid: [
    { code: 'var foo = { bar };', errors: [{ message: 'Unexpected object shorthand property.' }] },
    { code: 'var foo = { bar() {} };', errors: [{ message: 'Unexpected object shorthand property.' }] }
  ]
};
