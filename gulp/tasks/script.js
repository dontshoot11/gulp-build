module.exports = function () {
    const webpack = require('webpack');
    const webpackStream = require('webpack-stream');
    const webpackConfig = require('../../webpack.config');
    const minify = require('gulp-babel-minify');

    $.gulp.task('scripts:lib', function () {
        return $.gulp
            .src('src/static/libs/*/**')
            .pipe($.gulp.dest('build/libs/'))
            .pipe(
                $.bs.reload({
                    stream: true,
                })
            );
    });

    $.gulp.task('concat', function () {
        return $.gulp
            .src('src/static/js/**')
            .pipe($.gp.concat('main.js'))
            .pipe($.gulp.dest('src/static/js/'));
    });

    $.gulp.task('scriptsDev', function () {
        return $.gulp
            .src('src/static/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .on('end', $.bs.reload);
    });

    $.gulp.task('scriptsProd', function () {
        return $.gulp
            .src('src/static/js/main.js')
            .pipe(webpackStream(webpackConfig), webpack)
            .pipe(
                minify({
                    mangle: {
                        keepClassName: true,
                    },
                })
            )
            .pipe($.gulp.dest('build/js'));
    });
};
