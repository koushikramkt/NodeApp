var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Koushik',
  age:'20' ,address:{street:'1560 SW',apartment:'432'}});
});

module.exports = router;
