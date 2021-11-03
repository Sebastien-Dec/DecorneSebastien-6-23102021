const mongoose = require('mongoose');
//Import of the framework to have a unique email per user 
const uniqueValidator = require('mongoose-unique-validator');

//Creation of the data schema for the users
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);