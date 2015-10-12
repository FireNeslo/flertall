# flertall

## Usage
```js
var flertall = require('flertall');

flertall('hus') === 'hus' // > true

flertall.unntak('gwarg', 'gwargeburgel') // > [function flertall]

flertall('gwarg') === 'gwargeburgel' // > true
```

## Installation
```sh
$ npm i -S FireNeslo/flertall
```

## Documnetation

### flertall(string, [number]) > string
takes word to pluralize and number (optional) to determine if needed

### flertall.unntak(string, string) > flertall
adds exception and returns self for chaining
