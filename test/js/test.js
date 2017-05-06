var myapp = require('../../src/js/app.js');
var assert = function(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
};

describe('Simple', function() {

  describe('boolean', function() {
    it('9 is under 10', function() {
      assert(myapp.math(9) === false);
    });
    it('true', function() {
      assert(myapp.math(10) === true);
    });
    it('true', function() {
      assert(myapp.math(11) === true);
    });
  });
});