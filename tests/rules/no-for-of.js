'use strict'

module.exports = {
  valid: ['for (var i = 0; i < 10; i++) {}'],
  invalid: [
    {
      code: 'for (var foo of bar) {}',
      errors: [{ message: 'Unexpected for-of statement.' }]
    }
  ]
}
