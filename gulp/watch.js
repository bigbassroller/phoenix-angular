var Gulp = require('gulp');


Gulp.task('watch', function () {

    global.isWatching = true;
    Gulp.watch('./app/js/*.js', ['scripts']);
    Gulp.watch('./app/js/*/*.js', ['scripts']);
    Gulp.watch('./app/partials/*.html', ['html']);
});
