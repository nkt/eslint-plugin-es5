'use strict'

module.exports = {
  valid: [
    'var foo = 1;',
    { code: 'let foo = 1;', options: [{ let: true }] },
    { code: 'const foo = 1;', options: [{ const: true }] }
  ],
  invalid: [
    {
      code: 'let foo = 1;',
      errors: [{ message: 'Unexpected let declaration.' }]
    },
    {
      code: 'const foo = 1;',
      errors: [{ message: 'Unexpected const declaration.' }]
    }
  ]
}
