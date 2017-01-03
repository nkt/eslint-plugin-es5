'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid call super()'
    },
    schema: []
  },
  create(context) {
    function isSuperCall(node) {
      if (node.callee) {
        if (node.callee.type === 'Super') {
          return true;
        }

        if (node.callee.object && node.callee.object.type) {
          if (node.callee.object.type === 'Super') {
            return true;
          }
        }
      }

      return false;
    }

    return {
      CallExpression(node) {
        if (isSuperCall(node)) {
          context.report({
            node,
            message: 'Unexpected super() call.'
          });
        }
      }
    };
  }
};
