(function() {
    var autoprefixer, broeserSync, cache, concat, del, extender, gulp, imagemin, jshint, minifyHTML, minifycss, sass, sitemap, uglify;

    gulp = require('gulp');
    del = require('del');
    cache = require('gulp-cache');
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    jshint = require('gulp-jshint');
    broeserSync = require('browser-sync');
    sitemap = require('gulp-sitemap');
    imagemin = require('gulp-imagemin');
    sass = require('gulp-ruby-sass');
    minifycss = require('gulp-minify-css');
    extender = require('gulp-html-extend');
    minifyHTML = require('gulp-minify-html');
    autoprefixer = require('gulp-autoprefixer');

    gulp.task('browser-sync', ['rebuild'], function() {
        return broeserSync({
            files: "**",
            server: {
                baseDir: './build/', // 最後產出的完整檔案 packfile
                index: 'index.html' //預設首頁
            },

            port: 8080,
            host: '0.0.0.0',
            ui: {
                port: 8081
            }
        });
    });

    gulp.task('rebuild', function() {
        return broeserSync.reload();
    });

    // 監聽檔案
    gulp.task('watch', function() {

        gulp.watch(['./build/*.*'], ['rebuild']);
        gulp.watch(['./src/views/**/*.html'], ['extend']);
        gulp.watch(['./src/js/*.js'], ['js']);
        gulp.watch(['./src/js/**/*.js'], ['js']);
        return gulp.watch(['./src/images/**'], ['images']);
    });


    gulp.task('extend', function() {
        return gulp.src('./src/views/application/*.html').pipe(extender({
            annotations: false,
            verbose: false
        })).pipe(gulp.dest('./build/'));
    });

    gulp.task('js', function() {
        return gulp.src(['./src/js/**/*.js'])
            // .pipe(uglify())
            .pipe(gulp.dest('./build/js/'));
    });

    gulp.task('image', function() { //圖片壓縮
        return gulp.src(['./src/images/**/**'])
            .pipe(gulp.dest('./build/images/'));
    });

    gulp.task('clean', function() { //清除檔案
        return del(['./build/js', './build/images', './build/**/*.html']);
    });

    gulp.task('build', ['js', 'image', 'extend']);

    // gulp.task('default', ['browser-sync', 'watch']);

    gulp.task('default', ['build'], function() {
        gulp.start('browser-sync');
        gulp.start('watch');
    });

}).call(this);