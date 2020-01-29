'use strict';

module.exports = {
  valid: [
    'test.testMethod()',
    'test.otherTestMethod()',
    '_.find([1, 2, 3])',
    '_.chain([1, 2, 3]).reverse().find().value()',
    '$("#myDiv").find(".child")',
    'jQuery("#myDiv").parent().find(".child")',
    '$myForm.find(".child")'
  ],
  invalid: [
    { code: '[1, 2, 3].find(x => x == 3);', errors: [{ message: 'ES6 methods not allowed: find' }] },
    { code: '[0, 0, 0].fill(7, 1);', errors: [{ message: 'ES6 methods not allowed: fill' }] }
  ]
};
