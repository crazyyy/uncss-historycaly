var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
    return gulp.src('index.css')
        .pipe(uncss({
            html: ['http://kovka-na-zakaz.ru/', 'http://kovka-na-zakaz.ru/pricing/', 'http://kovka-na-zakaz.ru/about/', 'http://kovka-na-zakaz.ru/contacts/', 'http://kovka-na-zakaz.ru/favorites/', 'http://kovka-na-zakaz.ru/works/gazebos/', 'http://kovka-na-zakaz.ru/works/']
        }))
        .pipe(gulp.dest('./out'));
});
 
gulp.task('minifycss', function() {
  gulp.src('./out/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minif/'))
});