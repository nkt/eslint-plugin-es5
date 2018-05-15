'use strict'

module.exports = {
  valid: [
    `
var FLT_SIGNBIT  = 2147483648;
var FLT_EXPONENT = 2139095040;
var FLT_MANTISSA = 8388607;
    `
  ],
  invalid: [
    {
      code: `
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
      `,
      output: `
var FLT_SIGNBIT  = 2147483648; // 2147483648
var FLT_EXPONENT = 2139095040; // 2139095040
var FLT_MANTISSA = 8388607; // 8388607
      `,
      errors: [
        {
          message: 'Unexpected Binary literal.',
          line: 2,
          column: 20,
          endLine: 2,
          endColumn: 54
        },
        {
          message: 'Unexpected Binary literal.',
          line: 3,
          column: 20,
          endLine: 3,
          endColumn: 54
        },
        {
          message: 'Unexpected Binary literal.',
          line: 4,
          column: 20,
          endLine: 4,
          endColumn: 54
        }
      ]
    },
    {
      code: `
var n = 0O755; // 493
var m = 0o644; // 420
      `,
      output: `
var n = 493; // 493
var m = 420; // 420
      `,
      errors: [
        {
          message: 'Unexpected Octal literal.',
          line: 2,
          column: 9,
          endLine: 2,
          endColumn: 14
        },
        {
          message: 'Unexpected Octal literal.',
          line: 3,
          column: 9,
          endLine: 3,
          endColumn: 14
        }
      ]
    }
  ]
}
