"use strict"
var gulp = require("gulp");
var imagemin = require("gulp-imagemin")
var gm = require("gulp-gm")
var gmorigin = require("gm")
var resize = require("gulp-image-resize")

var paths = {
    srcDir : './images/',
    basePath : './images/baseImage.png',
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
        var rtnGm = gmorigin(paths.basePath);
        if(size.width / size.height < 2){
            rtnGm = rtnGm.resize(null,size.height)
        }else{
            rtnGm = rtnGm.resize(size.width);
        }
        rtnGm = rtnGm.composite(gmfile.source);
        rtnGm = rtnGm.gravity("Center");
        //rtnGm = rtnGm.resample(800,400);

        done(err, rtnGm)
    });
};
var testImgCompiler2 = function (gmfile,done) {
    gmfile.size(function (err, size) {
        done(err, gmfile
            .resize(800)
            .gravity("Center"))
    });
};

var matGm = require("./mat.js");

module.exports = function(){
    this.src([paths.srcDir+"speakers/*"])
        .pipe(gm(speakerImgCompiler))
        .pipe(this.dest(paths.dstDir+"speakers/"));
    this.src([paths.srcDir+"sponsors/*"])
        .pipe(gm(testImgCompiler))
        .pipe(gm(testImgCompiler2))
        .pipe(this.dest(paths.dstDir+"sponsors/"));
    this.src([paths.srcDir+"staffs/*"])
        .pipe(gm(staffImgCompiler))
        .pipe(this.dest(paths.dstDir+"staffs/"));

    this.src([paths.srcDir+"test/*"])
        .pipe(gm(testImgCompiler))
        .pipe(this.dest(paths.dstDir+"test/"));
};
