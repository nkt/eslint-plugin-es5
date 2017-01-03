'use strict';

const fs = require('fs');
const path = require('path');
const { RuleTester } = require('eslint');
const plugin = require('../src/index');

Object.keys(plugin.rules).forEach((ruleName) => {
  const tester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2016
    }
  });

  tester.run(`es5/${ruleName}`, plugin.rules[ruleName], require(`./rules/${ruleName}`));
});
