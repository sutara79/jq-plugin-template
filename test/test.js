/**
 * 注意: ES5で記述する
 */
mocha.setup('bdd');
var assert = chai.assert;

describe('a', function() {
  describe('b', function() {
    it('c', function() {
      assert(1 === 1);
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
window.onload = function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};