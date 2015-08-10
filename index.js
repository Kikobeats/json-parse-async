'use strict';

var promise     = require('cb2promise');
var Errorifier  = require('errorifier');
var ensureAsync = require('ensure-async');

var hasFetchAPI = !!(global || window).Request;

var fetchParse = function(string, cb) {
  var jsonPromise = (new Response(string)).json();
  if (!cb) {
    return jsonPromise;
  }

  jsonPromise.then(function(content) {
    cb(content);
  }).catch(function(err) {
    cb(
      new Errorifier({
        code: 'ENOVALIDJSON',
        message: err.message
      })
    );
  });
}

var parseAsync = ensureAsync(function(data, cb) {
  var content;
  var error;

  try {
    content = JSON.parse(data);
  } catch (err) {
    content = {};
    error = new Errorifier({
      code: 'ENOVALIDJSON',
      message: err.message
    });
  } finally {
    return cb(error, content);
  }
});

function parseJSON(data, cb) {
  if (arguments.length === 1) {
    return promise(parseAsync, data);
  }
  return parseAsync(data, cb);
}


module.exports = hasFetchAPI ? fetchParse : parseJSON;
