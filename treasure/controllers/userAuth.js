const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.register = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }
        // we set salt and hased_password as undefined 
        // so we don't expose user's credentials
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.login = (req, res) => {
    // we use findOne method to locate user based on their email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Sorry, we don\'t  recognize this email!'
            });
        }
        // if user is found, make sure the email and password match
        // created the authenticate() method in user model which checks if the
        // encrypted pw is = to the hashed pw
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            });
        }
        // generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with expiry date
        // 9999 seconds or roughly around 2.7 hours
        res.cookie('t', token, { expire: new Date() + 9999 });
        // return response with user id, name, email & role 
        // and token to frontend client
        const { _id, name, email, role } = user;
        // written this way so we don't have to write:
        /*
        user.id
        user.email
        user.name
        user.role
        */
        return res.json({ token, user: { _id, email, name, role } });
    });
};

// logout method which clears the cookie
// REM: when the user logins, the token is saved in res.cookie t
// when user logs out, the cookie will be cleared
// so that unauthorized users won't be able to access certain pages
exports.logout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Log Out success' });
};

// for expressJWT to work you need to download cookie-parser
// this method is used so that only authorized users can access certain pages of the app
// userProperty is the property where the JWT payloads will be attached to each request, so we can access the data using
// req.auth
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    // by default, the decoded token is attached to req.user but can be 
    // configured with the requestProperty option
    userProperty: 'auth'
});

// middleware to check if user is an authorized user
// the logged in user must be the same as the authenticated user
// otherwise, it'll return an error
exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id.toString() == req.auth._id.toString();
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        });
    }
    next();
};

// middleware to check if user is an Admin
exports.isAdmin = (req, res, next) => {
    if (req.profile.role !== 1) {
        return res.status(403).json({
            error: 'Only for Admin! Access denied'
        });
    }
    next();
};