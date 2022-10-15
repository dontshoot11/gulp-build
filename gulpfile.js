'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js'),
    },
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task(
    'dev',
    $.gulp.series(
        'initialClean',
        'pug',
        'sassDev',
        'scripts:lib',
        'img',
        'fonts',
        'concat',
        'scriptsDev',
        'cleanJsDev',
        $.gulp.parallel('watch', 'serve')
    )
);

$.gulp.task(
    'prod',
    $.gulp.series(
        'initialClean',
        'pug',
        'sassProd',
        'scripts:lib',
        'img',
        'fonts',
        'concat',
        'scriptsProd',
        'ver',
        'cleanJsProd',
        'cleanStylesProd'
    )
);

$.gulp.task('jsLint', $.gulp.series('jsLint'));
