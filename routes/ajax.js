/**
 * Created by Koushik on 6/3/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log("ajax log");
    res.send('Ajax response');

});

module.exports = router;