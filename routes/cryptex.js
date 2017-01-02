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
var Workshop = require('../models/workshop');
var Cybros = require('../models/cybros');
var authUser = require('../config/authuser');
var PaymentDB = require('../models/payment');
var PaymentMUN = require('../models/paymentMUN');
var PaymentSIF = require('../models/paymentSIF');
var EventURL = require('../config/eventURL');


router.get('/', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('cryptex', {
          "isLoggedIn" : isLoggedIn,
      });
  }
  else {
      isLoggedIn = true;
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('cryptex',{
                  "isLoggedIn" : isLoggedIn,
                  "user" : {
                      name : user.name,
                      gender : user.gender,
                  }
              });
          }
      });
  }
});

router.get('/play', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.redirect('/cryptex');
      return
  }
  else {
      isLoggedIn = true;
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('cryptex_question',{
                  isLoggedIn : isLoggedIn,
                  user : user,
              });
          }
      });
  }
});


router.get('/leaderboard', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('cryptex_leaderboard', {
          "isLoggedIn" : isLoggedIn,
      });
      return
  }
  else {
      isLoggedIn = true;
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
              res.render('cryptex_leaderboard',{
                  isLoggedIn : isLoggedIn,
                  user : user,
              });
          }
      });
  }
});


module.exports = router;
