const browserSync = require('browser-sync');
const babel       = require('gulp-babel');
const gulp        = require('gulp');

gulp.task('bundle', function() {
    return gulp.src('./app/dev/index.js')
                .pipe(babel({
                   presets: ['es2015']
                }))
                .pipe(gulp.dest('./app/dist'));
});


gulp.task('serve', function() {
    var files = ['./app/*'];

    browserSync.init({
        server: {
            baseDir: "./app"
        },
        files: files,
    })
    gulp.on("change", browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('./app/dev/index.js', ['bundle', browserSync.reload]);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/css/index.css', browserSync.reload);
});

gulp.task('go', ['serve', 'watch']);