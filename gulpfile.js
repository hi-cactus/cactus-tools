var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

const { src, dest, parallel, series } = gulp;

function lib() {
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(dest('./'));
}
function move_lib_d_ts() {
    return src('./lib/*.d.ts').pipe(dest('./'));
}

exports.default = series(parallel(lib, move_lib_d_ts));
