# selectable

Simple single-select for html elements

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

## Install

[![NPM](https://nodei.co/npm/simple-selectable.png)](https://nodei.co/npm/simple-selectable/)

## Usage

```js
Selectable = require('selectable')

new Selectable({ items: document.querySelectorAll('.items') })
      .on('selectable.change', function(ev, newItem, oldItem){
          //do sth
       })
```

## License
MIT
