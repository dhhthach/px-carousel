'use strict';(function(){Polymer({is:'px-carousel',properties:{/**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */counterValue:{type:Number,value:0,notify:true},_currentIndex:Number,_itemsCount:Number},attached:function attached(){this.set('_currentIndex',0);this._setContainerSize();this._carousel()},_setContainerSize:function _setContainerSize(){var container=this.$$('.px-carousel-container'),width=container.getBoundingClientRect().width;this.set('_itemsCount',container.children.length);var childWidth=Math.round(100/this._itemsCount*10000)/10000;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=container.children[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var child=_step.value;child.style.width=childWidth+'%'}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}container.style.width=width*this._itemsCount+'px';this.$['px-carousel-wrapper'].style.width=width+'px'},_carousel:function _carousel(){var _this=this;this.async(function(){if(_this._currentIndex+1===_this._itemsCount){_this.set('_currentIndex',0)}else{_this.set('_currentIndex',_this._currentIndex+1)}console.log(Math.round(_this._currentIndex/_this._itemsCount*10000)/10000);_this.$$('.px-carousel-container').style.transform='translateX(-'+Math.round(_this._currentIndex/_this._itemsCount*1000000)/10000+'%)';_this._carousel()},3000)},/**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */handleClick:function handleClick(event,detail,sender){this.increment()},/**
    * Increments the counter
    *
    * @method increment
    */increment:function increment(){this.counterValue++}})})();
//# sourceMappingURL=px-carousel.js.map
