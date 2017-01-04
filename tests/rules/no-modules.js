'use strict';

module.exports = {
  valid: [
    'require(\'foo\')',
    'exports.foo = foo;',
    'module.exports = foo;'
  ],
  invalid: [
    { code: 'import \'foo\';', errors: [{ message: 'Unexpected import statement. Use require() instead.' }] },
    { code: 'import foo from \'foo\';', errors: [{ message: 'Unexpected import statement. Use require() instead.' }] },
    { code: 'export { foo };', errors: [{ message: 'Unexpected export statement. Use exports instead.' }] },
    { code: 'export default foo;', errors: [{ message: 'Unexpected default export statement. Use module.exports instead.' }] }
  ]
};
