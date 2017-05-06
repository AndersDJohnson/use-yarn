var isNpmNotYarn = require('is-npm-not-yarn')
var fs = require('fs')

function useYarn(message) {
  if (isNpmNotYarn) {
    message = message || fs.readFileSync('message.txt', 'utf8')
    console.error(message)
    process.exit(1)
  }
}

module.exports = useYarn
