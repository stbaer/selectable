var Selectable = require('../');

var groupOneContainer = document.querySelector('.group1');
var groupTwoContainer = document.querySelector('.group2');
var groupThreeContainer = document.querySelector('.group3');


for(var i= 0; i<70; i++){
        var item1 = document.createElement('div');
    item1.appendChild( document.createTextNode('Group1 Item' + i) );
    var item2 = document.createElement('div');
    item2.appendChild( document.createTextNode('Group2 Item' + i) );
    var item3 = document.createElement('div');
    item3.appendChild( document.createTextNode('Group3 Item' + i) );
    if(i===50) {
        //set active before init test
        item3.classList.add('active');
    }
    groupOneContainer.appendChild(item1);
    groupTwoContainer.appendChild(item2);
    groupThreeContainer.appendChild(item3);
}

function init() {


    new Selectable({
        items: groupOneContainer.querySelectorAll('div')
    }).on('selectable.change', function (ev, newItem, oldItem) {
            //console.log(ev, newItem, oldItem);
        });

    new Selectable({
        items: groupTwoContainer.querySelectorAll('div'),
        allowActiveDeselect: true
    }).on('selectable.change', function (ev, newItem, oldItem) {
            //console.log(ev, newItem, oldItem);
        });

    new Selectable({
        items: groupThreeContainer.querySelectorAll('div'),
        allowActiveDeselect: true
    }).on('selectable.change', function (ev, newItem, oldItem) {
            //console.log(ev, newItem, oldItem);
        });

}

window.onload = init;
