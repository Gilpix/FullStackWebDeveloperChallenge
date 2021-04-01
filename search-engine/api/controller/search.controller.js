"use strict";
const path = require("path"),
    e = require("express"),
    fetch = require("node-fetch"),
    fs = require('fs');


exports.searchAll = (req, res) => {

    const text = fs.readFileSync(path.resolve(__dirname, "../public/corpus/hemingway.txt")).toString()


    let str = text;

    // Add space after each line break
    str = str.replace(/\n/g, " ");

    // Returns clean text without special characters
    str = escapeRegExp(str);

    // Convert string to array of words 
    let splittedText = str.split(' ');



    console.log(splittedText)

    res.send('Success')

};


// Remove special characters from string
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^",_:\;\#!${}()|[\-\]\\]/gi, ' ')
}