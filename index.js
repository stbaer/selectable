/**
 *  @module selectable
 *  @requires jQuery
 */

/**
 * @class Selectable
 * @constructor
 * @description Simple helper class for selectable items.
 * Takes a list of jquery elements, and optionally a string for the active class name.
 * If an Element is clicked it gets the active class and the other active class will be removed in case there
 * is one. Selectable#items trigger selectable.change (see example)
 *
 * @property {object} config
 * @property {jQuery} config.items The jquery elements
 * @property {string} [config.activeClass='active]
 * @example
 * new Selectable({ items: $('.someItems') })
 *      .items.on('selectable.change', function(ev, newItem, oldItem){
 *          //do sth
 *       })
 *
 */
var Selectable = function(config) {

    /** @type {jQuery} */
    this.items = config.items;
    /** @type {string} */
    this.activeClass = config.activeClass || 'active';
    var $active = this.items.find('.active').addBack();
    /** @type {jQuery|null} */
    this.selected = $active.length ? $active : null;

    this.handleEvents();
};

Selectable.constructor = Selectable;

module.exports = Selectable;

/**
 *
 */
Selectable.prototype.handleEvents = function(){

    var self = this;
    self.items.on('click', function(ev){
        var $newItem = $(this);
        var $oldItem = self.selected;

        if($newItem.hasClass(self.activeClass) || $newItem.hasClass('disabled') ) {
            //do nothing if it's already selected
            return;
        }else if($oldItem){
            $oldItem.removeClass(self.activeClass);
        }

        $newItem.addClass(self.activeClass);

        self.selected = $newItem;

        $newItem.trigger('selectable.change', [$newItem, $oldItem]);
    });
};

/**
 * Unbinds event handlers
 */
Selectable.prototype.destroy = function(){
    this.items.off('click');
};

