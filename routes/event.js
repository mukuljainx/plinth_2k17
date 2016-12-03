var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Eventx = require('../models/event');
var User = require('../models/user');
var Verify = require('./verify');
var Robotics = require('../models/robotics');
var Ecell = require('../models/ecell');
var Quiz = require('../models/quiz');
var Literary = require('../models/literary');
var Astronomy = require('../models/astronomy');
var Cybros = require('../models/cybros');

router.post('/add', function(req, res) {

    var eventx = new Eventx();

    eventx.imageLink         = req.body.imageLink;
    eventx.registerLink      = req.body.registerLink;
    eventx.register0         = req.body.register0;
    eventx.register1         = req.body.register1;
    eventx.paymentLink       = req.body.paymentLink;
    eventx.payment0          = req.body.payment0;
    eventx.payment1          = req.body.payment1;
    eventx.memberUpperLimit  = req.body.memberUpperLimit;
    eventx.memberLowerLimit  = req.body.memberLowerLimit;
    eventx.clubName          = req.body.clubName;
    eventx.eventName         = req.body.eventName;
    eventx.eventDate         = req.body.eventDate;
    eventx.eventVenue        = req.body.eventVenue;
    eventx.prizeWorth        = req.body.prizeWorth;
    eventx.synopsis          = req.body.synopsis;
    eventx.eventDescription  = req.body.eventDescription;
    eventx.rules             = req.body.rules;
    eventx.judges            = req.body.judges;
    eventx.mentors           = req.body.mentors;
    eventx.sponsors          = req.body.sponsors;


  eventx.save(function(err) {
    if (err){
        console.log('**************************');
        console.log("fraeky error");
        res.send(err);
      }
     else
        res.json({ message: 'value created!' });
  })

});

// router.get('/all',function(req,res,nex){
//   MessMenu.find({}, function(err, menu) {
//     // if there are any errors, return the error
//     if (err)
//         return done(err);
//     // check to see if theres already a user with that email
//     if (menu[0])
//       res.json(menu[0].messMenu);
//     else if(menu)
//       res.json(menu);
//
//     res.end("{response : false}");
//
//   });
// });


//user registration

router.post('/registered/add', Verify.verifyOrdinaryUser, function(req, res) {


});




module.exports = router;
