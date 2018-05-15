'use strict'

module.exports = {
  valid: ['Object.create()', 'isNaN()'],
  invalid: [
    {
      code: 'Object.assign()',
      errors: [{ message: 'ES6 static methods not allowed: Object.assign' }]
    },
    {
      code: 'Number.isNaN()',
      errors: [{ message: 'ES6 static methods not allowed: Number.isNaN' }]
    }
  ]
}
