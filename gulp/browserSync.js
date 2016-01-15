"use strict"
var browserSync = require("browser-sync")


module.exports = function(){
    browserSync.init({
        //proxy: "http://localhost:8080"
        server:{
            "baseDir":"./src"
        }
    });
    this.watch([
        './ejs/**/*'
    ], function(){
        browserSync.reload();
    });



}