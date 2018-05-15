'use strict'

module.exports = {
  valid: ['function foo () {}'],
  invalid: [
    {
      code: 'function foo (...args) {}',
      errors: [{ message: 'Unexpected rest parameter.' }]
    },
    {
      code: 'function foo(a, b, c, ...args) {}',
      errors: [{ message: 'Unexpected rest parameter.' }]
    },
    {
      code: '(...args) => args',
      errors: [{ message: 'Unexpected rest parameter.' }]
    },
    {
      code: '(a, b, c, ...args) => args',
      errors: [{ message: 'Unexpected rest parameter.' }]
    }
  ]
}
