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
      req.flash('access_token',token);
      res.redirect(301,'/user/redirect');
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
        req.flash('access_token',token);
        res.redirect(301,'/user/redirect');
    });
  })(req,res,next);
});

/*******************

Redirect

********************/

router.get('/redirect', function(req, res) {
   res.render('redirect',{
       token : req.flash('access_token'),
   });
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
                res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : true });
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
        phoneNumber    : req.body['user[phoneNumber]'],
        college        : req.body['user[college]'],
        year           : req.body['user[year]'],
        city           : req.body['user[city]'],
        accommodation  : req.body['user[accommodation]'],
        gender         : req.body['user[gender]'],
        name           : req.body['user[name]'],
        email          : req.body['user[email]'],
        events         : ['init'],
        valid          : true,
    };

    var oldEvents = [];

    UserEvent.findOne({ 'email' :  req.decoded.sub }, function(err, oldUser) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }
        // check to see if theres already a user with that email
        if (oldUser) {
            // update.events = update.events.concat(oldUser.events);
            User.findOneAndUpdate({'email' : req.decoded.sub}, update, {new: true}, function(err, user) {
                if (err){
                    return done(err);
                }
                if (user) {
                    res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : true });
                    res.json({"response" : true});
                }
            });
        }
        else{
            User.findOneAndUpdate({'email' : req.decoded.sub}, update, {new: true}, function(err, user) {
                if (err){
                    return done(err);
                }
                if (user) {
                    res.cookie('access-token', Verify.getToken(user),{ httpOnly: true, secure : true });
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

router.get('/random', function(req, res) {
    console.log(req.cookies['access-token']);
    res.end('asd');
});

module.exports = router;
