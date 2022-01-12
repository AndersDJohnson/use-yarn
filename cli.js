#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var argv = require("minimist")(process.argv.slice(2));
var useYarn = require(".");

if (argv.v || argv.version) {
  console.log(require("./package.json").version);
  process.exit();
}

var message;
if (argv.f) {
  message = fs.readFileSync(argv.f, "utf8");
} else if (argv.m) {
  message = argv.m;
}

if (process.stdin.isTTY) {
  useYarn({ message });
} else {
  process.stdin.on("readable", () => {
    let buffer = "";

    let chunk;

    while ((chunk = process.stdin.read()) != null) {
      buffer += chunk;
    }

    if (buffer) {
      useYarn({ message, npm_execpath: buffer });
    } else {
      useYarn({ message });
    }
  });
}
