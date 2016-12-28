var     gulp = require('gulp');
var     rename = require('gulp-rename');
var     babel = require('babelify');
var     browserify = require('browserify');
var     source = require('vinyl-source-stream');
var     less = require('gulp-less');
var     watch = require('gulp-watch');

var paths = {
  scripts: './app/**/*.js',
  less: './app/**/*.less'
};



gulp.task('scripts', function(){
    browserify('./app/components/app.js')
        .transform(babel)
        .bundle()
        .pipe(source('app.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public/js'));
});


gulp.task('less', function(){
    gulp.src('./app/less/index.less') // path to your file
        .pipe(less().on('error', function(err) {
            console.log(err);
        }))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./public/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.less, ['less']);
});