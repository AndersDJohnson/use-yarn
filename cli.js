#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2));
var useYarn = require('.')

var message
if (argv.f) {
  message = fs.readFileSync(argv.f, 'utf8')
}

if (!message && argv.m) {
  message = argv.m
}

if (!message) {
  message = fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8')
}

useYarn(message)
