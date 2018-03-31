'use strict';

function switchingEscape(s) {
  return s
    .replace(`'`, `\\'`)
    .replace('\r', '\\r')
    .replace('\n', '\\n')
    .replace('\\`', '`')
    .replace('\\$', '$')
}
function templateLiteralToStringConcat(node, sourceCode) {
  const ss = [];
  node.quasis.forEach((q, i) => {
    const value = q.value.raw
    if (value !== '') {
      ss.push(`'${switchingEscape(value)}'`)
    }
    
    if (i < node.expressions.length) {
      const e = node.expressions[i]
      const text = sourceCode.getText(e)
      ss.push(text);
    }
  })
  if (!ss[0] || ss[0].indexOf(`'`) !== 0) {
    ss.unshift(`''`);
  }
  return ss.join('+')
}

function templateLiteralToTaggedArguments(node, sourceCode) {
  const strings = node.quasis.map((q) => `'${switchingEscape(q.value.raw)}'`)
  const values = node.expressions.map((e) => sourceCode.getText(e))
  return `([${strings.join(',')}],${values.join(',')})`
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid template literals'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    return {
      TemplateLiteral(node) {
        context.report({
          node,
          message: 'Unexpected template-string expression.',
          fix(fixer) {
            if (node.parent && node.parent.type === 'TaggedTemplateExpression') {
              return fixer.replaceText(node, templateLiteralToTaggedArguments(node, sourceCode))
            } else {
              return fixer.replaceText(node, templateLiteralToStringConcat(node, sourceCode))
            }
          }
        });
      }
    };
  }
};
