var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

const { src, dest, parallel, series } = gulp;

function lib() {
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(dest('./lib'));
}

exports.default = series(parallel(lib));
