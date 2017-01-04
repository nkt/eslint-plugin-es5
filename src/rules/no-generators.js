'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid generators.'
    },
    schema: []
  },
  create(context) {
    function checkAndReport(node) {
      if (node.generator) {
        context.report({
          node,
          message: 'Unexpected generator.'
        });
      }
    }

    return {
      FunctionDeclaration(node) {
        checkAndReport(node);
      },
      FunctionExpression(node) {
        checkAndReport(node);
      }
    };
  }
};
