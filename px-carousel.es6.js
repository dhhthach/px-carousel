(function() {
  Polymer({

    is: 'px-carousel',

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      counterValue: {
        type: Number,
        value: 0,
        notify: true
      },

      _currentIndex: Number,
      _itemsCount: Number
    },

    attached() {
      this.set('_currentIndex', 0);
      this._setContainerSize();
      this._carousel();
    },

    _setContainerSize() {

      let container = this.$$('.px-carousel-container'),
          width = container.getBoundingClientRect().width;

      this.set('_itemsCount', container.children.length);

      let childWidth = Math.round(100/this._itemsCount * 10000) / 10000;

      for (let child of container.children) {
        child.style.width = childWidth + '%';
      }

      container.style.width = width * this._itemsCount + 'px';

      this.$['px-carousel-wrapper'].style.width = width + 'px';
    },

    _carousel() {
      this.async(() => {
        if (this._currentIndex + 1 === this._itemsCount) {
          this.set('_currentIndex', 0);
        } else {
          this.set('_currentIndex', this._currentIndex + 1);
        }
        console.log(Math.round(this._currentIndex/this._itemsCount * 10000) / 10000);
        this.$$('.px-carousel-container').style.transform = `translateX(-${Math.round(this._currentIndex/this._itemsCount * 1000000) / 10000}%)`;
        this._carousel();
      }, 3000);
    },


    /**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    },

    /**
    * Increments the counter
    *
    * @method increment
    */
    increment: function() {
      this.counterValue++;
    }
  });
})();
