# SANDBOX React Redux WordPress i18n

## Get Started

```shell
$ git clone git@github.com:kamataryo/sandbox-react-redux-wordpress-i18n.git
$ cd sandbox-react-redux-wordpress-i18n
$ yarn
$ npm run po2json # need to fix po2json first. see below.
$ npm start
```

## Tips

monkey patch to fix po2json:

```javascript
require('fs').writeFileSync(
  './node_modules/.bin/po2json',
  require('fs')
    .readFileSync('./node_modules/.bin/po2json')
    .toString()
    .split('\r\n')
    .join('\n')
);
```
