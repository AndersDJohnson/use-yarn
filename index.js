var isNpmNotYarn = require('is-npm-not-yarn')

function useYarn(message) {
  if (isNpmNotYarn && process.env.DISABLE_USE_YARN !== 'true') {
    console.error(message)
    process.exit(1)
  }
}

module.exports = useYarn
