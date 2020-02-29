// https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
// https://stackoverflow.com/questions/14588032/mongoose-password-hashing
var mongoose = require("mongoose");
var bycrypt = require(bycrypt);
var SALT_WORK_FACTOR = 10;

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// The User Model
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, name: {
        firstName: { type: String },
        lastName: { type: String }
    }
});

// Password Hashing Middleware
UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// Password Verification
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Login model
module.exports = User;
