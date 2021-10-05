'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-pug
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat

*/

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
