var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('serve', ['test'], function() {
  // ソースが変更されたらテスト実行
  gulp.watch(['dist/jquery.my-example.js'], ['test']);
});

gulp.task('test', function() {
  return gulp
    .src(['test/index.html'], {read: false})
    .pipe(mochaPhantomJS());
});

gulp.task('default', ['serve']);