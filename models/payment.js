var mongoose = require('mongoose');


var paymentSchema = mongoose.Schema({
        id              : String,
        eventName       : String,
        clubName        : String,
        order_id        : String
});

// create the model for payments and expose it to our app
module.exports = mongoose.model('PaymentDB', paymentSchema);
