'use strict';

const fs = require('fs');
const path = require('path');
const { RuleTester } = require('eslint');
const plugin = require('../index');

Object.keys(plugin.rules).forEach((ruleName) => {
  const tester = new RuleTester();

  tester.run(`es5/${ruleName}`, plugin[ruleName], require(`./rules/${ruleName}`));
});
