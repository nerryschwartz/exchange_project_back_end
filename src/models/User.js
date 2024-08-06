const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String
    // will add other fields later
});

module.exports = mongoose.model('User', UserSchema);