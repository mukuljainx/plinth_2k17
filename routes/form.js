var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');
var User = require('../models/user');
var UserEvent = require('../models/userevent');
var Verify = require('./verify');
var Sif = require('../models/sif');
var Robotics = require('../models/robotics');
var Ecell = require('../models/ecell');
var Quiz = require('../models/quiz');
var Literary = require('../models/literary');
var Astronomy = require('../models/astronomy');
var Cybros = require('../models/cybros');
var authUser = require('../config/authuser');
var PaymentDB = require('../models/payment');
var PaymentMUN = require('../models/paymentMUN');
var PaymentSIF = require('../models/paymentSIF');


router.get('/sif/startup', Verify.verifyOrdinaryUser ,function(req, res) {
    var ecell = authUser.ecell;
    var poc   = authUser.poc;
    console.log(ecell);
    console.log(poc);
    if(req.decoded.sub === "" || (ecell.indexOf(req.decoded.sub) === -1 && poc.indexOf(req.decoded.sub) === -1)){
         isLoggedIn = false;
         res.redirect('../../../');
     }
    Sif.find({},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{

            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
	               }
                // check to see if theres already a user with that email
                if (user){
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

// router.get('/mun/payments', Verify.verifyOrdinaryUser ,function(req, res) {
//     var poc   = authUser.poc;
//     if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
//          isLoggedIn = false;
//          res.redirect('../../../');
//      }
//     Payments.find({},function (err, results) {
//         if (err){
//             return console.error(err);
//         }
//         else{
//
//             User.findOne({'email' : req.decoded.sub }, function(err, user) {
//                 // if there are any errors, return the error
//                 if (err){
//                     return done(err);
// 	               }
//                 // check to see if theres already a user with that email
//                 if (user){
//                     res.render('partials/startup',{
//                         results : results,
//                         isLoggedIn : true,
//                         user : user,
//                     });
//                 }
//             });
//         }
//     });
// });


router.get('/participants/*', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    var allowedUser = ['jainmukul1996@gmail.com'];

    switch(req.params['0']) {
        case "astronomy":
            eventx = Astronomy;
            allowedUser = authUser.astronomy;
            break;
        case "Astronomy":
            eventx = Astronomy;
            allowedUser = authUser.astronomy;
            break;
        case "coding":
            eventx = Cybros;
            break;
        case "literature":
            eventx = Literary;
            break;
        case "robotics":
            eventx = Robotics;
            break;
        case "management":
            eventx = Ecell;
            allowedUser = authUser.ecell;
            break;
        case "quizzing":
            eventx = Quiz;
            allowedUser = authUser.quiz;
            break;
    }

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         isLoggedIn = false;
         res.redirect('../../../');
     }


    eventx.find({'eventName' : req.query.event},function (err, results) {
        if (err){
            return console.error(err);
        }
        else{
            User.findOne({'email' : req.decoded.sub }, function(err, user) {
                // if there are any errors, return the error
                if (err){
                    return done(err);
                }
                // check to see if theres already a user with that email
                if (user){
                    res.render('partials/team',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});

router.get('/user/all', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
         isLoggedIn = false;
         res.redirect('../../../');
     }
    UserEvent.find(function (err, results) {
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
                    console.log('*****3');
                    res.render('partials/users',{
                        results : results,
                        isLoggedIn : true,
                        user : user,
                    });
                }
            });
        }
    });
});

router.get('/user/registered', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
         isLoggedIn = false;
         res.redirect('../../../');
     }
    User.find(function (err, results) {
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
                    console.log('*****3');
                    res.render('partials/users',{
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
