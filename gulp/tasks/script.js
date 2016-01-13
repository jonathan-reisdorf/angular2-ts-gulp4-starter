'use strict';

var gulp = require('gulp'),
  paths = require('../config').paths;

gulp.task('scripts', function() {
  var
    tsify      = require('tsify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    path       = require('path'),
    gutil      = require('gutil');

  return browserify({ entries : paths.source.scripts_entry })
    .plugin(tsify, { noImplicitAny : true, experimentalDecorators : true })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.dest + 'js'));
});
