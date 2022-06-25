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
    'build',
    $.gulp.series(
        'clean',
        'pug',
        'sass',
        'scripts:lib',
        'img',
        'fonts',
        'svg',
        'concat',
        'scripts',
        'clean',
        $.gulp.parallel('watch', 'serve')
    )
);
