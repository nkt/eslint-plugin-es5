'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid block-scoping'
    },
    schema: [{
      type: 'object',
      properties: {
        let: { type: 'boolean' },
        const: { type: 'boolean' }
      }
    }]
  },
  create(context) {
    return {
      VariableDeclaration(node) {
        const options = Object.assign({ let: false, const: false }, context.options[0]);

        if (node.kind === 'var' || options[node.kind]) {
          return;
        }

        context.report({
          node,
          message: `Unexpected ${node.kind} declaration.`
        });
      }
    };
  }
};
