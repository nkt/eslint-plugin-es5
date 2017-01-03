'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid destructuring'
    },
    schema: []
  },
  create(context) {
    function report(node) {
      context.report({
        node,
        message: 'Unexpected destructuring.'
      });
    }

    return {
      ArrayPattern(node) {
        report(node);
      },
      ObjectPattern(node) {
        report(node);
      }
    };
  }
};
