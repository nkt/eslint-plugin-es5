'use strict';

module.exports = {
  valid: [
    'test.testMethod()',
    'test.otherTestMethod()',
    '_.find([1, 2, 3])',
    '_.chain([1, 2, 3]).reverse().find().value()',
    '$("#myDiv").find(".child")',
    'jQuery("#myDiv").parent().find(".child")',
    '$myForm.find(".child")',
    '[[1, 2], [3, 4]].flat()',
    { code: 'jqVariable.find(x => x == 3);', options: [{ exceptMethods: ['find'] }] },
    { code: 'a.includes("123");', options: [{ exceptMethods: ['includes'] }] },
  ],
  invalid: [
    { code: '[1, 2, 3].find(x => x == 3);', errors: [{ message: 'ES6 methods not allowed: find' }] },
    { code: '[0, 0, 0].fill(7, 1);', errors: [{ message: 'ES6 methods not allowed: fill' }] },
    { code: '[1, 2, 3].filter(x => x !== 3);',
      options: [{ exceptMethods: ['map'], additionalMethods: ['filter'] }],
      errors: [{ message: 'ES6 methods not allowed: filter' }] },
    { code: '[[1, 2], [3, 4]].flat()',
      options: [{ exceptMethods: ['map'], additionalMethods: ['flat'] }],
      errors: [{ message: 'ES6 methods not allowed: flat' }] }
  ]
};
