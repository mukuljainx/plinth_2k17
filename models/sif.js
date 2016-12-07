var mongoose = require('mongoose');


var sifSchema = mongoose.Schema({
    name                    : String,
    description             : String,
    location                : String,
    Website                 : String,
    representativeName      : String,
    representativeEmail     : String,
    representativeContact   : Boolean,
    flieds                  : Array,
    stipend                 : Boolean,
    numberofOpening         : Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SIF', sifSchema);
