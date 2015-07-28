JSONParse   = require '..'
fs          = require 'fs'
should      = require 'should'
sampleJSON  = fs.readFileSync "#{__dirname}/sample.json", encoding: 'utf8'

describe 'JSONParse ::', ->

  it 'as callback', (done) ->
    JSONParse sampleJSON, done

  it 'as promise', (done) ->
    JSONParse(sampleJSON).then (content) ->
      content.foo.should.be.equal 'bar'
      done()
