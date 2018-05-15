'use strict'

module.exports = {
  valid: ['/foo/;', '/foo/g;', 'var foo = /foo/;'],
  invalid: [
    { code: '/foo/u', errors: [{ message: 'Unexpected Unicode RegExp.' }] },
    { code: '/foo/ug', errors: [{ message: 'Unexpected Unicode RegExp.' }] },
    { code: '/foo/gu', errors: [{ message: 'Unexpected Unicode RegExp.' }] },
    {
      code: 'var foo = /foo/u;',
      errors: [{ message: 'Unexpected Unicode RegExp.' }]
    }
  ]
}
