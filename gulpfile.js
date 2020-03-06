const gulp = require('gulp');
const zip = require('gulp-zip');

var fileindex= require('gulp-fileindex');

 
/*exports.default = () => (
    gulp.src('./**')
        .pipe(zip('Tarea3_201213181.zip'))
        .pipe(gulp.dest('./ArtefactosFinales'))
);*/

gulp.task('zip',function(){
	return gulp.src('./**')
		   .pipe(zip('Tarea3_201213181.zip'))
		   .pipe(gulp.dest('./ArtefactosFinales'));
});



gulp.task('fileindex',function(){
	return gulp.src('./ArtefactosFinales/*.zip')
		   .pipe(fileindex())
		   .pipe(gulp.dest('./dist'));
});

gulp.task('default',gulp.series('zip','fileindex'));