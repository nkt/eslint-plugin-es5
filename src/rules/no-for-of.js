'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid for-of statement'
    },
    schema: []
  },
  create(context) {
    return {
      ForOfStatement(node) {
        context.report({
          node,
          message: 'Unexpected for-of statement.'
        });
      }
    };
  }
};
