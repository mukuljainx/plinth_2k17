var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');
var User = require('../models/user');
var Verify = require('./verify');
var Sif = require('../models/sif');


router.get('/sif/startup', Verify.verifyOrdinaryUser ,function(req, res) {

    ecell = process.env.ECELL;
    poc = process.env.POC;



    if(req.decoded.sub === "" || (ecell.indexOf(req.decoded.sub) === -1 && poc.indexOf(req.decoded.sub) === -1)){
         isLoggedIn = false;
         res.redirect('../../../');
     }

    Sif.find(function (err, results) {
        if (err){
            return console.error(err);
        }
        else{

            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // check to see if theres already a user with that email
                if (user){
                    console.log(results[0]);
                    res.render('partials/startup',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});



module.exports = router;
