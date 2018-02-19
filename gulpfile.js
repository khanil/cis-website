const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const htmlbeautify = require('gulp-html-beautify');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const renderData = require('./src/templates/data');

// Render nunjacks templates from pages folder to dist folder
gulp.task('njk', function () {
  return gulp.src('src/templates/pages/*.njk')
    .pipe(nunjucksRender({
      path: ['src/templates/components/'],
      data: renderData,
    }))
    .pipe(htmlbeautify({
      "indent_size": 2,
      "preserve_newlines": false,
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('njk:watch', function () {
  gulp.watch('src/templates/**/*.njk', ['njk']);
});

// Build styles from sass
gulp.task('sass', function () {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});