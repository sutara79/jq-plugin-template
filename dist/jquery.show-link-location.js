/**
 * 単体テストを試すための、ごく簡単なjQueryプラグイン
 */
(function($) {

/**
 * jQueryにプラグインとして追加されるメソッド
 * @param {Object|string} options - オプションのオブジェクト、またはサブメソッド名
 */
$.fn.showLinkLocation = function(options) {
  // サブメソッド実行に備えて、不定数の引数をまとめて配列にする
  var args = Array.prototype.slice.call(arguments, 1);

  // 要素ごとにjQueryオブジェクトを返す
  return this.each(function() {
    // すでにプラグインが適用されている場合は要素全体が格納される
    var objData = $(this).data('show-link-location');

    if (objData && options in objData) {
      // サブメソッドを実行する
      objData[options].apply(objData, args);
    } else {
      // プラグインを適用する (初回)
      $(this).data('show-link-location', new ShowLinkLocation(this, options));
    }
  });
};

/**
 * プラグインの本体。クラス形式
 * @class
 */
function ShowLinkLocation(elem, options) {
  this.elem = elem;
  this.init(options);
}

// 以下は全て外部アクセス可能となる
$.extend(ShowLinkLocation.prototype, {
  /**
   * 初期化する
   * @private
   * @param Object options - ユーザから渡されたオプション
   */
  init: function(options) {
    this.setOptions(options);
    this.insertText();
  },
  /**
   * オプションを設定する
   * @private
   * @param Object options - ユーザから渡されたオプション
   */
  setOptions: function(options) {
    this.options = $.extend({
      space: ' ',
      braceLeft: '(',
      braceRight: ')',
      cssClass: 'link-location'
    }, options);
  },
  /**
   * <span>を追加する
   * @private
   */
  insertText: function() {
    var linkLocation = $(this.elem).attr('href');
    var span = $('<span>')
      .text(
        this.options.space +
        this.options.braceLeft +
        linkLocation +
        this.options.braceRight
      )
      .addClass(this.options.cssClass);
    $(this.elem).append(span);
  },
  /**
   * <span>を削除する
   * @public
   */
  destroy: function() {
    $(this.elem).find('.' + this.options.cssClass).remove();
  },
  /**
   * <span>を作り直す
   * @public
   * @param Object options - ユーザから渡されたオプション
   */
  reset: function(options) {
    this.destroy();
    this.init(options);
  }
});

})(jQuery);
