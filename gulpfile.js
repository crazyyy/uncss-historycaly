var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function() {
    return gulp.src('fonts.css')
        .pipe(uncss({
            html: ['about.html', 'contact.html', 'contact-form.html', 'dental-all.html', 'dental-spec.html', 'index.html', 'index-new.html', 'services.html', 'services2.html']
        }))
        .pipe(gulp.dest('./out'));
});