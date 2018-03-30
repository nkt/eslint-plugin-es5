'use strict';

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
            const ss = [];
            node.quasis.forEach((q, i) => {
              const value = q.value.raw
              if (value !== '') {
                const escaped = value.replace(`'`, `\\'`).replace('\\`', '`')
                ss.push(`'${escaped}'`);
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
            return fixer.replaceText(node, ss.join('+'))
          }
        });
      }
    };
  }
};
