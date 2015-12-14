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
      entries: './node_modules/angular-route/angular-route.js',
      dest: './priv/static/js',
      outputName: 'angular-route.js'
  },{
      entries: './app/js/app.js',
      dest: './priv/static/js',
      outputName: 'app.js'
  }, {
      entries: './app/js/7MinWorkout/workout.js',
      dest: './priv/static/js',
      outputName: 'workout.js'
  }, {
      entries: './app/js/7MinWorkout/filters.js',
      dest: './priv/static/js',
      outputName: 'filters.js'
  }];

  return bundleConfigs.map(function (bundleConfig) {

      return Gulp.src(bundleConfig.entries)
          .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
          .pipe(Concat(bundleConfig.outputName))
          .pipe(Gulp.dest(bundleConfig.dest));
  });

});
