'use strict';

module.exports = {
  rules: {
    'no-arrow-functions': require('./src/rules/no-arrow-functions'),
    'no-block-scoped-functions': require('./src/rules/no-block-scoped-functions'),
    'no-block-scoping': require('./src/rules/no-block-scoping'),
    'no-classes': require('./src/rules/no-classes'),
    'no-computed-properties': require('./src/rules/no-computed-properties'),
    'no-constants': require('./src/rules/no-constants'),
    'no-destructuring': require('./src/rules/no-destructuring'),
    'no-duplicate-keys': require('./src/rules/no-duplicate-keys'),
    'no-for-of': require('./src/rules/no-for-of'),
    'no-function-name': require('./src/rules/no-function-name'),
    'no-literals': require('./src/rules/no-literals'),
    'no-object-super': require('./src/rules/no-object-super'),
    'no-parameters': require('./src/rules/no-parameters'),
    'no-shorthand-properties': require('./src/rules/no-shorthand-properties'),
    'no-spread': require('./src/rules/no-spread'),
    'no-sticky-regex': require('./src/rules/no-sticky-regex'),
    'no-template-literals': require('./src/rules/no-template-literals'),
    'no-typeof-symbol': require('./src/rules/no-typeof-symbol'),
    'no-unicode-regex': require('./src/rules/no-unicode-regex')
  }
};
