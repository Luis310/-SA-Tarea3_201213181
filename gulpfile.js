const gulp = require('gulp');
const zip = require('gulp-zip');
 
exports.default = () => (
    gulp.src('./**')
        .pipe(zip('Tarea3_201213181.zip'))
        .pipe(gulp.dest('./ArtefactosFinales'))
);
