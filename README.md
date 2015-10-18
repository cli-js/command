# command [![NPM Version](https://img.shields.io/npm/v/@cli/command.svg?style=flat-square)](https://www.npmjs.com/package/@cli/command) [![Travis](https://img.shields.io/travis/cli-js/command.svg?style=flat-square)](https://travis-ci.org/cli-js/command)

Create a command context in a [cli.js](http://clijs.org) app

## Install

```
npm install @cli/command --save
```

## Usage

```js
var alias = require('@cli/alias')
var handler = requrie('@cli/handler')
var command = require('@cli/command')
var app = require('@cli/app')
var run = require('@cli/run')

var testCommand = command(
  alias('test'),
  handler(function () {/* do something here */})
)

var cli = app(
  testCommand()
)

run(process.argv.slice(2), cli())
```
