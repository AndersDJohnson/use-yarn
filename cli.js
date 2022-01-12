#!/usr/bin/env node

var fs = require("fs");
var argv = require("minimist")(process.argv.slice(2));
var useYarn = require(".");

if (argv.v || argv.version) {
  console.log(require("./package.json").version);
  process.exit();
}

const npm_execpath_arg = argv._[0];

var message;

const fileArg = argv.f || argv.file;
const messageArg = argv.m || argv.message;

if (fileArg) {
  message = fs.readFileSync(fileArg, "utf8");
} else if (messageArg) {
  message = messageArg;
}

if (process.stdin.isTTY || npm_execpath_arg) {
  useYarn({ message, npm_execpath: npm_execpath_arg });
} else {
  process.stdin.on("readable", () => {
    let buffer = "";

    let chunk;

    while ((chunk = process.stdin.read()) != null) {
      buffer += chunk;
    }

    if (buffer) {
      useYarn({ message, npm_execpath: buffer });
    }
  });
}
