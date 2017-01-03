'use strict';

module.exports = {
  valid: [
    '\'test\'',
    '"test"'
  ],
  invalid: [
    { code: '`test`', errors: [{ message: 'Unexpected template-string expression.' }] },
    { code: '`test${foo}`', errors: [{ message: 'Unexpected template-string expression.' }] }
  ]
};
