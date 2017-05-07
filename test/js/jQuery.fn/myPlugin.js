/**
 * @file Unit Testing by QUnit 1.x -- $.fn.myPlugin()
 */
$(function() {

  module('$.fn.myPlugin', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
    },
    teardown: function() {
      this.target.remove();
    }
  });

  test('()', 1, function() {
    var returns = this.target.myPlugin();
    strictEqual(this.target, returns);
  });

  test('({})', 1, function() {
    var returns = this.target.myPlugin({});
    strictEqual(this.target, returns);
  });

  test('("setEnabled")', 1, function() {
    var returns = this.target.myPlugin('setEnabled');
    strictEqual(this.target, returns);
  });

});