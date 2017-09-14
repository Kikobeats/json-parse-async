'use strict';

var promise = require('cb2promise');
var Whoops  = require('whoops');

var parseAsync = function(data, parse_method, cb) {
  var content;
  var error;

  try {
    content = parse_method(data);
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

function parseJSON(data, cb, parse_method = JSON.parse) {
  if (!cb) return promise(parseAsync, data, parse_method);
  return parseAsync(data, parse_method, cb);
}

module.exports = parseJSON;
