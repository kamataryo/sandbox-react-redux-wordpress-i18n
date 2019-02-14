# SANDBOX React Redux WordPress i18n


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
