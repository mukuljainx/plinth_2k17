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
        payment : String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SIF', sifSchema);
