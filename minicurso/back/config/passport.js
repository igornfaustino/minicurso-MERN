const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = "sua chave secreta...."

module.exports.configPassport = (passport) => {
    console.log("initializing passport")

    let opts = {}
    // Define como será extraido o token
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    // Define key para criptografar
    opts.secretOrKey = SECRET_KEY

    // Passport possui varias formas de ser utilizado, neste exemplo é passado
    // a estrategia de auth por token
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        // jwt_payload é o token descriptografados, e possui as informaçoes do usuario logado
        // Verifica se o usuario realmente existe
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