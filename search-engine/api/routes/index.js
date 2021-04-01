var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('http://localhost:3000/');
});

//Search route 
router.get('/search', function (req, res, next) {
  res.send('testing search route');
});

module.exports = router;
