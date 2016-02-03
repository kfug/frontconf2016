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

var sponsorImgCompiler = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(800)
            .gravity("Center")
            .crop(800,400))
    });
};

var staffImgCompiler = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(400)
            .gravity("Center")
            .crop(400,400))
    });
};

var testImgCompiler = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .setFormat("png")
            .page(400,400)
            .resize(400)
            //.crop(400,400)
        )
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
    this.src([paths.srcDir+"speakers/*"])
        .pipe(gm(speakerImgCompiler))
        .pipe(this.dest(paths.dstDir+"speakers/"));
    this.src([paths.srcDir+"sponsors/*"])
        .pipe(gm(sponsorImgCompiler))
        .pipe(this.dest(paths.dstDir+"sponsors/"));
    this.src([paths.srcDir+"staffs/*"])
        .pipe(gm(staffImgCompiler))
        .pipe(this.dest(paths.dstDir+"staffs/"));

    //this.src([paths.srcDir+"test/*"])
    //    .pipe(testImgCompiler())
    //    //.pipe(gm(testImgCompiler))
    //    .pipe(this.dest(paths.dstDir+"test/"));
};
