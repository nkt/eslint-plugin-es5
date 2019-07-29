'use strict';

module.exports = {
  valid: [
    'Object.create()',
    'isNaN()',
    { code: 'Math.imul()', options: [{ exceptMethods: ['Math.imul'] }] }
  ],
  invalid: [
    { code: 'Object.assign()', errors: [{ message: 'ES6 static methods not allowed: Object.assign' }] },
    { code: 'Number.isNaN()', errors: [{ message: 'ES6 static methods not allowed: Number.isNaN' }] },
    { code: 'Math.imul()', options: [{ exceptMethods: ['Number.isNaN'] }], errors: [{ message: 'ES6 static methods not allowed: Math.imul' }] }
  ]
};
