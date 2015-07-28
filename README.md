# parse-json

![Last version](https://img.shields.io/github/tag/Kikobeats/parse-json.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/parse-json/master.svg?style=flat)](https://travis-ci.org/Kikobeats/parse-json)
[![Dependency status](http://img.shields.io/david/Kikobeats/parse-json.svg?style=flat-square)](https://david-dm.org/Kikobeats/parse-json)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/parse-json.svg?style=flat-square)](https://david-dm.org/Kikobeats/parse-json#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/parse-json.svg?style=flat-square)](https://www.npmjs.org/package/parse-json)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> The missing JSON.parse async interface.

## Install

```bash
npm install parse-json --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install parse-json --save
```

and later link in your HTML:

```html
<script src="bower_components/parse-json/dist/parse-json.js"></script>
```

## Usage

```js
var parseJSON = require('parse-json');
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
