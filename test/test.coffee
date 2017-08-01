parseJSON   = require '..'
fs          = require 'fs'
should      = require 'should'
sampleJSON  = fs.readFileSync "#{__dirname}/sample.json", encoding: 'utf8'

describe 'parseJSON ::', ->

  it 'as callback', (done) ->
    parseJSON sampleJSON, done

  it 'as promise', ->
    parseJSON(sampleJSON).then (content) ->
      content.foo.should.be.equal 'bar'
