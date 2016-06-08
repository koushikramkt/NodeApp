/**
 * Created by Koushik on 6/3/2016.
 */
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.session && req.session.userid=="123") {

            res.locals.user = req.session.userid;
            res.render('afterLogin');
    }

        else{
            req.session.reset();
            res.redirect('/login');
        }
});
router.post('/', function(req, res, next) {
    if (req.session && req.session.userid=="123") {

        res.locals.user = req.session.userid;
        res.render('afterLogin');}

    else{
        req.session.reset();
        res.redirect('/login');
    }


});

module.exports = router;
