'use strict';

const RuleTester = require('eslint').RuleTester;
const plugin = require('../src/index');

Object.keys(plugin.rules).forEach((ruleName) => {
  const tester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2016,
      sourceType: 'module'
    }
  });

  tester.run(`es5/${ruleName}`, plugin.rules[ruleName], require(`./rules/${ruleName}`));
});
