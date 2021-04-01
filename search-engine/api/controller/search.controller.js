"use strict";
const path = require("path"),
    e = require("express"),
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

    // Get query string
    const term = req.query.search;

    // To store the matched result
    const matchList = [];

    //Returns the list of matched words based on term
    const matchedSplittedText = splittedText.map(word => {
        if (matchList.includes(word)) {
            return;
        }
        else {
            if (word.match(term)) {
                matchList.push(word);
            }
        }
    });
    if (matchList.length > 0)
        res.send({ matchList });
    else
        res.send('No result found')

};


// Remove special characters and line break from string
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^",_:\r\;\#!${}()|[\-\]\\]/gi, ' ')
}