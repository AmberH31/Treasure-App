// https://github.com/mohamedsamara/mern-ecommerce/blob/master/server/models/cart.js
var mongoose = require('mongoose');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Cart', CartSchema);

