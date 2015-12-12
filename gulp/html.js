var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('html', function () {

    var partials = Gulp.src('./app/partials/*')
        .pipe(Gulp.dest(Path.join('./priv/static', 'partials')));

    return Merge(partials);
});
