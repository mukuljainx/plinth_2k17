var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/auth');
var nJwt = require('njwt');

exports.getToken = function (user) {
    var claims = {
      sub: user.email,
      iss: 'https://plinth.in',
      permissions: 'event-registration'
    }

    var jwt = nJwt.create(claims,config.secretKey);
    jwt.setExpiration(new Date('2017-01-31'));
    console.log('*************************');
    console.log(jwt);
    console.log('*************************');

    var token = jwt.compact();
    return token

};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secretKey, function (err, decoded) {
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                console.log(decoded);
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};
