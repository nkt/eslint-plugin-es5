'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid spread expressions'
    },
    schema: []
  },
  create(context) {
    return {
      SpreadElement(node) {
        context.report({
          node,
          message: 'Unexpected spread expression.'
        });
      }
    };
  }
};
