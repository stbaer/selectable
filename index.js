/**
 * @type {EventEmitter}
 */
var EventEmitter = require('eventemitter3');

/**
 * @class
 * @extends {EventEmitter}
 * @constructor
 *
 * @property {object} config
 * @property {HTMLCollection} config.items
 * @property {string} [config.activeClass='active']
 * @property {boolean} [config.allowActiveDeselect=false] - if true clicking on an active item will deselect it
 * @example
 * var selectable = new Selectable({ items: document.querySelectorAll('.someItems') });
 * selectable.on('selectable.change', function(newItem, oldItem){
 *          //do sth
 *       })
 *
 */
var Selectable = function (config) {

    EventEmitter.call(this);
    var self = this;

    this.items = config.items;
    this.activeClass = config.activeClass || 'active';
    this.allowActiveDeselect = config.allowActiveDeselect || false;

    this.selected = null;

    this.eachItems(function (i, node) {
        if (node.classList.contains('active')) {
            self.selected = node;
        }
    });

    this.handleEvents();
};

Selectable.prototype = Object.create(EventEmitter.prototype);
Selectable.prototype.constructor = Selectable;
module.exports = Selectable;



/**
 *
 * @param {function} cb
 * @param {scope} scope
 */
Selectable.prototype.eachItems = function (cb, scope) {
    var i = 0;
    for (i; i < this.items.length; i++) {
        cb.call(scope, i, this.items[i]);
    }
};

/**
 * @returns {boolean}
 */
Selectable.prototype.hasSelection = function () {
    return !!this.selected;
};

/**
 *
 * @param {event}  ev
 */
Selectable.prototype.onItemMouseDown = function (ev) {

    var newItem = ev.currentTarget;
    var oldItem = this.selected;
    var newIsActive = newItem.classList.contains(this.activeClass);
    var newIsDisabled = newItem.classList.contains('disabled');

    if (newIsDisabled || (newIsActive && !this.allowActiveDeselect)) {
        //do nothing if it's already selected
        return;
    }
    if (newIsActive && this.allowActiveDeselect) {
        newItem.classList.remove(this.activeClass);
        this.emit('selectable.change', null, newItem);
        return;
    }

    if (oldItem) {
        oldItem.classList.remove(this.activeClass);
    }

    newItem.classList.add(this.activeClass);
    this.selected = newItem;

    this.emit('selectable.change', newItem, oldItem);
};

/**
 * @fires selectable.change
 */
Selectable.prototype.handleEvents = function () {

    var self = this;

    this.eachItems(function (i, node) {
        node.addEventListener('click', self.onItemMouseDown.bind(self));
    });
};

/**
 *
 */
Selectable.prototype.deselectSelected = function () {

    var self = this;
    var selected = this.selected;

    this.eachItems(function (i, node) {
        node.classList.remove(self.activeClass);
    });

    if (selected !== null) {
        this.selected = null;
        this.emit('selectable.change', null, selected);
    }
};

Selectable.prototype.destroy = function () {
    var self = this;

    this.eachItems(function (i, node) {
        node.removeEventListener('mousedown', self.onItemMouseDown);
        node.removeEventListener('touchstart', self.onItemMouseDown);
    });
};
