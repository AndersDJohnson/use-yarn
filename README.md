# use-yarn
> Force users to use yarn instead of npm.

If run from npm instead of yarn, the process will exit with error code `1`
and print [this error message](https://raw.githubusercontent.com/AndersDJohnson/use-yarn/master/message.txt).

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
