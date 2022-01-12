var fs = require("fs");
var path = require("path");

function useYarn(optionsOrMessage) {
  const options =
    // Backwards compatibility since we used to accept only an optional message string
    typeof optionsOrMessage === "string"
      ? { message: optionsOrMessage }
      : optionsOrMessage;

  const npm_execpath = options.npm_execpath || process.env.npm_execpath;

  const isNpmNotYarn = Boolean(npm_execpath) && !/\byarn\b/.test(npm_execpath);

  if (isNpmNotYarn && process.env.DISABLE_USE_YARN !== "true") {
    const message =
      options.message ||
      fs.readFileSync(path.resolve(__dirname, "message.txt"), "utf8");

    console.error(message);

    process.exit(1);
  }
}

module.exports = useYarn;
