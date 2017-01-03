eslint-plugin-es5
=================

[![CircleCI](https://circleci.com/gh/nkt/eslint-plugin-es5.svg?style=shield)](https://circleci.com/gh/nkt/eslint-plugin-es5)

ESLint plugin deny ES2015

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

License
-------
[MIT](LICENSE)
