"use strict"

let shells = require("shelljs");

let sourceFiles = [".editorconfig", ".eslintrc.json"];
let sourceDir = "./templates/";
let destDir = "../../../";

sourceFiles.forEach(function (file) {
    // https://github.com/shelljs/shelljs#cpoptions-source_array-dest
    shells.cp("-n", sourceDir + file, destDir);
});
