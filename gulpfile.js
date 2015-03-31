var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
    return gulp.src('main.css')
        .pipe(uncss({
            html: ['http://kovkanazakaz.com/', 'http://kovkanazakaz.com/shipping/index.html', 'http://kovkanazakaz.com/about/index.html', 'http://kovkanazakaz.com/contacts/index.html', 'http://kovkanazakaz.com/forging/index.html', 'http://kovkanazakaz.com/favorites/index.html', 'http://kovkanazakaz.com/forging/works/index.html', 'http://kovkanazakaz.com/mounting/index.html', 'http://kovkanazakaz.com/forging/sketches/index.html', 'http://kovkanazakaz.com/forging/works/gazebos/index.html', 'http://kovkanazakaz.com/forging/works/bench/index.html']
        }))
        .pipe(gulp.dest('./out'));
});
 
gulp.task('minifycss', function() {
  gulp.src('./out/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minif/'))
});