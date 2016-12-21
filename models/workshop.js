var mongoose = require('mongoose');


var workshopSchema = mongoose.Schema({
    email          : String,
    name           : String,
    phoneNumber    : Number,
    college        : String,
    year           : Number,
    city           : String,
    accommodation  : String,
    eventName      : String,
    payment    : {
        status   : String,
        order_id : String,
        date     : String,
        amount   : String,
    },
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Workshop', workshopSchema);
