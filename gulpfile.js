var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var reload      = browserSync.reload
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')
var data = require('gulp-data')
var stylus = require('gulp-stylus')

gulp.task('browser-sync', function() {
  browserSync.init({
    server: './'
  })

  gulp.watch('static/css/*.styl', ['styles'])
  gulp.watch('index.html').on('change', reload)
})

gulp.task('styles', function () {
  return gulp.src('static/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}))
})

gulp.task('default', function () {
  gulp.start('browser-sync')
})
