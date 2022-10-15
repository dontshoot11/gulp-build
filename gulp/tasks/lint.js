const gulpStylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');

module.exports = function () {
    $.gulp.task('jsLint', function () {
        return $.gulp
            .src('src/static/js/common.js')
            .pipe(eslint({ configFile: 'eslint.config.json' }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    $.gulp.task('styleLint', function () {
        return $.gulp.src('src/static/css/*/**').pipe(
            gulpStylelint({
                reporters: [{ formatter: 'verbose', console: true }],
            })
        );
    });
};
