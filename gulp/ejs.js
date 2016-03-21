"use strict"
var ejs = require("gulp-ejs");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


module.exports = function(){
    this.src(["./ejs/*.ejs","!./ejs/_*"])
        .pipe(ejs({
            tickets:"http://kfug.connpass.com/event/25757/",
            speakers: require("../data/speakers.js"),
            staffs: require("../data/staffs.js"),
            sponsors: require("../data/sponsors.js"),
            news: require("../data/news.js"),
            handson: require("../data/handson.js"),
            nl2br: require("nl2br"),
            po: require("../data/partyover"),
    }))
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(this.dest("src/"))
}