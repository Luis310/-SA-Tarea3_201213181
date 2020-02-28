const gulp = require('gulp');
const zip = require('gulp-zip');
 
exports.default = () => (
    gulp.src('./*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('./imgs	'))
);
