$(function() {
  mocha.setup('bdd');
  var assert = chai.assert;

  describe('jquery.show-link-location', function() {
    var elem1, res1;
    before(function() {
      elem1 = $('.show-url');
      res1 = elem1.showLinkLocation();
    });

    describe('プラグインの適用', function() {
      it('メソッドチェーンが持続している', function() {
        assert(res1 === elem1);
      });
      it('"#a1"のdataは"$.showLinkLocation"のインスタンスである', function() {
        assert($('#a1').data('show-link-location') instanceof $.showLinkLocation);
      });
      it('"#a2"のdataは"$.showLinkLocation"のインスタンスである', function() {
        assert($('#a2').data('show-link-location') instanceof $.showLinkLocation);
      });
      it('"#a3"のdataは"$.showLinkLocation"のインスタンスである', function() {
        assert($('#a3').data('show-link-location') instanceof $.showLinkLocation);
      });
    });

    describe('サブメソッドの実行', function() {
      describe('"#a1"にdestroy()を実行する', function() {
        it('"#a1"のspan要素が削除されている', function() {
          $('#a1').showLinkLocation('destroy');
          assert($('#a1').find('.link-location').length === 0);
        });
      });
      describe('"#a2"にreset()を実行する', function() {
        it('"#a2"で新たに生成したspan要素のテキストは「: "https://github.com/"」である', function() {
          $('#a2').showLinkLocation('reset', {
            space: ': ',
            bracketLeft: '"',
            bracketRight: '"'
          });
          assert($('#a2 .link-location').text() === ': "https://github.com/"');
        });
      });
      describe('存在しないサブメソッドの実行は無効となる', function() {
        before(function() {
          $('#a3').showLinkLocation('foo');
        });

        it('"#a3"のspan要素のテキストは" (http://b.hatena.ne.jp/)"のままである', function() {
          assert($('#a3 .link-location').text() === ' (http://b.hatena.ne.jp/)');
        });
        it('"#a3"のdataは"$.showLinkLocation"のインスタンスのままである', function() {
          assert($('#a3').data('show-link-location') instanceof $.showLinkLocation);
        });
      });
    });
  });

  /**
   * ブラウザではmocha.run()のみで十分。
   * コマンドラインでもテストを実行したいなら、下記のようにする。
   */
  if (window.initMochaPhantomJS) {
    initMochaPhantomJS();
  }
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});