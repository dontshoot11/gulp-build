const sass = require('gulp-sass')(require('sass'));

module.exports = function () {
    $.gulp.task('sassDev', function () {
        return (
            $.gulp
                .src('src/static/css/main.scss')
                .pipe($.gp.sourcemaps.init())
                .on(
                    'error',
                    $.gp.notify.onError({
                        message: 'Error: <%= error.message %>',
                        title: 'style',
                    })
                )
                // .pipe($.gp.csso())
                .pipe(sass({ outputStyle: 'expanded' }))
                .pipe($.gp.autoprefixer())
                // Минифицированная версия
                .pipe(sass({ outputStyle: 'compressed' }))
                .pipe($.gp.rename('main.min.css'))
                .pipe($.gp.sourcemaps.write('./'))
                .pipe($.gulp.dest('build/css/'))
                .on('end', $.bs.reload)
        );
    });

    $.gulp.task('sassProd', function () {
        return (
            $.gulp
                .src('src/static/css/main.scss')
                .on(
                    'error',
                    $.gp.notify.onError({
                        message: 'Error: <%= error.message %>',
                        title: 'style',
                    })
                )
                // .pipe($.gp.csso())
                .pipe(sass({ outputStyle: 'expanded' }))
                .pipe($.gp.autoprefixer())
                // Минифицированная версия
                .pipe(sass({ outputStyle: 'compressed' }))
                .pipe($.gp.rename('main.min.css'))
                .pipe($.gulp.dest('build/css/'))
        );
    });
};
