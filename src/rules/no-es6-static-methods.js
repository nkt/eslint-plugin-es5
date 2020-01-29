'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid methods added in ES6'
    },
    schema: [{
      type: 'object',
      properties: {
        exceptMethods: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }
    }]
  },
  create(context) {
    const options = Object.assign({ exceptMethods: [] }, context.options[0]);
    const exceptMethods = new Set(options.exceptMethods);

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
      'Number.isInteger',
      'Number.isSafeInteger',
      'Number.parseFloat',
      'Number.parseInt',
      'Object.assign',
      'Object.is',
      'Object.getOwnPropertySymbols',
      'Object.setPrototypeOf',
    ];
    const staticFunctions = es6StaticFunctions.filter((name) => !exceptMethods.has(name));

    return {
      CallExpression(node) {
        if(node.callee && node.callee.property && node.callee.object) {
          const functionName = node.callee.object.name + '.' + node.callee.property.name;
          if(staticFunctions.includes(functionName)) {
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
