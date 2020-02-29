//bring in the user model
const User = require('../models/user');

// the id will be coming from the route parameter
exports.userById = (req, res, next, id) => {
    // find user by id, execute cb and look for any errors or the match in user
    User.findById(id).exec((err, user) => {
        // if err found or no user was found, then send an error message with status code 400
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }
        // if no error found, then we want to add that user info to a request object called profile. 
        req.profile = user;
        // when working with middleware, you need to add next(); so app will continue to flow
        next();
    });
};