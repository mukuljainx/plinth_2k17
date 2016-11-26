var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('./models/user');

var configAuth = require('./config/auth');

module.exports = function(passport){

	//serialize user and deserialize

	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	//Google

	passport.use(new GoogleStrategy({
		clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

	},

	function(token, refreshToken, profile, done){
		process.nextTick(function(){
			User.findOne({ 'google.id' : profile.id }, function(err, user){
				if(err)
					return done(err);
				if(user){
					//some code to make them login
					return done(null, user);
				}
				else{
					var newUser = new User();

					//set basic info, other will be asked later
					newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
				}

			});
		});
	}));
}

