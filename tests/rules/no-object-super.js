'use strict'

module.exports = {
  valid: ['function foo() {}'],
  invalid: [
    {
      code: 'function foo() { super(); }',
      errors: [{ message: 'Unexpected super() call.' }]
    },
    {
      code: 'function foo() { super.foo(); }',
      errors: [{ message: 'Unexpected super() call.' }]
    }
  ]
}
