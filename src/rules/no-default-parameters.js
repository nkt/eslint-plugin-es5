'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid default parameters.'
    },
    schema: []
  },
  create(context) {
    return {
      AssignmentPattern(node) {
        context.report({
          node,
          message: 'Unexpected parameter with default value.'
        });
      }
    };
  }
};
