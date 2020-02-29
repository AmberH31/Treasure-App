const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/product');

// route for creating a new product
// only for admins 
exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        // Make sures all form fields at completed
        const { name, description, price, category, quantity, shipping } = fields;

        if (!name || !description || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let product = new Product(fields);

        if (files.photo) {
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                console.log('PRODUCT CREATE ERROR ', err);
                return res.status(400).json({
                    error: 'error'
                });
            }
            res.json(result);
        });
    });
};

// id is coming in from the route paramater
exports.productById = (req, res, next, id) => {
    Product.findById(id)
        .populate('category')
        .exec((err, product) => {
            // if err or product not found send error msg
            if (err || !product) {
                return res.status(400).json({
                    error: 'Product not found'
                });
            }
            // otherwise, if the product is found based on the id then
            // populate result in the request object w/ name of product
            req.product = product;
            next();
        });
};

// CRUD : read method.
// refer to product route for fetching a single product
// when productById method is ran, the product request object will be available for 
// that specific product. the read method will respond to the product from the 
// req.product (line 59 from productById method)
exports.read = (req, res) => {
    // sending all the photos together will cause a lot of lag; therefore, we will
    //create a separate request that will load each product's photo
    req.product.photo = undefined;
    return res.json(req.product);
};

// As in the case of the read method above, REMOVE method is invoke after we first find
// the product by ID. the productById metod, when ran, will make the product request available
// in req.product
exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: 'error'
            });
        }
        res.json({
            // deletedProduct,
            message: 'Product deleted successfully'
        });
    });
};

// update a product
// only admins can update product info
exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }

        let product = req.product;
        // extend method is from lodash. the extend method take in two 
        // parameters of 'product' which is the product itself which is obtained
        // when the productById method is invoked in the route, and 
        // 'fields', which is the updated fields
        product = _.extend(product, fields);

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

// method for fetching all products
exports.list = (req, res) => {
    Product.find()
        .select('-photo')
        .populate('category')
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

// method for fetching similar products within the same category
// $ne = not including he the current product
exports.listRelated = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    // find similar products within the same category but not including the current product
    Product.find({ _id: { $ne: req.product }, category: req.product.category })
        .limit(limit)
        .populate('category', '_id name') // with mongoose populate() we have the flexibility to reference certain fields
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

// list all the category within all products
exports.listCategories = (req, res) => {
    // distinct is a mongodb method. we use it here to find all categories
    // that are used in the Product Model - distinct to Product.
    Product.distinct('category', {}, (err, categories) => {
        if (err) {
            return res.status(400).json({
                error: 'Categories not found'
            });
        }
        res.json(categories);
    });
};

// Middleware that will return product photo
exports.photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set('Content-Type', req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
};