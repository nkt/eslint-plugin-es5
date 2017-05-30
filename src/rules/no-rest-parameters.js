'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid rest parameters'
    },
    schema: []
  },
  create(context) {
    return {
      RestElement(node) {
        context.report({
          node,
          message: 'Unexpected rest parameter.'
        });
      },
      ExperimentalRestProperty(node) {
        context.report({
          node,
          message: 'Unexpected rest parameter.'
        });
      }
    };
  }
};
