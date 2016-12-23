var mongoose = require('mongoose');


var sifSchema = mongoose.Schema({
    detail:
        {
            name                    : String,
            description             : String,
            location                : String,
            website                 : String,
            representativeName      : String,
            representativeEmail     : String,
            representativeContact   : String,
            field                   : Array,
            stipend                 : Boolean,
            numberofOpening         : Number
        },
        teamEmail  : String,
        teamNumber  : Number,
        payment    : {
            status   : String,
            order_id : String,
            date     : String,
            amount   : Number,
        },
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SIF', sifSchema);
