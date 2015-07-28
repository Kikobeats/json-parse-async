# json-parse

![Last version](https://img.shields.io/github/tag/Kikobeats/json-parse.svg?style=flat-square)
[![Dependency status](http://img.shields.io/david/Kikobeats/json-parse.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-parse)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/json-parse.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-parse#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/json-parse.svg?style=flat-square)](https://www.npmjs.org/package/json-parse)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> The missing JSON.parse async interface.

## Install

```bash
npm install json-parse --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install json-parse --save
```

and later link in your HTML:

```html
<script src="bower_components/json-parse/dist/json-parse.js"></script>
```

## Usage

```js
var JSONParse = require('json-parse');
var stringify = '{"foo":"bar"}';

// as callback interface
JSONParse(stringify, function(err, content) {
  console.log(content.foo); //  => 'bar'
});

// as promise interface
JSONParse(stringify)
  .then(function(content) {
    console.log(content.foo); // => 'bar'
  })
  .catch(function(err) {
    console.log('promise was rejected:', err);
  });
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
