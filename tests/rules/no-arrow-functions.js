'use strict';

module.exports = {
  valid: [
    'function foo() {}',
    'var foo = function () {};'
  ],
  invalid: [
    {
      code: 'var foo = () => {};',
      output: 'var foo = function(){};',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = bar => baz;',
      output: 'var foo = function(bar){return baz};',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = (bar) => baz;',
      output: 'var foo = function(bar){return baz};',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = ( a,b,  c) => d().e.f',
      output: 'var foo = function(a,b,  c){return d().e.f}',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = (a) => this[a]',
      output: 'var foo = function(a){return this[a]}.bind(this)',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = (a => this[a])',
      output: 'var foo = (function(a){return this[a]}.bind(this))',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = params => ({foo: bar})',
      output: 'var foo = function(params){return {foo: bar}}',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = (param1, param2, ...rest) => { statements }',
      output: 'var foo = function(param1, param2, ...rest){ statements }',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var foo = (param1 = defaultValue1, param2, paramN = defaultValueN) => { statements }',
      output: 'var foo = function(param1 = defaultValue1, param2, paramN = defaultValueN){ statements }',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    },
    {
      code: 'var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;',
      output: 'var f = function([a, b] = [1, 2], {x: c} = {x: a + b}){return a + b + c};',
      errors: [{ message: 'Unexpected arrow-function expression.' }]
    }
  ]
};
