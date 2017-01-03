'use strict';

module.exports = {
  meta: {
    docs: {
      description: ''
    },
    schema: []
  },
  create(context) {
    function report(node) {
      context.report({
        node,
        message: 'Unexpected Unicode RegExp.'
      });
    }

    return {
      Literal(node) {
        if (node.regex) {
          if (node.regex.flags.includes('u')) {
            report(node);
          }
        }
      }
    };
  }
};
