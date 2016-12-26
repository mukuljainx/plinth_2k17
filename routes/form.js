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
var EventURL = require('../config/eventURL');


router.get('/sif/startup', Verify.verifyOrdinaryUser ,function(req, res) {
    var allowedUser = authUser.ecell;
    var poc   = authUser.poc;


    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
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

router.get('/mun/payments', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;
    var allowedUser = authUser.mun;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
     }
     else{
        PaymentMUN.find({},function (err, results) {
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
                        res.render('partials/mun',{
                            results : results,
                            isLoggedIn : true,
                            user : user,
                        });
                    }
                });
            }
        });
    }
});


router.get('/participants/*', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc   = authUser.poc;
    var allowedUser = ['jainmukul1996@gmail.com'];


    if(EventURL[req.query.event] === undefined){
        res.end('Please Check the link once again there may some typo in event name');
        return;
    }

    switch(req.params['0']) {
        case "astronomy":
            eventx = Astronomy;
            allowedUser = authUser.astronomy;
            break;
        case "coding":
            eventx = Cybros;
            allowedUser = authUser.cybros;
            break;
        case "literature":
            eventx = Literary;
            break;
        case "robotics":
            eventx = Robotics;
            allowedUser = authUser.robotics;
            break;
        case "management":
            eventx = Ecell;
            allowedUser = authUser.ecell;
            break;
        case "quizzing":
            eventx = Quiz;
            allowedUser = authUser.quiz;
            break;
            default:
            res.end('Please Check the link once again there may some typo in club name');
            return;
            break;
    }

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1 && allowedUser.indexOf(req.decoded.sub) === -1)){
         res.end("You are not authorized. Login and try");
         return;
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
                        paymentUser : poc
                    });
                }
            });
        }
    });
});

router.get('/user/all', Verify.verifyOrdinaryUser ,function(req, res) {
    var poc = authUser.poc;

    if(req.decoded.sub === "" || (poc.indexOf(req.decoded.sub) === -1)){
        res.end("You are not authorized. Login and try");
        return;
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
        res.end("You are not authorized. Login and try");
        return;
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
