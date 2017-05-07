$.myPlugin = function(elem, option) {
  this.elem = elem;
  this.option = this._initOption(option);
  this.getInfo();
};
$.extend($.myPlugin.prototype, {
  /**
   * @private
   */
  _initOption: function(option) {
    return $.extend({
      url: '../dist/php/ajax.php',
      q: 'a'
    }, option);
  },
  /**
   * @public
   */
  getInfo: function() {
    var self = this;
    $.get(this.option.url, {q: this.option.q}, function(res) {
      $(self.elem).text(res);
    });
  }
});
