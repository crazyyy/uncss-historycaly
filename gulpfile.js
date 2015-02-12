var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function() {
    return gulp.src('fb9af384ac58a2ab044f3c0d022abc40.css')
        .pipe(uncss({
            html: ['about.html', 'contact.html', 'contact-form.html', 'dental-all.html', 'dental-spec.html', 'index.html', 'index-new.html', 'services.html', 'services2.html']
        }))
        .pipe(gulp.dest('./out'));
});