var express = require('express');
var router = express.Router();
var passport = require('passport');
var google = require('../authenticate');
var Verify = require('./verify');


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
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: user.token
      });
    });
  })(req,res,next);
});


module.exports = router;
