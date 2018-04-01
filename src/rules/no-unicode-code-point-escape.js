'use strict';

function findUnicodeCodePointEscapes(s, start) {
  const regex = /\\u\{([0-9a-fA-F]+)\}/g
  let r
  const result = []
  while ((r = regex.exec(s))) {
    result.push({
      codePoint: r[1],
      range: [start + r.index, start + regex.lastIndex]
    })
  }
  return result
}
function toHex(num) {
  return ('0000' + num.toString(16).toUpperCase()).substr(-4)
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid unicode code point escape.'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    function report(node, targets) {
      targets.forEach((target) => {
        const range = target.range
        const codePoint = target.codePoint
        context.report({
          node,
          loc: {
            start: sourceCode.getLocFromIndex(range[0]),
            end: sourceCode.getLocFromIndex(range[1]),
          },
          message: 'Unexpected Unicode code point escape. {{codePoint}}',
          data: {
            codePoint: `\\u{${codePoint}}`
          },
          fix(fixer) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
            let code = Number('0x' + codePoint)
            if (
              !isFinite(code) ||       // `NaN`, `+Infinity`, or `-Infinity`
              code < 0 ||              // not a valid Unicode code point
              code > 0x10FFFF ||       // not a valid Unicode code point
              Math.floor(code) != code // not an integer
            ) {
              return undefined
            }
            let replacement
            if (code <= 0xFFFF) { // BMP code point
              replacement = toHex(code)
            } else { // Astral code point; split in surrogate halves
              // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              code -= 0x10000;
              const highSurrogate = (code >> 10) + 0xD800;
              const lowSurrogate = (code % 0x400) + 0xDC00;
              replacement = `${toHex(highSurrogate)}\\u${toHex(lowSurrogate)}`
            }
            return fixer.replaceTextRange([range[0] + 2, range[1]], replacement)
          }
        })
      })
    }
    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          const targets = findUnicodeCodePointEscapes(node.raw, node.start)
          report(node, targets)
        } else if (node.regex) {
          const targets = findUnicodeCodePointEscapes(node.raw, node.start)
          report(node, targets)
        }
      },
      TemplateLiteral(node) {
        node.quasis.forEach((q) => {
          const targets = findUnicodeCodePointEscapes(q.value.raw, q.start)
          report(q, targets)
        })
      },

    };
  }
};
