var express = require('express');
var router = express.Router();
var passport = require('passport');
var google = require('../authenticate').google;
var facebook = require('../authenticate').facebook;
var Verify = require('./verify');
var User = require('../models/user');
var UserEvent = require('../models/userevent');


/* GET users listing. */
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }), function(req,res){});
// the callback after google has authenticated the user

router.get('/auth/google/callback', function(req,res,next){
  passport.authenticate('google', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
          console.log(err);
        return res.status(500).json({
          err: 'Could not log in user'
        });
    }
      console.log(user);
      var token = Verify.getToken(user);
      res.render('redirect',{
          token : token
      });
    });
  })(req,res,next);
});



/****************

facebook

*****************/


router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email','public_profile' ] }),
  function(req, res){});

router.get('/auth/facebook/callback', function(req,res,next){
  passport.authenticate('facebook', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
        if (err) {
          return res.status(500).json({
            err: 'Could not log in user'
            });
        }
        var token = Verify.getToken(user);
        res.render('redirect',{
            token : token
        });
    });
  })(req,res,next);
});


router.post('/user_validate', Verify.verifyOrdinaryUser ,function(req, res) {
    User.findOne({ 'email' :  req.decoded.sub }, function(err, user) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }
        // check to see if theres already a user with that email
        if (user) {
            if(!user.valid){
                res.json({"response" : false, "email" : user.email, "name" : user.name});
            }
            else if(user.valid){
                res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : false });
                res.json({"response" : true});
            }
            else{
                res.json({"response" : false});
            }
        }
    });
});

router.post('/user_register_complete', Verify.verifyOrdinaryUser ,function(req, res) {
    var update = {
        phoneNumber    : req.body.user.phoneNumber,
        college        : req.body.user.college,
        year           : req.body.user.year,
        city           : req.body.user.city,
        accommodation  : req.body.user.accommodation,
        gender         : req.body.user.gender,
        name           : req.body.user.name,
        email          : req.body.user.email,
        events         : ['init'],
        valid          : true,
    };
    UserEvent.findOne({ 'email' :  req.decoded.sub }, function(err, oldUser) {
        // if there are any errors, return the error
        if (err){
            return done(err);
            console.log(err);
        }
        // check to see if theres already a user with that email
        if (oldUser) {
            console.log(1,update.events);
            update.events = update.events.concat(oldUser.events);
            console.log(2, oldUser.events);
            console.log(update.events);
            User.findOneAndUpdate({'email' : req.decoded.sub}, update, {new: true}, function(err, user) {
                if (err){
                    // return done(err);
                }
                if (user) {
                    res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : false });
                    res.json({"response" : true});
                }
            });
        }
        else{
            console.log(req.decoded.sub);
            console.log(update);

            User.findOneAndUpdate({'email' : req.decoded.sub}, update, {new: true}, function(err, user) {
                if (err){
                    console.log('errr');
                    return done(err);
                }
                if (user) {
                    res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : false });
                    res.json({"response" : true});
                }
            });
        }
    });
});


router.post('/logout', Verify.verifyOrdinaryUser ,function(req, res) {
    res.clearCookie("access-token");
    res.json({"response": true})
});

router.post('/user_register_complete_mobile', Verify.verifyOrdinaryUser ,function(req, res) {
    console.log(req.body);
    res.end('success');
});

module.exports = router;
