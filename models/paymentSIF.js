var mongoose = require('mongoose');


var paymentSIFSchema = mongoose.Schema({
        order_id      : String,
        amount        : Number,
        email         : String,
        name          : String,
        status        : String,
        number        : Number,
    },
    {
        timestamps: { createdAt: 'created_at' }
    }
);

// create the model for payments and expose it to our app
module.exports = mongoose.model('PaymentSIF', paymentSIFSchema);
