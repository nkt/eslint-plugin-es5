'use strict';

function arrayExpressionToArrayConcat(node, sourceCode) {
  const argCodes = node.elements.map((e) => {
    if (e.type === 'SpreadElement') {
      return sourceCode.getText(e.argument)
    }
    return `[${sourceCode.getText(e)}]`
  })
  return `[].concat(${argCodes.join(',')})`
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid spread expressions'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    return {
      SpreadElement(node) {
        context.report({
          node,
          message: 'Unexpected spread expression.',
          fix(fixer) {
            const parent = node.parent
            if (!parent) {
              return undefined
            }
            if (parent.type === 'ArrayExpression') {
              return fixer.replaceText(parent, arrayExpressionToArrayConcat(parent, sourceCode))
            }

            // Doesn't autofix because it becomes an ugly code. (CallExpression | NewExpression)
            return undefined
          }
        });
      }
    };
  }
};
