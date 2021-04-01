"use strict";
var path = require("path");
const e = require("express");
const fetch = require("node-fetch");
var fs = require('fs');


exports.searchAll = (req, res) => {

    const text = fs.readFileSync(path.resolve(__dirname, "../public/corpus/hemingway.txt")).toString()

    console.log("Testing File Reading :  " + text);


    res.send('Success')

};