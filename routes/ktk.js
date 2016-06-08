/**
 * Created by Koushik on 6/2/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ktk', {address:{street:'1560 SW',apartment:'432'}});

});

module.exports = router;
