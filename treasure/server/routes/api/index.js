const router = require('express').Router();
const newsletterRoutes = require('./newsletter');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const productRoutes = require('./product');
const cartRoutes = require('./cart');
const brandRoutes = require('./brand');
const categoryRoutes = require('./category');
const merchantRoutes = require('./merchant');
const contactRoutes = require('./contact');


// auth routes
router.use('/auth', authRoutes);

// user routes
router.use('/user', userRoutes);

// newsletter routes
router.use('/newsletter', newsletterRoutes);

// product routes
router.use('/product', productRoutes);

// category routes
router.use('/category', categoryRoutes);

// brand routes
router.use('/brand', brandRoutes);

// cart routes
router.use('/cart', cartRoutes);

// contact routes
router.use('/contact', contactRoutes);

// merchant routes
router.use('/merchant', merchantRoutes);

module.exports = router;