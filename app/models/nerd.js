// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name: {
        type: String,
        default: '',
        required: 'Name is required'
    },
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});