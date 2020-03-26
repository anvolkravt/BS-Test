'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  jade = require('gulp-jade'),
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

gulp.task('jade', function() {
  return gulp
    .src('./src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'jade', 'watch'));
