var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')

gulp.task('miniFiles', function () {
  gulp.src('static/css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('static/css/*.css', ['miniFiles'])
})