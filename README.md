# selectable

Simple single-select for html elements

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## Install

[![NPM](https://nodei.co/npm/simple-selectable.png)](https://nodei.co/npm/simple-selectable/)

## Usage

```js
Selectable = require('simple-selectable')

var selectable = new Selectable({ 
    items: document.querySelectorAll('.items'), 
    allowActiveDeselect: false                  //optional, deselect active icon if clicked. Defaults to false
    });
```

**Listen to changes**
```
selectable.on('selectable.change', function(ev, newItem, oldItem){
          //do sth
       })
```

**Destroy**
```
selectable.on('selectable.change', function(ev, newItem, oldItem){
          //do sth
       })
```

## License
MIT
