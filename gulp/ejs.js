"use strict"
var ejs = require("gulp-ejs");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


module.exports = function(){
    this.src(["./ejs/*.ejs"])
        .pipe(ejs({
            speakers: require("../data/speakers.js"),
            staffs: require("../data/staffs.js"),
            sponsors: require("../data/sponsors.js"),
            news: require("../data/news.js"),
            handson: require("../data/handson.js"),
    }))
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(this.dest("src/"))

}