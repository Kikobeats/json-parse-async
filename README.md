# json-parse-async

![Last version](https://img.shields.io/github/tag/Kikobeats/json-parse-async.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/json-parse-async/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/json-parse-async)
[![Dependency status](http://img.shields.io/david/Kikobeats/json-parse-async.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-parse-async)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/json-parse-async.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-parse-async#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/json-parse-async.svg?style=flat-square)](https://www.npmjs.org/package/json-parse-async)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> The missing JSON.parse async interface.

## Install

```bash
npm install json-parse-async --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install json-parse-async --save
```

and later link in your HTML:

```html
<script src="bower_components/json-parse-async/dist/json-parse-async.js"></script>
```

## Usage

```js
var parseJSON = require('json-parse-async');
var stringify = '{"foo":"bar"}';

// as callback interface
parseJSON(stringify, function(err, content) {
  console.log(content.foo); //  => 'bar'
});

// as promise interface
parseJSON(stringify)
  .then(function(content) {
    console.log(content.foo); // => 'bar'
  })
  .catch(function(err) {
    console.log('promise was rejected:', err);
  });
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
