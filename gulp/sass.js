"use strict"
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


module.exports = function(){
    this.src(["./sass/*.scss","!./sass/_*"])
        .pipe(sass())
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(this.dest("src/css/"))
}