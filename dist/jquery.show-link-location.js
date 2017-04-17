/**
 * jQueryプラグインの例
 * a要素のhref属性をテキストノードに追記する
 * 参考: https://learn.jquery.com/plugins/basic-plugin-creation/#putting-it-together
 * @file jQuery Plugin: jquery.show-link-location
 * @version 1.0.0
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT License
 */
;(function($) {

/**
 * jQueryにプラグインとして追加されるメソッド
 * @alias "$.fn.showLinkLocation"
 * @global
 * @param {object|string} arg1 - オプション、またはサブメソッド名
 * @param {string} [arg1.space=' '] - 空白
 * @param {string} [arg1.bracketLeft='('] - 左かっこ
 * @param {string} [arg1.bracketRight=')'] - 右かっこ
 * @param {string} [arg1.cssClass='link-location'] - 挿入するspan要素のCSSクラス名
 * @return {object} jQueryオブジェクト
 */
// $.fn.showLinkLocation = function(arg1) {
$.fn.showLinkLocation = function(arg1) {
  // サブメソッド実行に備えて、数の分からない引数をまとめて配列にする。
  // 第1引数はサブメソッド名なので、それだけは除外する。
  var subMethodArgs = Array.prototype.slice.call(arguments, 1);

  // メソッドチェーン持続のためにjQueryオブジェクトを返す
  return this.each(function() {
    // プラグインを適用済みなら、保存してあるはずのインスタンスを呼び出す
    var instance = $(this).data('show-link-location');

    if (instance && arg1 in instance && arg1.charAt(0) != '_') {
      // publicなサブメソッドを実行する
      instance[arg1].apply(instance, subMethodArgs);
    } else if (typeof arg1 === 'object' || !arg1) {
      // プラグインを適用し、インスタンスをdataに保存する
      $(this).data('show-link-location', new $.showLinkLocation(this, arg1));
    } else {
      // エラーとしてコンソールに表示される
      console.error('Sub-method "' +  arg1 + '" does not exist on $.showLinkLocation');
    }
  });
};

/**
 * プラグインの本体
 * @alias "$.showLinkLocation"
 * @global
 * @class
 * @param {object} elem - プラグインを適用する要素
 * @param {object} option - ユーザから渡されたオプション
 * @property {object} elem - プラグインを適用する要素
 * @property {object} option - プラグインのオプション
 */
$.showLinkLocation = function(elem, option) {
  this.elem = elem;
  this.option = this._initOption(option);
  $(this.elem).append(this._createSpan());
}

// privateメソッドは名前の先頭に"_"が付く。
$.extend($.showLinkLocation.prototype, /** @lends "$.showLinkLocation".prototype */ {
  /**
   * オプションを初期化する
   * @private
   * @param {object} option - ユーザから渡されたオプション
   * @return {object} 初期化済みのオプション
   */
  _initOption: function(option) {
    return $.extend({
      space: ' ',
      bracketLeft: '(',
      bracketRight: ')',
      cssClass: 'link-location'
    }, option);
  },
  /**
   * 挿入用のspan要素を生成する
   * @private
   * @return {object} span要素
   */
  _createSpan: function() {
    return $('<span>')
      .text(
        this.option.space +
        this.option.bracketLeft +
        $(this.elem).attr('href') +
        this.option.bracketRight
      )
      .addClass(this.option.cssClass);
  },
  /**
   * プラグインの適用を解除する
   * @public
   */
  destroy: function() {
    // プラグインによって追加した要素を削除
    $(this.elem).find('.' + this.option.cssClass).remove();

    // dataを削除
    $(this.elem).removeData('show-link-location');
  },
  /**
   * プラグインを再適用する
   * @public
   * @param {object} option - ユーザから渡されたオプション
   */
  reset: function(option) {
    this.destroy();
    $(this.elem).showLinkLocation(option);
  }
});

})(jQuery);
