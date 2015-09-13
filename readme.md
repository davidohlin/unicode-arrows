# unicode-arrows [![Build Status](https://travis-ci.org/davidohlin/unicode-arrows.svg?branch=master)](https://travis-ci.org/davidohlin/unicode-arrows)

> Collection of unicode arrows as a json object. Sorted by direction i.e n (= north), ne (= northeast) etc.


## Install

```
$ npm install --save unicode-arrows
```


## Usage

```js
var unicodeArrows = require('unicode-arrows');
```

All arrows:
```js
console.log(unicodeArrows)
//=> n: [ '↑', '↟', …], ne: ['↗', '⇗', …], …
```

Or specify a direction:
```js
console.log(unicodeArrows.sw)
//=> sw: [ '↘', '⇘', …]


## License

MIT © [David Öhlin](http://davidohlin.se)
