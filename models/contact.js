var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
        name    : String,
        email   : String,
        query   : String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Contact', contactSchema);
