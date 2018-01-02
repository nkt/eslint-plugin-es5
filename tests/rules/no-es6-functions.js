'use strict';

module.exports = {
  valid: [
    'test.testMethod()',
    'test.otherTestMethod()'
  ],
  invalid: [
    { code: 'test.find();', errors: [{ message: 'Unexpected ES6 function call.' }] },
    { code: 'test.fill();', errors: [{ message: 'Unexpected ES6 function call.' }] }
  ]
};
