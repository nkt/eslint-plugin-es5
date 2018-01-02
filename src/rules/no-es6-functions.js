'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid arrow-functions'
    },
    schema: []
  },
  create(context) {
    return {
      CallExpression(node) {
        if(node.callee && node.callee.property) {
          const functionName = node.callee.property.name;
          const es6Functions = ['find', 'fill'];
          if(es6Functions.indexOf(functionName) > -1) {
            context.report({
              node,
              message: 'Unexpected ES6 function call.'
            });
          }
        }
      }
    };
  }
};
