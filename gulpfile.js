var gulp = require('gulp');
var path = require('path');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src(path.resolve(__dirname, 'app'))
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'webserver']);
