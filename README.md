# use-yarn
> Force users to use yarn instead of npm.

If run from npm instead of yarn, the process will exit with error code `1`
and print [this error message](https://raw.githubusercontent.com/adjohnson916/use-yarn/master/message.txt).

Note: this will not work if the user uses `npm install --ignore-scripts`.

## Install
```
yarn add use-yarn
```

## Use
### CLI
For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "use-yarn"
  }
}
```
### JS
```js
var useYarn = require('use-yarn')

useYarn()

// or a custom message
useYarn('You idiot!')
```

## Etc.

If you want to catch missed updates to `yarn.lock` on CI, try [danger-yarn-lock](https://github.com/adjohnson916/danger-yarn-lock).
