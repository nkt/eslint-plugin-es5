'use strict';

module.exports = {
  valid: [
    'var foo = [];',
    'var foo = {}',
    'function foo(bar) {}'
  ],
  invalid: [
    { code: 'var [ foo ] = [];', output: null, errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'var { foo } = {};', output: null, errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'function foo([ bar ]) {}', output: null, errors: [{ message: 'Unexpected destructuring.' }] },
    { code: 'function foo({ bar }) {}', output: null, errors: [{ message: 'Unexpected destructuring.' }] },
    // ObjectPattern 
    {
      code: 'var { a } = foo;',
      output: 'var a=foo.a;',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'let { a, b } = foo;',
      output: 'let a=foo.a,b=foo.b;',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { a: aa, b: bb } = foo, c = d;',
      output: 'var aa=foo.a,bb=foo.b, c = d;',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { a: {a1, a2: aa2} } = foo;',
      output: 'var a1=foo.a.a1,aa2=foo.a.a2;',
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { "s-u-b": {1: a, ["b"]: b} } = foo;',
      output: 'var a=foo["s-u-b"][1],b=foo["s-u-b"]["b"];',
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: '({ a: {a1: aa1} } = foo, { b: {b1: bb1} } = bar);',
      output: '(aa1=foo.a.a1, bb1=bar.b.b1);',
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { a, b } = { a:1, b:2 };',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { [a]: a } = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { a = 1 } = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var { a } = foo.bar().baz;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: '({ a } = foo.bar().baz)',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    // ArrayPattern
    {
      code: 'var [ a ] = foo;',
      output: 'var a=foo[0];',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'const [ a, b ] = foo;',
      output: 'const a=foo[0],b=foo[1];',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [,, a,, b ] = foo;',
      output: 'var a=foo[2],b=foo[4];',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: '([ a ] = foo);',
      output: '(a=foo[0]);',
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [ a, b ] = [ 1, 2 ];',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [ ,,, ] = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [ a = 1 ] = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [ a ] = foo.bar().baz;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    {
      code: '([ a ] = foo.bar().baz)',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }]
    },
    // mix
    {
      code: 'var [{a1:aa1}] = foo;',
      output: 'var aa1=foo[0].a1;',
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var {a : [a1]} = foo;',
      output: 'var a1=foo.a[0];',
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var [{a1:aa1 = 1}] = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
    {
      code: 'var {a : [a1 = 1]} = foo;',
      output: null,
      errors: [{ message: 'Unexpected destructuring.' }, { message: 'Unexpected destructuring.' }]
    },
  ]
};
