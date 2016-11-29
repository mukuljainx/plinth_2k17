var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./models/user');
var configAuth = require('./config/auth');

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user);
	});
});

exports.google = passport.use(new GoogleStrategy({
		clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : '/user/auth/google/callback',
	},

	// function(token, refreshToken, profile, done){
	// 	console.log("checkpoint 1");
	// 	process.nextTick(function(){
	// 		User.findOne({ 'google.id' : profile.id }, function(err, user){
	// 			if(err){
	// 				console.log("checkpoint 4");
	// 				return done(err);
	// 			}
	// 			if(user){
	// 				console.log("checkpoint 3");
	//
	// 				//some code to make them login
	// 				return done(null, user);
	// 			}
	// 			else{
	// 				console.log("checkpoint 2");
	//
	// 				var newUser = new User();
	//
	// 				//set basic info, other will be asked later
	// 				newUser.google.id    = profile.id;
    //                 newUser.google.token = token;
    //                 newUser.google.name  = profile.displayName;
    //                 newUser.google.email = profile.emails[0].value; // pull the first email
	//
    //                 newUser.save(function(err) {
    //                     if (err)
    //                         throw err;
	// 					console.log(newUser);
    //                     return done(null, newUser);
    //                 });
	// 			}
	//
	// 		});
	// 	});
	// };
		function(accessToken, refreshToken, profile, done) {
			console.log("checkpoint 1");
			User.findOne({ 'google.id': profile.id }, function(err, user) {
			  if(err) {
				console.log("checkpoint 2");
			    console.log(err); // handle errors!
			  }
			  if (!err && user !== null) {
				console.log("checkpoint 3");
			    done(null, user);
			  } else {
				console.log("checkpoint 4");
			    user = new User();
				user.google.id    = profile.id;
				user.google.token = accessToken;
				user.google.name  = profile.displayName;
				user.google.email = profile.emails[0].value; // pull the first email

			    user.save(function(err) {
			      if(err) {
			        console.log(err); // handle errors!
			      } else {
			        console.log("saving user ...");
			        done(null, user);
			      }
			    });
			  }
		  })}));
