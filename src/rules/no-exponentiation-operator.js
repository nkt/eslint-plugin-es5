'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid exponentiation operator'
    },
    schema: []
  },
  create(context) {
    return {
      BinaryExpression(node) {
        if (node.operator === '**') {
          context.report({
            node,
            message: 'Unexpected exponentiation operator.'
          });
        }
      },
      AssignmentExpression(node) {
        if (node.operator === '**=') {
          context.report({
            node,
            message: 'Unexpected exponentiation operator.'
          });
        }
      }
    };
  }
};
