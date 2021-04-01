var express = require('express');
var router = express.Router();
const search = require("../controller/search.controller.js");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('http://localhost:3000/');
});

//Search route 
router.get("/search", search.searchAll);

module.exports = router;
