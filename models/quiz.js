var mongoose = require('mongoose');


var quizRegistrationSchema = mongoose.Schema({
    team : [
        {
            email          : String,
            name           : String,
            phoneNumber    : Number,
            college        : String,
            year           : Number,
            city           : String,
            accommodation  : String,
            eventName      : String,
        }
    ],
    eventName : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Quiz', quizRegistrationSchema);
