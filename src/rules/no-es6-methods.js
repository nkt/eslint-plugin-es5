'use strict';

function isPermitted(callee) {
  const objectExceptions = ['_'];
  if(objectExceptions.indexOf(callee.object.name) === -1) {
    return true;
  }
  return false;
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid methods added in ES6'
    },
    schema: []
  },
  create(context) {
    return {
      CallExpression(node) {
        if(!node.callee || !node.callee.property || isPermitted(node.callee)) {
          return;
        }
        const functionName = node.callee.property.name;
        const es6ArrayFunctions = [
          'find',
          'findIndex',
          'copyWithin',
          'values',
          'fill'
        ];
        const es6StringFunctions = [
          'startsWith',
          'endsWith',
          'includes',
          'repeat'
        ];
        const es6Functions = [].concat(
          es6ArrayFunctions,
          es6StringFunctions
        );
        if (es6Functions.indexOf(functionName) > -1) {
          context.report({
            node: node.callee.property,
            message: 'ES6 methods not allowed: ' + functionName
          });
        }
      }
    };
  }
};
