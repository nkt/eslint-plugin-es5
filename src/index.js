'use strict';

module.exports = {
  rules: {
    'no-arrow-functions': require('./rules/no-arrow-functions'),
    'no-block-scoped-functions': require('./rules/no-block-scoped-functions'),
    'no-block-scoping': require('./rules/no-block-scoping'),
    'no-classes': require('./rules/no-classes'),
    'no-computed-properties': require('./rules/no-computed-properties'),
    'no-constants': require('./rules/no-constants'),
    'no-destructuring': require('./rules/no-destructuring'),
    'no-duplicate-keys': require('./rules/no-duplicate-keys'),
    'no-for-of': require('./rules/no-for-of'),
    'no-function-name': require('./rules/no-function-name'),
    'no-literals': require('./rules/no-literals'),
    'no-object-super': require('./rules/no-object-super'),
    'no-parameters': require('./rules/no-parameters'),
    'no-shorthand-properties': require('./rules/no-shorthand-properties'),
    'no-spread': require('./rules/no-spread'),
    'no-sticky-regex': require('./rules/no-sticky-regex'),
    'no-template-literals': require('./rules/no-template-literals'),
    'no-typeof-symbol': require('./rules/no-typeof-symbol'),
    'no-unicode-regex': require('./rules/no-unicode-regex')
  }
};
