'use strict';

module.exports = {
  configs: {
    'no-es2015': {
      plugins: [
        'es5'
      ],
      rules: {
        'es5/no-arrow-functions': 2,
        'es5/no-block-scoping': 2,
        'es5/no-classes': 2,
        'es5/no-computed-properties': 2,
        'es5/no-default-parameters': 2,
        'es5/no-destructuring': 2,
        'es5/no-for-of': 2,
        'es5/no-object-super': 2,
        'es5/no-shorthand-properties': 2,
        'es5/no-spread': 2,
        'es5/no-template-literals': 2,
        'es5/no-typeof-symbol': 2,
        'es5/no-unicode-regex': 2
      }
    }
  }
  rules: {
    'no-arrow-functions': require('./rules/no-arrow-functions'),
    'no-block-scoping': require('./rules/no-block-scoping'),
    'no-classes': require('./rules/no-classes'),
    'no-computed-properties': require('./rules/no-computed-properties'),
    'no-default-parameters': require('./rules/no-default-parameters'),
    'no-destructuring': require('./rules/no-destructuring'),
    'no-for-of': require('./rules/no-for-of'),
    'no-object-super': require('./rules/no-object-super'),
    'no-shorthand-properties': require('./rules/no-shorthand-properties'),
    'no-spread': require('./rules/no-spread'),
    'no-template-literals': require('./rules/no-template-literals'),
    'no-typeof-symbol': require('./rules/no-typeof-symbol'),
    'no-unicode-regex': require('./rules/no-unicode-regex')
  }
};
