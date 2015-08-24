var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var gzip = require('gulp-gzip')

gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('js', function () {
  return gulp.src('js/*js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('dist'))
})

gulp.task('styles', function () {
  return gulp.src('css/stylesheets/style.css')
    .pipe(gulp.dest('dist'))
})

gulp.task('assets', function () {
  return gulp.src('css/assets/*')
    .pipe(gulp.dest('dist/assets'))
})

gulp.task('projects', function () {
  return gulp.src('css/assets/projects/*')
    .pipe(gulp.dest('dist/assets/projects'))
})

gulp.task('watchout', function () {
  gulp.watch('js/*.js', ['js'])
  gulp.watch('css/*.css', ['styles'])
  gulp.watch('index.html', ['html'])
  gulp.watch('css/assets/*', ['assets'])
  gulp.watch('css/assets/projects', ['projects'])
})

gulp.task('default', ['html', 'js', 'styles','assets', 'projects', 'watchout'])
