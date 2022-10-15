const gulpStylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');

module.exports = function () {
    $.gulp.task('jsLint', function () {
        return $.gulp
            .src('build/**/*.{js}')
            .pipe(eslint({ configFile: 'eslint.config.json' }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });
    $.gulp.task('styleLint', function () {
        return $.gulp.src('build/**/*.{css}').pipe(
            gulpStylelint({
                reporters: [{ formatter: 'string', console: true }],
            })
        );
    });
};
