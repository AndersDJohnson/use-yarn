var isNpmNotYarn = require('is-npm-not-yarn')
var fs = require('fs')
var path = require('path')

function useYarn(message) {
  if (isNpmNotYarn) {
    message = message || fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8')
    console.error(message)
    process.exit(1)
  }
}

module.exports = useYarn
