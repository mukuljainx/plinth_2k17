var express = require('express');
var router = express.Router();
var passport = require('passport');
var google = require('../authenticate').google;
var facebook = require('../authenticate').facebook;
var facebookValidate = require('../authenticate').facebookValidate;
var Verify = require('./verify');
var User = require('../models/user');
var UserEvent = require('../models/userevent');
var GoogleAuth = require('google-auth-library');

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
      var token = Verify.getToken(user);
      res.cookie('access-token', token ,{ httpOnly: true, secure : false });
      res.render('redirect',{
          isLoggedIn : false,
          valid : user.valid,
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
        res.cookie('access-token', token ,{ httpOnly: true, secure : false });
        res.render('redirect',{
            isLoggedIn : false,
            valid : user.valid,
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
            update.events = update.events.concat(oldUser.events);
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

router.post('/user_register_complete_mobile/google', Verify.verifyOrdinaryUser ,function(req, res) {

    var auth = new GoogleAuth;
    var client = new auth.OAuth2(CLIENT_ID);
    client.verifyIdToken( token, CLIENT_ID, function(e, login) {
          var payload = login.getPayload();
          var userid = payload['sub'];
          // If request specified a G Suite domain:
          //var domain = payload['hd'];
      });
});

router.post('/user_register_complete_mobile/facebook',
    passport.authenticate('facebook-token'),
    function (req, res) {
        var user = new User();
        console.log('*****1');

            user.phoneNumber    = 123;
            user.college        = 'req.body.college';
            user.year           = 1;
            user.city           = 'req.body.city';
            user.accommodation  = 'req.body.accommodation';
            user.gender         = 'req.body.gender';
            user.name           = 'req.user.name';
            user.email          = '123';
            user.events         = ['init'];
            user.valid          = true;
            user.facebookid     = 'req.user.id';
			user.facebooktoken  = 'req.body.access_token';

        console.log('*****2');
        console.log(user);
        user.save(function(err) {
            console.log('*****3');
            if(err){
                console.log(err);
                res.json({msg : "false"});
                return;
            }
            else{
                res.json({msg : "true"});
                return;
            }
        });
    }
);


module.exports = router;
