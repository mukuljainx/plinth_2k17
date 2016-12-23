var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Eventx = require('../models/event');
var User = require('../models/user');
var UserEvent = require('../models/userevent');
var Verify = require('./verify');
var Robotics = require('../models/robotics');
var Ecell = require('../models/ecell');
var Quiz = require('../models/quiz');
var Literary = require('../models/literary');
var Astronomy = require('../models/astronomy');
var Cybros = require('../models/cybros');
var Sif = require('../models/sif');
var Workshop = require('../models/workshop');
var mongoose = require('mongoose');

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
    eventx.displayName       = req.body.displayName;
    eventx.eventDate         = req.body.eventDate;
    eventx.eventVenue        = req.body.eventVenue;
    eventx.prizeWorth        = req.body.prizeWorth;
    eventx.synopsis          = req.body.synopsis;
    eventx.eventDescription  = req.body.eventDescription;
    eventx.rules             = req.body.rules;
    eventx.judges            = req.body.judges;
    eventx.mentors           = req.body.mentors;
    eventx.sponsors          = req.body.sponsors;
    eventx.query             = req.body.query;


  eventx.save(function(err) {
    if (err){
        res.send(err);
      }
     else
        res.json({ message: 'value created!' });
  })

});

//user registration

router.post('/register', Verify.verifyOrdinaryUser, function(req, res) {
    var robotics   = new Robotics();
    var ecell      = new Ecell();
    var quiz       = new Quiz();
    var literary   = new Literary();
    var astronomy  = new Astronomy();
    var cybros     = new Cybros();
    var user       = new User();
    var userEvent  = new UserEvent();


    switch(req.body.clubName) {
        case "astronomy":
            eventx = astronomy;
            break;
        case "Astronomy":
            eventx = astronomy;
            break;
        case "coding":
            eventx = cybros;
            break;
        case "literature":
            eventx = literary;
            break;
        case "robotics":
            eventx = robotics;
            break;
        case "management":
            eventx = ecell;
            break;
        case "quizzing":
            eventx = quiz;
            break;
    }

        eventx.team = req.body.userDetails;
        eventx.eventName = req.body.eventName;
        eventx.teamEmail = req.body.userDetails[0].email;
        eventx.teamNumber = req.body.userDetails[0].phoneNumber;
        eventx.payment = {
            status   : 'TXN_FAILURE',
            order_id : 'undefined'
        }

        var emails = [];
        for(var i=0; i<req.body.userDetails.length; i++ ){
            emails.push(req.body.userDetails[i].email);
        }
        // bulk

        var bulk = user.collection.initializeOrderedBulkOp();
        for(var i=0; i < emails.length; i++){
            bulk.find({'email': emails[i]}).update({$push: {events: req.body.eventName}});
        }
        bulk.execute();

        var bulk = userEvent.collection.initializeOrderedBulkOp();
        for(var i=0; i < emails.length; i++){
            bulk.find({'email': emails[i]}).upsert().update(
                {
                    $push : {events: req.body.eventName},
                    $set  : {email : emails[i]}
                }
            );
        }

        bulk.execute(function(err, docs){
            eventx.save(function(err) {
                if (err){
                    return done(err);
                }
                else{
                    res.json({ "response" : true });
                }
            })
        });
});

router.post('/register/sif', Verify.verifyOrdinaryUser, function(req, res) {

    var sif = new Sif();
    sif.detail = req.body.sifDetails;
    sif.teamEmail  = req.body.sifDetails.representativeEmail;
    sif.teamNumber  = req.body.sifDetails.representativeContact;
    sif.payment   = {
        status   : "TXN_FAILURE",
        amount   : 500,
    },
    sif.save(function(err) {
        if (err){
            return done(err);
        }
        else{
            res.json({ "response" : true });
        }
    })
});

router.post('/workshop/register', Verify.verifyOrdinaryUser, function(req, res) {
    var user       = new User();
    var userEvent  = new UserEvent();
    var workshop   = new Workshop();

    workshop.team = req.body.userDetails;
    workshop.eventName = req.body.eventName;
    workshop.teamEmail = req.body.userDetails[0].email;
    workshop.teamNumber = req.body.userDetails[0].phoneNumber;
    workshop.payment = {
        status   : 'TXN_FAILURE',
        order_id : 'undefined'
    }

    var emails = [];
    for(var i=0; i<req.body.userDetails.length; i++ ){
        emails.push(req.body.userDetails[i].email);
    }
    // bulk

    var bulk = user.collection.initializeOrderedBulkOp();
    for(var i=0; i < emails.length; i++){
        bulk.find({'email': emails[i]}).update({$push: {events: req.body.eventName}});
    }

    bulk.execute();
    var bulk = userEvent.collection.initializeOrderedBulkOp();
    for(var i=0; i < emails.length; i++){
        bulk.find({'email': emails[i]}).upsert().update(
            {
                $push : {events: req.body.eventName},
                $set  : {email : emails[i]}
            }
        );
    }

    bulk.execute(function(err, docs){
        workshop.save(function(err) {
            if (err){
                return done(err);
            }
            else{
                res.json({ "response" : true });
            }
        })
    });
});


module.exports = router;
