'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Forbid Binary and Octal literals.'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    function report(node, phrase) {
      context.report({
        node,
        message: 'Unexpected {{phrase}} literal.',
        data: {
          phrase
        },
        fix(fixer) {
          return fixer.replaceText(node, node.value)
        }
      })
    }
    return {
      Literal(node) {
        if (typeof node.value === 'number') {
          if (/^0b/i.test(node.raw)) {
            report(node, 'Binary')
          } else if (/^0o/i.test(node.raw)) {
            report(node, 'Octal')
          }
        }
      },
    };
  }
};