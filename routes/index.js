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
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('competitions', {
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
              res.render('competitions',{
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

router.get('/about', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('about', {
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
              res.render('about',{
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

router.get('/competitions/astronomy', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('astronomy', {
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
              res.render('astronomy',{
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

router.get('/competitions/coding', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('coding', {
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
              res.render('coding',{
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

router.get('/competitions/literature', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('literature', {
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
              res.render('literature',{
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

router.get('/competitions/quizzing', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('quizzing', {
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
              res.render('quizzing',{
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

router.get('/competitions/robotics', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('roboticsEvents', {
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
              res.render('roboticsEvents',{
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

router.get('/competitions/management', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('management', {
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
              res.render('management',{
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

router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('contact_us', {
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
              res.render('contact_us',{
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

router.get('/faq', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('faq', {
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
              res.render('faq',{
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

//router.get('/contact_us', Verify.verifyOrdinaryUser ,function(req, res) {
//   res.render('contact_us');
//});

router.get('/sponsors2k16', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('sponsors_2k16', {
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
              res.render('sponsors_2k16',{
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

router.get('/team', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('team', {
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
              res.render('team',{
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

router.get('/workshop', Verify.verifyOrdinaryUser ,function(req, res) {
  if(req.decoded.sub === ""){
      isLoggedIn = false;
      res.render('workshop', {
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
              res.render('workshop',{
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

router.get('/competitions/astronomy/armageddon', function(req, res) {

    res.render('partials/event',{
        "eventDetail" : {
            "imageLink" : "images/icons/astronomy/armageddon.svg",
            "registerLink" : "/registration/astronomy/armageddon",
            "register0" : "<li><a class='reg-btn' href='#' data-open='regform'>Register ></a></li>",
            "register1" : "<li><a class='reg-btn' href='#' onClick='registerUser('astronomy', 'armageddon')'>Register ></a></li>",
            "paymentLink" : "",
            "payment0" : "<li><a href='#' data-open='paymentpop'>Make Payment></a></li>",
            "payment1" : "",
            "memberUpperLimit" : 1,
            "memberLowerLimit" : 1,
            "clubName" : "Astronomy",
            "eventName" : "armageddon",
            "eventDate" : "22nd Jan 2016",
            "eventVenue" : "The LNMIIT, Jaipur",
            "prizeWorth" : "INR. 30,000",
            "synopsis" : "<p>Scientists at NASA have discovered an asteroid 65 miles wide, named as Destroyer786. It is composed of large quantities of carbon      molecules as well as the more usual rocks and metals.It has it's collision course set with Earth. The asteroid is supposed to make its impact 1.5 years from today. Destroyer786 is travelling at a speed of 30,000 miles per hour and is approaching the earth from the direction of the sun. Keeping the estimated flyby distance in mind, it is supposed to cause a mass destruction if not total wipeout of humanity from the face of Earth.</p><p>All countries have come together, understanding the grim situation and are ready to take extreme measures to stop the 'end of the world'. You are chosen to be a part of core team of scientists that is going to save the humanity.</p><p>Devise a plan to save Earth and humanity.<br>Fate of humanity lies in your hand.<br>This event consists of two rounds. First round will be online. The participants have to submit a report before the given deadline. After the date of submission, we will select the teams for the second round on the basis of their report. All the teams selected teams will have to present their report in front of the judges during plinth.</p>",
            "eventDescription" : "<p><b>Problem Statement</b><ol><li>You have no economic constraints as all countries are willing to pool their resources in an attempt to save humanity.</li><li>You have 547 days in total to save earth, delay of even an hour will lead to human extinction.</li><li>Level of technology is not much advance than today, therefore make assumptions that are almost realistic.</li></ol></p> The final project report should be mailed to astronomy.lnmiit@gmail.com with the subject Plinth: Armageddon Project Report: TeamId.",
            "rules" : "<p><b>General Rules </b><ol><li>Any form of copying of textual material would lead to disqualification.</li><li>You can work alone or in a team of at most five.</li><li>One project should be submitted by only one team/individual. If same project is submitted by two teams/individuals, first one would be evaluated and second would be disqualified.</li></ol></p><p><b>Format of the project </b><ol><li>The project should be submitted in a pdf.</li><li>There is no strict format that you need to stick to. Make it as comprehensible as possible. </li></ol></p>",
            "judges" : "<p><b>Evaluation Methodology </b><ol><li>Your report would be evaluated on how many different aspects you have deliberated upon and how many of these are in line with the physics of the planet.</li><li>The more descriptive you are, the more points your report will score.</li><li>You can use diagrams and pictures.</li></ol></p>",
            "mentors" : "<p>Details will be Updated soon</p>",
            "sponsors" : "<p>Details will be Updated soon</p>"
        },
        "isLoggedIn" : false,
    });

});

router.get('/competitions/astronomy/astro_hunt', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'astro hunt'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
        }
    });
});

router.get('/competitions/robotics/quad', Verify.verifyOrdinaryUser ,function(req, res) {
   Eventx.findOne({'eventName' : 'quad'}, function(err, eventx) {
        // if there are any errors, return the error
        if (err)
            return done(err);
        // check to see if theres already a user with that email
        if (eventx){
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
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
            if(req.decoded.sub === ""){
                isLoggedIn = false;
                res.render('partials/event',{
                    eventDetail : eventx,
                    isLoggedIn : isLoggedIn
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
                        res.render('partials/event',{
                            eventDetail : eventx,
                            isLoggedIn : isLoggedIn,
                            "user" : {
                                name : user.name,
                                gender : user.gender,
                            }
                        });
                    }
                });
            }
        }
    });
});

module.exports = router;
