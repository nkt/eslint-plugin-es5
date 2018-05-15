'use strict'

module.exports = {
  valid: [
    'typeof foo === symbol',
    'typeof foo === Symbol',
    'typeof foo === foo.symbol',
    '`${s}ymbol` === typeof foo'
  ],
  invalid: [
    {
      code: "typeof foo === 'symbol'",
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    },
    {
      code: "typeof foo == 'symbol'",
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    },
    {
      code: "'symbol' === typeof foo",
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    },
    {
      code: "'symbol' == typeof foo",
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    },
    {
      code: 'typeof foo === `symbol`',
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    },
    {
      code: '`symbol` === typeof foo',
      errors: [{ message: 'Unexpected typeof Symbol detection.' }]
    }
  ]
}
