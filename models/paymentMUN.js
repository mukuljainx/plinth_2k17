var mongoose = require('mongoose');


var paymentMUNSchema = mongoose.Schema({
        order_id    : String,
        amount      : Number,
        type        : String,
        name        : String,
        email       : String,
        phoneNumber : Number,
        institute   : String,
        status      : String,
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
);

// create the model for payments and expose it to our app
module.exports = mongoose.model('PaymentMUN', paymentMUNSchema);
