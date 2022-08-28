const revRewrite = require('gulp-rev-rewrite');
const rev = require('gulp-rev');

module.exports = function () {
    $.gulp.task('ver', function () {
        return $.gulp
            .src('build/**/*.{css,js}')
            .pipe(rev())
            .pipe($.gulp.src('build/**/*.html'))
            .pipe(revRewrite())
            .pipe($.gulp.dest('build'));
    });
};
