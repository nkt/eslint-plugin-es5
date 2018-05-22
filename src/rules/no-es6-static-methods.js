'use strict';

const es6StaticFunctions = {
  'Array.from': true,
  'Array.of': true,
  'Math.acosh': true,
  'Math.hypot': true,
  'Math.trunc': true,
  'Math.imul': true,
  'Math.sign': true,
  'Number.isNaN': true,
  'Number.isFinite': true,
  'Number.isSafeInteger': true,
  'Object.assign': true,
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
        if (node.callee && node.callee.property && node.callee.object) {
          const functionName = node.callee.object.name + '.' + node.callee.property.name;
          if (es6StaticFunctions[functionName]) {
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
