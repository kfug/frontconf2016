"use strict"
var gulp = require("gulp");
var imagemin = require("gulp-imagemin")
var gm = require("gulp-gm")
var resize = require("gulp-image-resize")

var paths = {
    srcDir : './images/',
    dstDir : 'src/images/'
}

var speakerImgCompiler = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(800)
            .gravity("Center")
            .crop(800,800))
    });
};

var member = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(400)
            .gravity("Center")
            .crop(400,400))
    });
};

var logo = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(800)
            .gravity("Center")
            .crop(800,350))
    });
};



module.exports = function(){
    gulp.src([paths.srcDir+"speakers/*"])
        .pipe(gm(speakerImgCompiler))
        .pipe(gulp.dest(paths.dstDir+"speakers/"));
    //gulp.src([
    //        "./images/member/**/*"
    //    ])
    //    .pipe(gm(member))
    //    .pipe(gulp.dest('./contents/assets/img/member/'));
    //gulp.src([
    //        "./images/logo.png"
    //    ])
    //    .pipe(gm(thumnail))
    //    .pipe(gulp.dest('./contents/assets/img/'));
};
