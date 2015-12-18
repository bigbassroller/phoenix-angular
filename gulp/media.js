var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('media', function () {

    // var general = Gulp.src('./client/media/**/*')
    //     .pipe(Gulp.dest(Path.join('./priv/static', 'fonts')));

    // var fonts = Gulp.src('./node_modules/font-awesome/fonts/**')
    //     .pipe(Gulp.dest(Path.join('./priv/static', 'fonts', 'font-awesome', 'fonts')));

    var img = Gulp.src('./app/img/*')
        .pipe(Gulp.dest(Path.join('./priv/static', 'img')));

    var partials = Gulp.src('./app/partials/*')
        .pipe(Gulp.dest(Path.join('./priv/static', 'partials')));

    var content = Gulp.src('./app/content/*')
        .pipe(Gulp.dest(Path.join('./priv/static', 'content')));

    return Merge(img, partials, content);
});
