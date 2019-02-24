const gulp = require('gulp')
const sass = require('gulp-sass')
const maps = require('gulp-sourcemaps')
//const cleanCSS = require('gulp-clean-css')
const removeEmptyLines = require('gulp-remove-empty-lines')
//const prettyHtml = require('gulp-pretty-html')
const htmlmin = require('gulp-htmlmin');

const publicHTML = ['./public/**/*.html', './public/articles/**/*.html', './public/categories/**/*.html']
const publicDest = './public/'

const cssToSass = () => {
return gulp.src(['resources/scss/styles.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

const bootstrapSass = () => {
  return gulp.src(['resources/scss/bootstrap.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

const htmlClean = () => {
 return gulp.src([...publicHTML])
  .pipe(removeEmptyLines({
    removeComments: true
  }))
  .pipe(gulp.dest(publicDest));
}

const minify = () => {
  return gulp.src([...publicHTML])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(publicDest));
};

gulp.task('build', gulp.series(bootstrapSass, cssToSass, htmlClean, minify))

gulp.task('watch', function() {
  gulp.watch('resources/scss/*.scss', gulp.series(gulp.parallel(bootstrapSass, cssToSass)))
})