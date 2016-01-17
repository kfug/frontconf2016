"use strict"
var gulp = require("gulp");

//gulp.task("ejs",require("./gulp/ejs.js"))
// 画像の圧縮
gulp.task("image",require("./gulp/image-min.js"))
// EJS
gulp.task("ejs",require("./gulp/ejs.js"))
gulp.task("sass",require("./gulp/sass.js"))
gulp.task("bsync",require("./gulp/browserSync.js"))
//
//gulp.task("bower",require("./gulp/bower.js"))
//
//gulp.task("sitemap",require("./gulp/sitemap.js"))
//
//gulp.task("webpack",require("./gulp/webpack.js"))

gulp.task("watch",function(){
    gulp.watch('./ejs/**/*.ejs', ['ejs']);
    gulp.watch('./sass/**/*.scss', ['sass']);
    //gulp.watch('./script/**/*.js', ['babel']);
});
// 開発用
gulp.task("default",["watch"])

