'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid modules syntax.'
    },
    schema: []
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        context.report({
          node,
          message: 'Unexpected import statement. Use require() instead.'
        });
      },
      ExportNamedDeclaration(node) {
        context.report({
          node,
          message: 'Unexpected export statement. Use exports instead.'
        });
      },
      ExportDefaultDeclaration(node) {
        context.report({
          node,
          message: 'Unexpected default export statement. Use module.exports instead.'
        });
      }
    };
  }
};
