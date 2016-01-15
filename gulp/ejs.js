"use strict"
var ejs = require("gulp-ejs");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


module.exports = function(){
    this.src(["./ejs/*.ejs"])
        .pipe(ejs({
            speakers: require("../data/speakers.js")
    }))
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(this.dest("src/"))

}