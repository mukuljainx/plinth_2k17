var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');
var User = require('../models/user');
var Verify = require('./verify');

/* GET home page. */
router.get('/', Verify.verifyOrdinaryUser ,function(req, res, next) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('index', {
          "isLoggedIn" : isLoggedIn,
          "user" : {
              name : "Mukul",
              gender : "man"
          }
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
              res.render('index',{
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

router.get('/competitions', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('competitions');
});

router.get('/about', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('about');
});

router.get('/competitions/astronomy', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('astronomy');
});

router.get('/competitions/coding', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('coding');
});

router.get('/competitions/literature', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('literature');
});

router.get('/competitions/quizzing', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('quizzing');
});

router.get('/competitions/robotics', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('roboticsEvents');
});

router.get('/competitions/management', Verify.verifyOrdinaryUser ,function(req, res) {

   res.render('roboticsEvents');
});

router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('contact_us');
});

router.get('/faq', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('faq');
});

router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('contact_us');
});

router.get('/sponsors_2k16', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('sponsors_2k16');
});

router.get('/team', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('team');
});

router.get('/workshop', Verify.verifyOrdinaryUser ,function(req, res) {
   res.render('workshop');
});

router.get('/profile', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub === ""){
        isLoggedIn = false;
        res.redirect(301,'/');
    }
    else {
        isLoggedIn = true;
        User.findOne({'email' : req.decoded.sub }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);
            // check to see if theres already a user with that email
            if (user){
                res.render('profile',{
                    "isLoggedIn" : isLoggedIn,
                    "user" : user
                });
            }
        });
    }
});

router.get('/competitions/astronomy/armageddon', Verify.verifyOrdinaryUser ,function(req, res) {
    Eventx.findOne({'eventName' : 'armageddon'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/astronomy/astro_hunt', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'astro hunt'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/astronomy/physics_bowl', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'physics bowl'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/astronomy/star_trek', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'star trek'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/coding/fix_the_bug', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'fix the bug'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/coding/iupc', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'iupc'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/coding/iupc_distraction', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'iupc distraction'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/lfr', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'lfr'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/quad', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'quadcopter'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/roborace', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'roborace'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/robosoccer', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'robosoccer'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/robowar', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'robowar'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/robotics/transporter', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'transporter'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

router.get('/competitions/management/sif', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'sif'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            res.render('partials/event',{
                eventDetail : eventx
            });
        }
    });
});

module.exports = router;
