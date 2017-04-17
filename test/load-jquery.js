/**
 * forked: https://github.com/hokaccha/mocha-phantom-travis-test
 */
(function() {
  var v = '3.2.1';
  var mpjs = window.mochaPhantomJS;
  if (mpjs && mpjs.env.JQUERY_VERSION) {
     v = mpjs.env.JQUERY_VERSION;
  }
  var src = 'https://code.jquery.com/jquery-' + v + '.min.js';

  document.write('<script src="' + src + '"></script>');
  document.write('<script>console.log("Load jQuery: " + $.fn.jquery)</script>');
})();