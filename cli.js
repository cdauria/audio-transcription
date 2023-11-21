#!/usr/bin/env node

const figlet = require ('figlet')
const clear = require ('clear')
var yargs = require('yargs').argv
require("dotenv").config({ path: __dirname + `/.env` })

const cdopenai = require('./src/projects/openAI')


clear()
console.log(figlet.textSync("whisper"))
console.log("launching my command with yargs:")
console.log(JSON.stringify(yargs, null, 4))

console.log("whisper audio2text")

if (yargs.whisper) {
    cdopenai.whisper4me(yargs.whisper)
} else {
    console.log("specify the command")
}