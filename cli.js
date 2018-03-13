#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var useYarn = require('.')

var message = fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8')

useYarn(message)
