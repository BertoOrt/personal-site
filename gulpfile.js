var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var rev = require('gulp-rev');
var fingerprint = require('gulp-fingerprint');
var revNapkin = require('gulp-rev-napkin');
var fs = require('fs')

// gulp.task('html', function () {
//   var target = gulp.src('index.html')
//   var sources = gulp.src(['dist/style.css', 'dist/*.js'], {read: false});
//   return target.pipe(inject(sources, {ignorePath: 'dist'}))
//     .pipe(gulp.dest('dist'))
// })

gulp.task('js', function () {
  return gulp.src('js/*js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
})

// gulp.task('jstest', function () {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.min.js'))
//         .pipe(rev())
//         .pipe(gulp.dest('build'))
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('build'));
// });

gulp.task('fingerprint', ['js'], function () {
  var manifest = JSON.parse(fs.readFileSync('dist/rev-manifest.json', 'utf-8'))
  return gulp.src('index.html')
    .pipe(fingerprint(manifest))
    .pipe(gulp.dest('dist'));
})

gulp.task('assets', function () {
  return gulp.src('css/assets/*')
    .pipe(gulp.dest('dist/assets'))
})

gulp.task('projects', function () {
  return gulp.src('css/assets/projects/*')
    .pipe(gulp.dest('dist/assets/projects'))
})

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('watchout', function () {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('css/assets/*', ['assets']);
  gulp.watch('js/*', ['fingerprint']);
  gulp.watch('css/assets/projects', ['projects']);
})

gulp.task('default', ['fingerprint','assets', 'sass', 'projects', 'watchout'])
