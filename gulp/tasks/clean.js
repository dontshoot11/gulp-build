module.exports = function () {
    const del = require('del');
    $.gulp.task('cleanJsDev', function () {
        return del(['src/static/js/bundle.js']);
    });
    $.gulp.task('cleanJsProd', function () {
        return del(['src/static/js/bundle.js', 'build/js/bundle.js']);
    });
    $.gulp.task('initialClean', function () {
        return del(['build']);
    });

    $.gulp.task('cleanStylesProd', function () {
        return del([
            'build/css/main.css',
            'build/css/main.min.css',
            'build/css/main.min.css.map',
        ]);
    });

    $.gulp.task('initialClean', function () {
        return del(['build']);
    });
};
