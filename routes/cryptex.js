var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Cryptex = require('../models/cryptex')
var Verify = require('./verify');
var authUser = require('../config/authuser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
var fs = require('fs');

router.get('/', Verify.verifyOrdinaryUser ,function(req, res) {

    // if(req.decoded.sub !== "jainmukul1996@gmail.com"){
    //     isLoggedIn = false;
    //     res.end('not authorized');
    // }
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('cryptex_countdown', {
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
              res.render('cryptex_countdown',{
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
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
  // if(req.decoded.sub === ""){
  //     isLoggedIn = false;
  //     res.redirect('/cryptex');
  //     return
  // }
  else {
      isLoggedIn = true;
      User.findOne({'email' : req.decoded.sub }, function(err, user) {
          // if there are any errors, return the error
          if (err)
              return done(err);
          // check to see if theres already a user with that email
          if (user){
            //   if(user.level === undefined){
            //       console.log('level undefined');
            //       res.redirect('/cryptex');
            //       return;
            //   }
              Cryptex.findOne({'level' : 1}, function(err,doc){
                  if(err) throw err;
                  else{
                      console.log(doc);
                      res.render('cryptex_question',{
                          isLoggedIn : isLoggedIn,
                          user : user,
                          doc : doc,
                      });
                  }
              })
          }
      });
  }
});


router.get('/leaderboard', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }

  // if(req.decoded.sub === ""){
  //     isLoggedIn = false;
  //     res.render('cryptex_leaderboard', {
  //         "isLoggedIn" : isLoggedIn,
  //     });
  //     return
  // }
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

router.get('/dashboard', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    if(!isFinite(req.query.level)){
        res.end('something wrong')
        return;
    }
    if(req.decoded.sub === ""){
        isLoggedIn = false;
        res.render('cryptex_dashboard', {
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
            options = { upsert: true, new: true, setDefaultsOnInsert: true };
            Cryptex.findOneAndUpdate({'level' : req.query.level},{$set : {'level' : req.query.level}}, options, function(err, doc){
                if (err) throw err;
                else{
                    res.render('cryptex_dashboard',{
                        isLoggedIn : isLoggedIn,
                        user : user,
                        levelNumber : req.query.level,
                        doc : doc
                    });
                }
            })
      }
      });
}
});


router.post('/editlevel/image/*', Verify.verifyOrdinaryUser, multipartMiddleware ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    if(!isFinite(req.params['0'])){
        res.end('something wrong')
        return;
    }
    console.log(req.files.file);
    var level = req.params['0'];
    var tempPath = req.files.file.path;
    var ext = path.extname(req.files.file.name);
    relativePath = 'public/media/cryptex/'
    targetPath = path.resolve(relativePath + level);
    fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
        Cryptex.findOneAndUpdate({'level' : req.params['0']}, {$set : {'image' : relativePath + level}},{new: true}, function(err,doc){
            console.log("Upload completed!");
        })
    });
    res.end('se');
});

router.post('/editlevel/question', Verify.verifyOrdinaryUser ,function(req, res) {
    if(req.decoded.sub !== "jainmukul1996@gmail.com" && req.decoded.sub !== "nikhilshagri@gmail.com"){
        isLoggedIn = false;
        res.end('not authorized');
    }
    var update = {$set : {'question' : req.body.question, 'answer' : req.body.answer} };
    var options = {new: true};
    Cryptex.findOneAndUpdate({'level' : req.body.level}, update , options, function(err,doc){
        if (err) throw err;
        else {
            console.log(doc);
            console.log("Upload completed!");
            res.json({response : true});
            return;
        }
    })
});

module.exports = router;
