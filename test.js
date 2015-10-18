var namespace = require('tessed').namespace
var command = require('./')
var alias = require('@cli/alias')
var handler = require('@cli/handler')

var test = namespace('command')

test('command()', function (t) {

  var fn1 = function () {}

  var c = command(
    alias('test'),
    handler(fn1)
  )

  t.equal(typeof c, 'function', 'returns a function')

  t.deepEqual(c(), {
    type: 'command',
    value: {
      alias: ['test'],
      'handler': [fn1]
    },
    options: undefined
  }, 'basic execution')

  t.deepEqual(c({key: 'value'}), {
    type: 'command',
    value: {
      alias: ['test'],
      'handler': [fn1]
    },
    options: {key: 'value'}
  }, 'with options')
})

test('combines multiple values', function (t) {

  var fn1 = function () {}
  var fn2 = function () {}
  var c = command(
    alias('one'),
    alias('two'),
    handler(fn1),
    handler(fn2)
  )

  t.deepEqual(c(), {
    type: 'command',
    value: {
      alias: ['one', 'two'],
      'handler': [fn1, fn2]
    },
    options: undefined
  }, 'values')
})
