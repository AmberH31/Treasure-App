const express = require("express");
const router = express.Router();

const { create, productById, read, remove, update, list, listRelated, listCategories, photo } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/userAuth");
const { userById } = require("../controllers/user");


// user must be an authorized user and an Admin to access this route
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

// fetch a single product
// read method from CRUD
router.get('/product/:productId', read);

// delete a product
// delete method from CRUD
// only admins can delete product
// notice that we bring in both the userById and productById methods in the route
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);

// update a product
// only admins can update product info
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update);

// fetch all products
router.get("/products", list);

// fetch all products within the same category not incuding the current product
router.get("/products/related/:productId", listRelated);

// fetch all categories
router.get("/products/categories", listCategories);

// fetch product photo
router.get("/product/photo/:productId", photo);

// if ':/userId' is in the route, then the userById method will run
router.param("userId", userById);
// if ':/productId' is in the route, then the productById method will run
router.param("productId", productById);


module.exports = router;