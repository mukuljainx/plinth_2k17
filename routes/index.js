var express = require('express');
var router = express.Router();
var Eventx = require('../models/event');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/competitions', function(req, res) {
   res.render('competitions');
});

router.get('/about', function(req, res) {
   res.render('about');
});

router.get('/competitions/astronomy', function(req, res) {
   res.render('astronomy');
});

router.get('/competitions/coding', function(req, res) {
   res.render('coding');
});

router.get('/competitions/literature', function(req, res) {
   res.render('literature');
});

router.get('/competitions/quizzing', function(req, res) {
   res.render('quizzing');
});

router.get('/competitions/robotics', function(req, res) {
   res.render('roboticsEvents');
});

router.get('/competitions/management', function(req, res) {

   res.render('roboticsEvents');
});

router.get('/contact_us', function(req, res) {
   res.render('contact_us');
});

router.get('/faq', function(req, res) {
   res.render('faq');
});

router.get('/contact_us', function(req, res) {
   res.render('contact_us');
});

router.get('/sponsors_old', function(req, res) {
   res.render('sponsors_old');
});

router.get('/team', function(req, res) {
   res.render('team');
});

router.get('/workshop', function(req, res) {
   res.render('workshop');
});

router.get('/profile', function(req, res) {
   res.render('profile');
});

router.get('/competitions/astronomy/armageddon', function(req, res) {
    eveDetails = {};
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

router.get('/competitions/astronomy/astro_hunt', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/astronomy/physics_bowl', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/astronomy/star_trek', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/coding/fix_the_bug', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/coding/iupc', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/coding/iupc_distraction', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/lfr', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/quad', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/roborace', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/robosoccer', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/robowar', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/robotics/transporter', function(req, res) {
   res.render('/partials/event');
});

router.get('/competitions/management/sif', function(req, res) {
   res.render('/partials/event');
});

module.exports = router;
