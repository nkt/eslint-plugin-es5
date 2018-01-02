'use strict';

module.exports = {
  valid: [
    'test.testMethod()',
    'test.otherTestMethod()'
  ],
  invalid: [
    { code: '[1, 2, 3].find(x => x == 3);', errors: [{ message: 'Unexpected ES6 function call.' }] },
    { code: '[0, 0, 0].fill(7, 1);', errors: [{ message: 'Unexpected ES6 function call.' }] }
  ]
};
