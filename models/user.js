var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
        googletoken    : String,
        googleid       : String,
        facebooktoken  : String,
        facebookid     : String,
        email          : String,
        name           : String,
        phoneNumber    : Number,
        cryptexLevel   : Number,
        college        : String,
        year           : Number,
        city           : String,
        accommodation  : String,
        valid          : Boolean,
        gender         : String,
        events         : Array,
        paidEvents     : Array,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
