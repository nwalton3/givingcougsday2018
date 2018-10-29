'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const rename = require("gulp-rename");



/* ===========================
 * CSS
 * =========================== */


gulp.task('sass', function () {
    return gulp.src( 'cougsday2018.sass' )
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(rename('cougsday2018.min.css'))
        .pipe(livereload());
});


gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch( 'cougsday2018.sass', ['sass']);
});




/* ===========================
 * Startup
 * =========================== */

gulp.task('default', [ 'sass', 'sass:watch' ]);

