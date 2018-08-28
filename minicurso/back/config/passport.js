const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = "sua chave secreta...."

module.exports.configPassport = (passport) => {
    console.log("initializing passport")
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    opts.secretOrKey = SECRET_KEY

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.getUserById(jwt_payload._id, function (err, user) {
            if (err){
                return done(err, false)
            }
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
    }))
}

module.exports.generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY)
}