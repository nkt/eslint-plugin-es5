'use strict';

const es6Functions = {
  // array functions
  find: true,
  findIndex: true,
  copyWithin: true,
  values: true,
  fill: true,
  // string functions
  startsWith: true,
  endsWith: true,
  includes: true,
  repeat: true
}

const objectExceptions = {
  '_': true
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
        if (node.callee && node.callee.property && !objectExceptions[node.callee.object.name]) {
          const functionName = node.callee.property.name;
          if (es6Functions[functionName]) {
            context.report({
              node: node.callee.property,
              message: 'ES6 methods not allowed: ' + functionName
            });
          }
        }
      }
    };
  }
};
