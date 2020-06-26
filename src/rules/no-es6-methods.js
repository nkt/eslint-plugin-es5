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

function isJQuery(callee) {
  const original = getOriginalCallee(callee);

  if(original.type === 'Identifier' && (original.name === '$' || original.name === 'jQuery')) {
    return true;
  }

  // Support the popular convention of prefixing a variable with $ to show that
  // it refers to a jQuery object: https://stackoverflow.com/a/553734
  if(original.type === 'MemberExpression' && original.object.type === 'Identifier' && original.object.name[0] === '$') {
    return true;
  }

  return false;
}

function isPermitted(callee) {
  return isLodash(callee) || isJQuery(callee);
}

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
        },
        additionalMethods: {
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
    const additionalMethods = new Set(options.additionalMethods);

    return {
      CallExpression(node) {
        if(!node.callee || !node.callee.property) {
          return;
        }
        const functionName = node.callee.property.name;
        const allArrayFunctions = [
          'concat',
          'copyWithin',
          'entries',
          'every',
          'fill',
          'filter',
          'find',
          'findIndex',
          'flat',
          'flatMap',
          'forEach',
          'from',
          'includes',
          'indexOf',
          'isArray',
          'join',
          'keys',
          'lastIndexOf',
          'length',
          'map',
          'of',
          'pop',
          'push',
          'reduce',
          'reduceRight',
          'reverse',
          'shift',
          'slice',
          'some',
          'sort',
          'splice',
          'toLocaleString',
          'toSource',
          'toString',
          'unshift',
          'values'
        ];
        const allStringFunctions = [
          'charAt',
          'charCodeAt',
          'codePointAt',
          'concat',
          'endsWith',
          'fromCharCode',
          'fromCodePoint',
          'includes',
          'indexOf',
          'lastIndexOf',
          'length',
          'localeCompare',
          'match',
          'matchAll',
          'normalize',
          'padEnd',
          'padStart',
          'raw',
          'repeat',
          'replace',
          'replaceAll',
          'search',
          'slice',
          'split',
          'startsWith',
          'substring',
          'toLocaleLowerCase',
          'toLocaleUpperCase',
          'toLowerCase',
          'toSource',
          'toString',
          'toUpperCase',
          'trim',
          'trimEnd',
          'trimStart'
        ];
        const allFunctions = [].concat(
          allArrayFunctions,
          allStringFunctions
        )
        const additionalFunctions = allFunctions.filter(name => additionalMethods.has(name));

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
        const baseEs6Functions = [].concat(
          es6ArrayFunctions,
          es6StringFunctions,
          additionalFunctions
        );
        const es6functions = baseEs6Functions.filter((name) => !exceptMethods.has(name));

        if (es6functions.indexOf(functionName) > -1 && !isPermitted(node.callee)) {
          context.report({
            node: node.callee.property,
            message: 'ES6 methods not allowed: ' + functionName
          });
        }
      }
    };
  }
};
