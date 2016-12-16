var mongoose = require('mongoose');


var userEventSchema = mongoose.Schema({
        email          : String,
        events         : [
            {
                name      : String,
                feeStatus : String,
                unique_id : String,
                team      : Array
            }
        ],
});

// create the model for users and expose it to our app
module.exports = mongoose.model('UserEvent', userEventSchema);
