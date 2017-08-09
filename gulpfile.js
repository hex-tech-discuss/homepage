var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')

gulp.task('default', function () {
  gulp.src('static/css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('dist'))
})