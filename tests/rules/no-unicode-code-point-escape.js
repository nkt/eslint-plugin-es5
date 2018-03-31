'use strict';

module.exports = {
  valid: [
    '"𠮷"',
    '"\\uD842\\uDFB7"',
    '`𠮷`',
    '`\\uD842\\uDFB7`',
    '/𠮷/g',
    '/\\uD842\\uDFB7/g',
  ],
  invalid: [
    {
      code: '"\\u{20BB7}"',
      output: '"\\uD842\\uDFB7"',
      errors: [
        {
          message: 'Unexpected Unicode code point escape. \\u{20BB7}',
          column: 2,
          line: 1,
        }
      ]
    },
    {
      code: '`\\u{20BB7}`',
      output: '`\\uD842\\uDFB7`',
      errors: [
        {
          message: 'Unexpected Unicode code point escape. \\u{20BB7}',
          column: 2,
          line: 1,
        }
      ]
    },
    {
      code: '/\\u{20BB7}/g',
      output: '/\\uD842\\uDFB7/g',
      errors: [
        {
          message: 'Unexpected Unicode code point escape. \\u{20BB7}',
          column: 2,
          line: 1,
        }
      ]
    },
    {
      code: `
a=\`\${a}\\u{D842}\\u{DFB7}\`
b="\\u{20BB7}"
c=/\\u{20BB7}/g
`,
      output: `
a=\`\${a}\\uD842\\uDFB7\`
b="\\uD842\\uDFB7"
c=/\\uD842\\uDFB7/g
`,
      errors: [
        {
          message: 'Unexpected Unicode code point escape. \\u{D842}',
          line: 2,
          column: 8,
          nodeType: 'TemplateElement',
          endLine: 2,
          endColumn: 16,
        },
        {
          message: 'Unexpected Unicode code point escape. \\u{DFB7}',
          line: 2,
          column: 16,
          nodeType: 'TemplateElement',
          endLine: 2,
          endColumn: 24,
        },
        {
          message: 'Unexpected Unicode code point escape. \\u{20BB7}',
          line: 3,
          column: 4,
          nodeType: 'Literal',
          endLine: 3,
          endColumn: 13,
        },
        {
          message: 'Unexpected Unicode code point escape. \\u{20BB7}',
          line: 4,
          column: 4,
          nodeType: 'Literal',
          endLine: 4,
          endColumn: 13,
        },
      ]
    }
  ]
};
