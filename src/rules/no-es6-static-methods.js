'use strict';

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
        if(node.callee && node.callee.property && node.callee.object) {
          const functionName = node.callee.object.name + '.' + node.callee.property.name;
          const es6StaticFunctions = [
            'Array.from',
            'Array.of',
            'Math.acosh',
            'Math.hypot',
            'Math.trunc',
            'Math.imul',
            'Math.sign',
            'Number.isNaN',
            'Number.isFinite',
            'Number.isSafeInteger',
            'Object.assign',
          ];
          if(es6StaticFunctions.indexOf(functionName) > -1) {
            context.report({
              node: node.callee.property,
              message: 'ES6 static methods not allowed: ' + functionName
            });
          }
        }
      }
    };
  }
};
