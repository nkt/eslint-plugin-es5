'use strict';

/**
 * Walks backwards through a chain of callees to get the original.
 */
function getOriginalCallee(callee) {
  while (callee.type === 'MemberExpression' && callee.object.type === 'CallExpression') {
    callee = callee.object.callee;
  }
  return callee;
}

function isLodash(callee) {
  // Check for direct calls
  if(callee.object.name === '_') {
    return true;
  }

  // Check for _.chain
  const original = getOriginalCallee(callee);
  if(original.type === 'MemberExpression'
      && original.object.name === '_'
      && original.property.name === 'chain') {
    return true;
  }

  return false;
}

function isPermitted(callee) {
  return isLodash(callee);
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
        if(!node.callee || !node.callee.property) {
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
        if (es6Functions.indexOf(functionName) > -1 && !isPermitted(node.callee)) {
          context.report({
            node: node.callee.property,
            message: 'ES6 methods not allowed: ' + functionName
          });
        }
      }
    };
  }
};
