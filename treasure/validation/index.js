exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email must be between 4 to 33 characters')
        .matches(/.+\@.+\..+/) // Regular Expression to check if there is an @ symbol
        .withMessage('Email must contain @')
        .isLength({
            min: 5,
            max: 33
        });
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/) // Regular Expression to check if password contains 1 number/digit
        .withMessage('Password must contain a number');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
    // next() is a callback that is important to have when using middleware, so if the function
    // fails, then it'll just move on to the next function w/o halting the whole app. 

};

/* MORE INFO ABOUT ERROR MESSAGES WITH EXPRESS-VALIDATOR
https://express-validator.github.io/docs/custom-error-messages.html
*/