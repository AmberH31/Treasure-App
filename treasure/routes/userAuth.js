const express = require("express");
const router = express.Router();

// authentication middleware from the controllers folder
const {
  register,
  login,
  logout,
  requireSignin
} = require("../controllers/userAuth");

// validator middleware
const { userSignupValidator } = require("../validation");

// fetch all users
// test on postman localhost:8080/api/register
// validate user input from the req.body with the middleware
router.post("/register", userSignupValidator, register);

router.post("/login", login);

router.post("/logout", logout);

// test route ONLY
// only authorized logged users can access this route
/*
router.get('/SMU', requireSignin, (req, res) => {
    res.send("Test route")
});
*/

module.exports = router;
