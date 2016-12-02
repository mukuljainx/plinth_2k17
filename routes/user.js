var express = require('express');
var router = express.Router();
var passport = require('passport');
var google = require('../authenticate').google;
var facebook = require('../authenticate').facebook;
var Verify = require('./verify');
var User = require('../models/user');


/* GET users listing. */
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }), function(req,res){});
// the callback after google has authenticated the user
//
// router.get('/auth/google/callback', function(req,res,next){
//   passport.authenticate('google', function(err, user, info) {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({
//         err: info
//       });
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//           console.log(err);
//         return res.status(500).json({
//           err: 'Could not log in user'
//         });
//     }
//       var tokenx = Verify.getToken(user);
//       var buffer = new Buffer(tokenx);
//       var token = buffer.toString('base64');
//       req.flash('access_token',token);
//       res.redirect(301,'/user/redirect');
//     });
//   })(req,res,next);
// });
//
//

/****************

facebook

*****************/


router.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }),
  function(req, res){});

router.get('/auth/google/callback',
    passport.authenticate('google', {
            successRedirect : 'back',
            failureRedirect : '/profile'
  })
);

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
module.exports = router;
