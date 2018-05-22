'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid shorthand properties'
    },
    schema: [],
    fixable: 'code'
  },
  create(context) {
    return {
      Property(node) {
        if (node.shorthand || node.method) {
          context.report({
            node,
            message: 'Unexpected object shorthand property.',
            fix(fixer) {
              if (node.shorthand) {
                return fixer.insertTextAfter(node.key, `: ${node.key.name}`);
              }
              if (node.method) {
                return fixer.replaceText(node.key, `${node.key.name}: function`);
              }
              return null
            }
          });
        }
      }
    };
  }
};
