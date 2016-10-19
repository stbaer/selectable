# selectable

> Simple single-select for html elements - [Examples](http://stbaer.github.io/selectable/)

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

## Install

[![NPM](https://nodei.co/npm/simple-selectable.png?downloads=true)](https://nodei.co/npm/simple-selectable/)

## Usage

```
var Selectable =
require('simple-selectable')

var selectable = new Selectable({
    items: document.querySelectorAll('.items'),
    allowActiveDeselect: false                  //Optional, deselect active item if clicked. Defaults to false,
    });
```

**Listen to changes**
```
selectable.on('selectable.change', function(newItem, oldItem){
          //do sth
       })
```

*items containing a 'disabled' class can't be activated*

**Destroy**
```
selectable.destroy()
```

## License
MIT
