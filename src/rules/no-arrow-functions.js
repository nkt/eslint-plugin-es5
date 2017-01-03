'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'deny arrow-functions'
    },
    schema: []
  },
  create(context) {
    return {
      ArrowFunctionExpression(node) {
        context.report({
          node,
          message: 'Unexpected arrow-function expression.'
        });
      }
    };
  }
};
