'use strict';

var promise = require('cb2promise');
var Whoops  = require('whoops');

var parseAsync = function(data, cb) {
  var content;
  var error;

  try {
    content = JSON.parse(data);
  } catch (err) {
    content = {};
    error = new Whoops({
      code: 'ENOVALIDJSON',
      message: err.message
    });
  } finally {
    return process.nextTick(function() {
      return cb(error, content);
    });
  }
};

function parseJSON(data, cb) {
  if (arguments.length === 1) return promise(parseAsync, data);
  return parseAsync(data, cb);
}

module.exports = parseJSON;
