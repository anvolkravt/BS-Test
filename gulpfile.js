'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  pug = require('gulp-pug'),
  autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('pug', function() {
  return gulp
    .src('./src/pug/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
  gulp.watch('./src/pug/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.parallel('sass', 'pug', 'watch'));
