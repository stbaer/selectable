## selectable
Simple single-select for html elements

### Dependencies
[eventemitter3](git://github.com/primus/EventEmitter3.git)

### Install

```
npm i stbaer/selectable
```

### Usage

```js
Selectable = require('selectable')

new Selectable({ items: document.querySelectorAll('.items') })
      .on('selectable.change', function(ev, newItem, oldItem){
          //do sth
       })
```

