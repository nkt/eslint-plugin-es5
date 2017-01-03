'use strict';

module.exports = {
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
