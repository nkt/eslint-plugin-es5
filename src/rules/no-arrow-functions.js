'use strict';

function toFunctionExpression(node, sourceCode) {
  const params = node.params;
  const paramText = params.length ?
    sourceCode.text.slice(params[0].range[0], params[params.length - 1].range[1]) :
    ''

  const bodyText = sourceCode.getText(node.body)
  if (node.body.type === 'BlockStatement') {
    return `function(${paramText})${bodyText}`;
  } else {
    return `function(${paramText}){return ${bodyText}}`;
  }
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid arrow-functions'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    return {
      ArrowFunctionExpression(node) {
        context.report({
          node,
          message: 'Unexpected arrow-function expression.',
          fix(fixer) {
            const code = sourceCode.getText(node)
            const hasThis = /this/.test(code)
            const functionText = toFunctionExpression(node, sourceCode)
            return fixer.replaceText(node, hasThis ? `${functionText}.bind(this)` : functionText)
          }
        });
      }
    };
  }
};
