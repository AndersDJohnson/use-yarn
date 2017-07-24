# use-yarn
> Force users to use `yarn` instead of `npm`.

If run from `npm` instead of `yarn`, the process will exit with error code `1`
and print an [error message](https://raw.githubusercontent.com/adjohnson916/use-yarn/master/message.txt).

Note: this will not work if used with `npm install --ignore-scripts`.

## Install

```
yarn add -D use-yarn
```

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "use-yarn || ( npm install --no-scripts --no-save use-yarn && use-yarn )"
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
