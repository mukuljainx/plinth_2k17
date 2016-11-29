var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

    facebook           : {
        id             : String,
        token          : String,
        email          : String,
        name           : String,
        phoneNumber    : Number,
        college        : String,
        year           : Number,
        city           : String,
        accommodation  : Boolean,
    },
    google             : {
        id             : String,
        token          : String,
        email          : String,
        name           : String,
        phoneNumber    : Number,
        college        : String,
        year           : Number,
        city           : String,
        accommodation  : Boolean,
    }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
