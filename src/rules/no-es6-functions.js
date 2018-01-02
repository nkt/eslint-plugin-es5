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
        var functionName = node.callee.property.name;
        var es6Functions = ['find', 'fill'];
        if(es6Functions.indexOf(functionName) > -1) {
          context.report({
            node,
            message: 'Unexpected ES6 function call.'
          });
        }
      }
    };
  }
};
