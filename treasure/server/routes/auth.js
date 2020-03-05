var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var User = require("../models/user");

var key = process.env.SECRET_OR_KEY;

// user login route
router.post("/login", (req, res) => {
  console.log(req.body);
  var email = req.body.email;
  var password = req.body.password;

  if (!email) {
    return res.status(422).json({ error: "You must enter an email address." });
  }

  if (!password) {
    return res.status(422).json({ error: "You must enter a password." });
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      return res
        .status(422)
        .send({ error: "no user found for this email address." });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id };
        jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`, // what is this referencing?
            user: {
              id: user.id,
              profile: {
                firstName: user.profile.firstName,
                lastName: user.profile.lastName
              },
              email: user.email
            }
          });
        });
      } else {
        return res.status(404).json({
          success: false,
          error: "Password Incorrect"
        });
      }
    });
  });
});

//register route
router.post("/register", (req, res, next) => {
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var password = req.body.password;

  if (!email) {
    return res.status(422).json({ error: "You must enter an email address." });
  }

  if (!firstName || !lastName) {
    return res.status(422).json({ error: "You must enter your full name." });
  }

  if (!password) {
    return res.status(422).json({ error: "You must enter a password." });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .json({ error: "That email address is already in use." });
    }

    const user = new User({
      email,
      password,
      profile: { firstName, lastName }
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return res.status(422).json({
            error: "Your request could not be processed. Please try again."
          });
        }
        user.password = hash;

        user.save((err, user) => {
          if (err) {
            return res.status(422).json({
              error: "Your request could not be processed. Please try again."
            });
          }

          const payload = { id: user.id }; // what is this?

          jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              user: {
                id: user.id,
                profile: {
                  firstName: user.profile.firstName,
                  lastName: user.profile.lastName,
                  is_subscribed: user.profile.is_subscribed
                },
                email: user.email,
                role: user.role
              }
            });
          });

          const message = template.signupEmail(user.profile);

          mailgun.sendEmail(user.email, message);
        });
      });
    });
  });
});

module.exports = router;
