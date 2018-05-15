'use strict'

module.exports = {
  valid: ['var foo = { bar: baz };', 'foo[bar] = baz;'],
  invalid: [
    {
      code: 'var foo = { [bar]: baz };',
      errors: [{ message: 'Unexpected computed property.' }]
    }
  ]
}
