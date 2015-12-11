var Path = require('path');
var Gulp = require('gulp');
var Concat = require('gulp-concat');
var Newer = require('gulp-newer');


Gulp.task('scripts', function () {

  var bundleConfigs = [{
      entries: './node_modules/angular/angular.js',
      dest: './priv/static/js',
      outputName: 'angular.js'
  },{
      entries: './app/js/appfoo.js',
      dest: './priv/static/js',
      outputName: 'appfoo.js'
  }, {
      entries: './app/js/7MinWorkout/workout.js',
      dest: './priv/static/js',
      outputName: 'workout.js'
  }];

  return bundleConfigs.map(function (bundleConfig) {

      return Gulp.src(bundleConfig.entries)
          .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
          .pipe(Concat(bundleConfig.outputName))
          .pipe(Gulp.dest(bundleConfig.dest));
  });

});
