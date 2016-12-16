var mongoose = require('mongoose');


var paymentSchema = mongoose.Schema({
        order_id        : String,
        eventName       : String,
        clubName        : String,
        userEmail       : String,
        userPhoneNumber : Number,
});

// create the model for payments and expose it to our app
module.exports = mongoose.model('UserEvent', paymentSchema);
