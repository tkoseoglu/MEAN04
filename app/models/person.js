// grab the mongoose module
var mongoose = require('mongoose');


var PersonSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: '',
        required: 'Full Name is required'
    },
    phoneNumber: String,
    email: String,
    courses:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Course'
    }],
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Person', PersonSchema);