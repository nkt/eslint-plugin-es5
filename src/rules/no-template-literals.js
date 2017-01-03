'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid template literals'
    },
    schema: []
  },
  create(context) {
    return {
      TemplateLiteral(node) {
        context.report({
          node,
          message: 'Unexpected template-string expression.'
        });
      }
    };
  }
};
