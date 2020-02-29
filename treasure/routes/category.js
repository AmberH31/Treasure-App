const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/userAuth');
const { userById } = require('../controllers/user');

// route for admins to create a category
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

// route to fetch a category
router.get('/category/:categoryId', read);

// route reserved for admins to update a category
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);

// route reserved for admins to delete a category
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);

// route for fetching ALL categories
router.get('/categories', list);

// anytime there is 'userId' in the route param, then this middleware will run
router.param('userId', userById);
// anytime there is 'categoryId' in the route param, then this middleware will run
router.param('categoryId', categoryById)
module.exports = router;