// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Person', {
    fullName: {
        type: String,
        default: '',
        required: 'Full Name is required'
    },
    phoneNumber: String,
    email: String,
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});