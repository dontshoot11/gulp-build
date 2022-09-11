module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/css/*.scss', $.gulp.series('sassDev'));
        $.gulp.watch('src/static/css/**/*.scss', $.gulp.series('sassDev'));

        $.gulp.watch(
            [
                'src/static/js/common.js',
                'src/static/js/components/*.js',
                'src/static/js/common/*.js',
            ],
            $.gulp.series('cleanJsDev', 'concat', 'scriptsDev', 'cleanJsDev')
        );
        $.gulp.watch('src/static/img/*', $.gulp.series('img'));
        $.gulp.watch('src/static/fonts/*', $.gulp.series('fonts'));
        $.gulp.watch('src/static/svg/*', $.gulp.series('svg'));
    });
};
