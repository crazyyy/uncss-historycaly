var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function() {
    return gulp.src('index.css')
        .pipe(uncss({
            html: ['http://www.drmichaels.com/', 'http://www.drmichaels.com/contacts/dental-clinic-jumeirah-dubai']
        }))
        .pipe(gulp.dest('./out'));
});