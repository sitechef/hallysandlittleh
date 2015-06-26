var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

/**
 * SCSS conversion
 * with sourcemaps
 */
gulp.task("SCSS",function(){
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css/'));
});

gulp.task('default', ['SCSS']);
