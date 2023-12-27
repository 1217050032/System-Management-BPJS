var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String,
    
    // New BPJS management fields
    bpjs_type: String,
    bpjs_number: String,
    last_payment: String
});

var User = mongoose.model('User', schema);

module.exports = User;
