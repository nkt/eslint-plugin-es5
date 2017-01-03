eslint-plugin-es5
=================

[![CircleCI](https://circleci.com/gh/nkt/eslint-plugin-es5.svg?style=shield)](https://circleci.com/gh/nkt/eslint-plugin-es5)

ESLint plugin for ES5 users.

Installation
------------

```
npm install --save-dev eslint-plugin-es5
```

Usage
-----

Add into your `.eslintrc`:
```json
{
  "rules": {
    "es5/no-arrow-functions": "error"
  }
}
```

You can read more about other rules bellow.

Also you can extend one of presets:
```json
{
  "extends": [
    "eslint:recommended",
    "es5:no-es2015"
  ]
}
```

Available presets:

  - `es5:no-es2015`: Forbid ES2015 usage.
  - `es5:no-es2016`: Forbid ES2016 usage.

List of supported rules
-----------------------

  - `es5/no-arrow-functions`: Forbid [arrow-functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this).
  - `es5/no-block-scoping`: Forbid `let` and `const` declarations. You can enable them using options: `"es5/no-block-scoping": ["error", { "let": true }]`
  - `es5/no-classes`: Forbid [ES2015 classes](https://babeljs.io/learn-es2015/#ecmascript-2015-features-classes).
  - `es5/no-computed-properties`: Forbid [computed properties](https://babeljs.io/learn-es2015/#ecmascript-2015-features-enhanced-object-literals).
  - `es5/no-destructuring`: Forbid [destructuring statements](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring).
  - `es5/exponentiation-operator`: Forbid exponentiation operator `a ** b` usage.
  - `es5/no-default-parameters`: Forbid [default parameters](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread).
  - `es5/no-for-of`: Forbid [`for-of` statements](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of).
  - `es5/no-object-super`: Forbid `super`/`super.foo()` calls.
  - `es5/no-shorthand-properties`: Forbid [shorthand properties](https://babeljs.io/learn-es2015/#ecmascript-2015-features-enhanced-object-literals).
  - `es5/no-spread`: Forbid [...spread expressions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread).
  - `es5/no-template-literals`: Forbid [template strings](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings) usage.
  - `es5/no-typeof-symbol`: Forbid `typeof foo === 'symbol'` [checks](https://babeljs.io/learn-es2015/#ecmascript-2015-features-symbols).
  - `es5/no-unicode-regex`: Forbid [Unicode support](https://babeljs.io/learn-es2015/#ecmascript-2015-features-unicode) in RegExp.

License
-------
[MIT](LICENSE)
