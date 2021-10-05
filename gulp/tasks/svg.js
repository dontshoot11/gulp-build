module.exports = function () {
    $.gulp.task('svg', function () {
        return (
            $.gulp
                .src('src/static/img/svg/*.svg')
                // minify svg
                .pipe(
                    $.gp.svgmin({
                        js2svg: {
                            pretty: true,
                        },
                    })
                )
                // cheerio plugin create unnecessary string '&gt;', so replace it.
                .pipe($.gp.replace('&gt;', '>'))
                .pipe($.gulp.dest('build/img/svg/'))
        );
    });
};
