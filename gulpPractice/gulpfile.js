'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('concatScripts', function(){
  gulp.src(['js/jquery.js',
            'js/stick/jquery.sticky.js',
            'js/main'])
          .pipe(concat('app.js'))
          .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', function(){
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['hello'], function(){
  console.log('this is the default task!');
});
