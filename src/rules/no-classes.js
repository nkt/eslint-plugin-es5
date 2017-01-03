'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid classes'
    },
    schema: []
  },
  create(context) {
    function report(node) {
      context.report({
        node,
        message: 'Unexpected class declaration. Use function instead.'
      });
    }

    return {
      ClassDeclaration(node) {
        report(node);
      },
      ClassExpression(node) {
        report(node);
      }
    };
  }
};
