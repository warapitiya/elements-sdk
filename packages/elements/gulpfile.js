/**
 * Created by Malindu Warapitiya on 9/12/17.
 */

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sassLint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    styles: {
        src: 'src/elements.scss',
        dist: 'dist/'
    }
};

/**
 * Clean task
 */
function clean() {
    return del(['dist']);
}

/**
 * Scss lint task
 * @returns {NodeJS.WritableStream | NodeJS.WritableStream}
 */
function sassLintTask() {
    return gulp.src([
        paths.styles.src
    ])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

/**
 * Style compile task
 * @returns {NodeJS.WritableStream | NodeJS.WritableStream}
 */
function stylesTask() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(`${paths.styles.dist}/css`))
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.init())
        .pipe(nano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${paths.styles.dist}/css`));
}

gulp.task('default', gulp.series(clean, sassLintTask, gulp.parallel(stylesTask)));