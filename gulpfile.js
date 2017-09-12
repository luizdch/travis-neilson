var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
var combineMq = require('gulp-combine-mq')
var concat = require('gulp-concat')
var browserSync = require('browser-sync').create()

gulp.task('serve', ['cssBuild', 'jsBuild'], function() {
   browserSync.init({
     port: 3005,
      server: {
         baseDir: "./"
      },
      ui: {
         port: 8080
      }
   });

   gulp.watch("./private/stylus/**/*.styl", ['cssBuild'])
   gulp.watch("*.html").on('change', browserSync.reload)
   gulp.watch("./private/js/*.js", ['jsBuild'])
})

gulp.task('cssBuild', function() {
   return gulp.src("./private/stylus/bundles/*.styl")
   .pipe(sourcemaps.init())
   .pipe(plumber())
   .pipe(stylus())
   .pipe(combineMq())
   .pipe(autoprefixer({
      browsers: ['last 3 versions']
   }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest("./public/css"))
   .pipe(browserSync.stream())
})

gulp.task('jsBuild', function() {
  return gulp.src('./private/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('functions.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js/'))
    .pipe(browserSync.stream())
});

gulp.task('default', ['serve'])
