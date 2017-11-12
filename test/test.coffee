parseJSON   = require '..'
fs          = require 'fs'
should      = require 'should'
sampleJSON  = fs.readFileSync "#{__dirname}/sample.json", encoding: 'utf8'

describe 'parseJSON ::', ->

  custom_parser = (json) ->
    json.should.be.equal sampleJSON
    { foo: 'custom' }

  it 'as callback', (done) ->
    parseJSON sampleJSON, (error, content) ->
      should.not.exist(error)
      content.foo.should.be.equal 'bar'
      done()

  it 'as promise', ->
    parseJSON(sampleJSON).then (content) ->
      content.foo.should.be.equal 'bar'

  it 'as callback, with custom parser', (done) ->
    cb = (error, content) ->
      should.not.exist(error)
      content.foo.should.be.equal 'custom'
      done()

    parseJSON sampleJSON, cb, custom_parser

  it 'as promise, with custom parser', ->
    parseJSON(sampleJSON, null, (custom_parser)).then (content) ->
      content.foo.should.be.equal 'custom'