var Mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Brand Schema
const BrandSchema = new Schema({
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
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('Brand', BrandSchema);