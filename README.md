## selectable
Simple helper class to make items selectable

### Install

@TODO

### Usage

```js
Selectable = require('selectable')

new Selectable({ items: $('.someItems') })
      .items
      .on('selectable.change', function(ev, newItem, oldItem){
          //do sth
       })
```

