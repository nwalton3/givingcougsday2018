'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const rename = require("gulp-rename");



/* ===========================
 * CSS
 * =========================== */


gulp.task('sass', function () {
    return gulp.src( 'cougsday2018.sass' )
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('cougsday2018.min.css'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});


gulp.task('sass:watch', function () {
    gulp.watch( 'cougsday2018.sass', ['sass']);
});


gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});



/* ===========================
 * Startup
 * =========================== */

gulp.task('default', [ 'connect', 'sass', 'sass:watch' ]);

