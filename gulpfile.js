var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
    return gulp.src('d4701f60bee82cac47e6c7201cc1bf45.css')
        .pipe(uncss({
            html: ['http://drmichaels.me/team.htm']
        }))
        .pipe(gulp.dest('./out'));
});
 
gulp.task('minifycss', function() {
  gulp.src('./out/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minif/'))
});