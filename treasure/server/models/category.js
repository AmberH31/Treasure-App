// https://github.com/mohamedsamara/mern-ecommerce/blob/master/server/models/category.js
var mongoose = require('mongoose');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        trim: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', CategorySchema);

