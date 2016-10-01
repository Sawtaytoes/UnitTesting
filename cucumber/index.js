const cucumber = require('cucumber')

let execOptions = ['node', 'node_modules/.bin/cucumber-js']
cucumber.Cli(execOptions)