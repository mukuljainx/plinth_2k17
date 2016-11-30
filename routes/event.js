var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Eventx = require('../models/event');

router.post('/add', function(req, res, next) {

  var eventx = new Eventx();

  eventx.imageLink         = body.req.imageLink;
  eventx.registerLink      = body.req.registerLink;
  eventx.register0         = body.req.register0;
  eventx.register1         = body.req.register1;
  eventx.paymentLink       = body.req.paymentLink;
  eventx.payment0          = body.req.payment0;
  eventx.payment1          = body.req.payment1;
  eventx.memberUpperLimit  = body.req.memberUpperLimit;
  eventx.memberLowerLimit  = body.req.memberLowerLimit;
  eventx.clubName          = body.req.clubName;
  eventx.eventName         = body.req.eventName;
  eventx.eventDate         = body.req.eventDate;
  eventx.eventVenue        = body.req.eventVenue;
  eventx.prizeWorth        = body.req.prizeWorth;
  eventx.synopsis          = body.req.synopsis;
  eventx.eventDescription  = body.req.eventDescription;
  eventx.rules             = body.req.rules;
  eventx.judges            = body.req.judges;
  eventx.mentors           = body.req.mentors;
  eventx.sponsors          = body.req.sponsors;


  eventx.save(function(err) {
    if (err){
        console.log("fraeky error");
        res.send(err);
      }
        res.json({ message: 'value created!' });
  });

  // next();
});

router.get('/all',function(req,res,nex){
  MessMenu.find({}, function(err, menu) {
    // if there are any errors, return the error
    if (err)
        return done(err);
    // check to see if theres already a user with that email
    if (menu[0])
      res.json(menu[0].messMenu);
    else if(menu)
      res.json(menu);

    res.end("{response : false}");

  });
});


module.exports = router;
