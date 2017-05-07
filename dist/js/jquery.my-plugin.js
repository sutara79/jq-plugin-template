/**
 * @file jquery.my-plugin
 * @version 0.0.1
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT
 *//** @external jQuery */
(function (factory) {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {

$.fn.myPlugin = function (arg1) {
  // サブメソッド実行に備えて、数の分からない引数をまとめて配列にする。
  // 第1引数はサブメソッド名なので、それだけは除外する。
  var subMethodArgs = Array.prototype.slice.call(arguments, 1);

  // メソッドチェーン持続のためにjQueryオブジェクトを返す
  return this.each(function() {
    $.fn.myPlugin.processEach(this, arg1, subMethodArgs);
  });
};

/**
 * @private
 * @arg {Objectt} [elem] - 単一の要素のjQueryオブジェクト
 * @arg {null|Object|String} [arg1] - オプション、またはサブメソッド名
 * @arg {Array} [subMethodArgs] - 追尾要素のスクロールの下限の基準となる要素のjQueryオブジェクト、またはセレクタ文字列
 * @return {string} 単体テスト用に分岐名を返す
 */
$.fn.myPlugin.processEach = function(elem, arg1, subMethodArgs) {
  var instance = $(elem).data('my-plugin');
  if (instance && arg1 in instance && arg1.charAt(0) != '_') {
    instance[arg1].apply(instance, subMethodArgs);
    return 'call public method';
  } else if (typeof arg1 === 'object' || !arg1) {
    $(elem).data('my-plugin', new $.myPlugin(elem, arg1));
    return 'init plugin';
  } else {
    console.error('Sub-method "' +  arg1 + '" does not exist on $.myPlugin');
    return 'error';
  }
};

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

}));
