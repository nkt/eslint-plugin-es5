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
    const options = Object.assign({ let: false, const: false }, context.options[0]);

    return {
      VariableDeclaration(node) {
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
