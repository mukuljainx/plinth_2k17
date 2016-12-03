var mongoose = require('mongoose');


var literaryRegistrationSchema = mongoose.Schema({
        email          : String,
        name           : String,
        phoneNumber    : Number,
        college        : String,
        year           : Number,
        city           : String,
        accommodation  : Boolean,
        valid          : Boolean,
        gender         : String,
        eventName      : String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Literary', literaryRegistrationSchema);
