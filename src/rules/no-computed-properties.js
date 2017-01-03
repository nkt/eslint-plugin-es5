'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid computed properties.'
    },
    schema: []
  },
  create(context) {
    return {
      Property(node) {
        if (node.computed) {
          context.report({
            node,
            message: 'Unexpected computed property.'
          });
        }
      }
    };
  }
};
