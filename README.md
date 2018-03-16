# use-yarn
> Force users to use `yarn` instead of `npm`.

If run from `npm` instead of `yarn`, the process will exit with error code `1`
and print an [error message](https://raw.githubusercontent.com/adjohnson916/use-yarn/master/message.txt).

Note: this will not work if used with `npm install --save-dev --ignore-scripts`.

Note: Use with `>= yarn@1` requires `>= use-yarn@2`.

## Install

[![npm install --save-dev use-yarn (copy)](https://copyhaste.com/i?t=npm%20install%20--save-dev%20use-yarn)](https://copyhaste.com/c?t=npm%20install%20--save-dev%20use-yarn "npm install --save-dev use-yarn (copy)")
[![yarn add --dev use-yarn (copy)](https://copyhaste.com/i?t=yarn%20add%20--dev%20use-yarn)](https://copyhaste.com/c?t=yarn%20add%20--dev%20use-yarn "yarn add --dev use-yarn (copy)")

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "use-yarn || ( npm install --save-dev --no-scripts --no-save use-yarn && use-yarn )"
  }
}
```

Or if you're on `npm >=5` or have [`npx`][npx]:
```json
{
  "scripts": {
     "preinstall": "npx use-yarn"
  }
}
```

You may provide a custom message via the `-m` flag:
```
{
  "scripts": {
     "preinstall": "npx use-yarn -m 'Please use yarn!'"
  }
}
```

Or, you may also provide a custom message read from a file via the `-f` flag:
```
{
  "scripts": {
     "preinstall": "npx use-yarn -f path/to/customMessage.txt"
  }
}
```

You may disable use-yarn by setting the `DISABLE_USE_YARN` environment variable to `true`:
```
{
  "scripts": {
     "preinstall": "DISABLE_USE_YARN=true npx use-yarn"
  }
}
```

### API

```js
var useYarn = require('use-yarn')

useYarn()

// or a custom message
useYarn('You idiot!')
```

## Etc.

If you want to catch missed updates to `yarn.lock` on CI, try [danger-yarn-lock](https://github.com/adjohnson916/danger-yarn-lock).


[npx]: https://www.npmjs.com/package/npx
