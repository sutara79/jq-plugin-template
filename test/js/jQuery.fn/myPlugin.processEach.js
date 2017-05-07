/**
 * @file Unit Testing by QUnit 1.x -- $.fn.myPlugin.processEach()
 */
jQuery(document).ready(function($) {

  module('$.fn.myPlugin.processEach', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
    },
    teardown: function() {
      this.target.remove();
    }
  });

  test('(this.target, "getInfo") **again**', 1, function() {
    $.fn.myPlugin.processEach(this.target);
    var returns = $.fn.myPlugin.processEach(this.target, "getInfo");
    equal(returns, 'call public method');
  });

  test('(this.target)', 1, function() {
    var returns = $.fn.myPlugin.processEach(this.target);
    equal(returns, 'init plugin');
  });

  test('(this.target, {})', 1, function() {
    var returns = $.fn.myPlugin.processEach(this.target, {});
    equal(returns, 'init plugin');
  });

  test('(this.target, "getInfo") **single**', 1, function() {
    var returns = $.fn.myPlugin.processEach(this.target, "getInfo");
    equal(returns, 'error');
  });

  test('(this.target, "_initOption") **again**', 1, function() {
    $.fn.myPlugin.processEach(this.target);
    var returns = $.fn.myPlugin.processEach(this.target, "_initOption");
    equal(returns, 'error');
  });

});