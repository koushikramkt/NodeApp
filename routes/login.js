/**
 * Created by Koushik on 6/2/2016.
 */

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', {address:{street:'1560 SW',apartment:'432'}});

});

router.post('/', function(req, res, next) {
   // console.log(req.body);
    if (req.body.userid==='123'&&req.body.pass==='456')
    {
        req.session.userid=req.body.userid;
        console.log("USerID:"+req.session.userid);
        res.redirect('/afterLogin');
        //console.log("pass2222");

    }
    else {
            res.render('login');
         }



});


module.exports = router;

