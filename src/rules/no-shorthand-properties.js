'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid shorthand properties'
    },
    schema: []
  },
  create(context) {
    return {
      Property(node) {
        if (node.shorthand || node.method) {
          context.report({
            node,
            message: 'Unexpected object shorthand property.'
          });
        }
      }
    };
  }
};
