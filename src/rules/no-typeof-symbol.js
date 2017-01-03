'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid typeof checks for symbols'
    },
    schema: []
  },
  create(context) {
    function isTypeOf(node) {
      return node.type === 'UnaryExpression' && node.operator === 'typeof';
    }

    function isSymbolLiteral(node) {
      switch (node.type) {
        case 'Literal':
          return node.value === 'symbol';

        case 'TemplateLiteral':
          return node.quasis.length === 1 && node.quasis[0].value.raw === 'symbol';

        default:
          return false;
      }
    }

    function isTypeOfSymbolExpression(node) {
      if (isTypeOf(node.left) && isSymbolLiteral(node.right)) {
        return true;
      }

      return isTypeOf(node.right) && isSymbolLiteral(node.left);
    }

    return {
      BinaryExpression(node) {
        if (isTypeOfSymbolExpression(node)) {
          context.report({
            node,
            message: 'Unexpected typeof Symbol detection.'
          });
        }
      }
    };
  }
};
