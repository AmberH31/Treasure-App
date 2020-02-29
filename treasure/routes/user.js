const express = require('express');
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require('../controllers/userAuth');

const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

// router.get('/user/:userId', requireSignin, isAuth, read);
// router.put('/user/:userId', requireSignin, isAuth, update);
// router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

// grabs the parameter 'userId' 
// So whenever there is a parameter called 'userId' in the route parameter (i.e /user/:userI)
// we want to execute userById method which we created in the controllers folder under user.js
router.param('userId', userById);

module.exports = router;