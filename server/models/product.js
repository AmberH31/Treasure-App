// https://github.com/mohamedsamara/mern-ecommerce/blob/master/server/models/product.js
// https://github.com/jaewonhimnae/react-shop-app/blob/master/server/models/Product.js
var mongoose = require('mongoose');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        default: 0
    },
    //https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
    images: {
        data: Buffer,
        contentType: String
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;