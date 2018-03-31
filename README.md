eslint-plugin-es5
=================

[![CircleCI](https://circleci.com/gh/nkt/eslint-plugin-es5.svg?style=shield)](https://circleci.com/gh/nkt/eslint-plugin-es5)
[![Cult Of Martians](http://cultofmartians.com/assets/badges/badge.svg)](http://cultofmartians.com/tasks/eslint-es5.html)

ESLint plugin for ES5 users.

Why?
----

Sometimes someone doesn't want or can't to use Babel.
Even if you support modern browsers or node.js, JS engines have bugs
like broken [block-scoping](http://stackoverflow.com/q/32665347).
Maybe you only want to forbid usage of `for-of` in your project.

If this concerns you, this plugin should help you.

Installation
------------

```
npm install --save-dev eslint-plugin-es5
```

Usage
-----

Add the plugin to your `.eslintrc`:

```json
{
  "plugins": [
    "es5"
  ]
}
```

And then any of the rules [listed below](#list-of-supported-rules) like this:

```json
{
  "rules": {
    "es5/no-arrow-functions": "error"
  }
}
```

Also you can extend one of presets:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:es5/no-es2015"
  ]
}
```

Available presets:

  - `plugin:es5/no-es2015`: Forbid ES2015 usage.
  - `plugin:es5/no-es2016`: Forbid ES2016 usage.

List of supported rules
-----------------------

  - `es5/no-arrow-functions`:wrench:: Forbid [arrow-functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this).
  - `es5/no-binary-and-octal-literals`:wrench:: Forbid [binary and octal literals](https://babeljs.io/learn-es2015/#binary-and-octal-literals).
  - `es5/no-block-scoping`: Forbid `let` and `const` declarations. You can enable them using options: `"es5/no-block-scoping": ["error", { "let": true }]`
  - `es5/no-classes`: Forbid [ES2015 classes](https://babeljs.io/learn-es2015/#ecmascript-2015-features-classes).
  - `es5/no-computed-properties`: Forbid [computed properties](https://babeljs.io/learn-es2015/#ecmascript-2015-features-enhanced-object-literals).
  - `es5/no-default-parameters`: Forbid [default parameters](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread).
  - `es5/no-destructuring`:wrench:: Forbid [destructuring statements](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring).
  - `es5/no-exponentiation-operator`: Forbid exponentiation operator `a ** b` usage.
  - `es5/no-for-of`: Forbid [`for-of` statements](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of).
  - `es5/no-generators`: Forbid [generators](https://babeljs.io/learn-es2015/#ecmascript-2015-features-generators) usage.
  - `es5/no-modules`: Forbid ES2015 [modules](https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules) usage.
  - `es5/no-object-super`: Forbid `super`/`super.foo()` calls.
  - `es5/no-rest-parameters`: Forbid [rest parameters](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread).
  - `es5/no-shorthand-properties`: Forbid [shorthand properties](https://babeljs.io/learn-es2015/#ecmascript-2015-features-enhanced-object-literals).
  - `es5/no-spread`:wrench:: Forbid [...spread expressions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread).
  - `es5/no-template-literals`:wrench:: Forbid [template strings](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings) usage.
  - `es5/no-typeof-symbol`: Forbid `typeof foo === 'symbol'` [checks](https://babeljs.io/learn-es2015/#ecmascript-2015-features-symbols).
  - `es5/no-unicode-code-point-escape`:wrench:: Forbid [Unicode support](https://babeljs.io/learn-es2015/#unicode) in code point escape.
  - `es5/no-unicode-regex`: Forbid [Unicode support](https://babeljs.io/learn-es2015/#ecmascript-2015-features-unicode) in RegExp.

License
-------
[MIT](LICENSE)
