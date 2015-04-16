/**
 * Created by Kemal on 04/15/15.
 */
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Class', {
    personId: Number,
    className: {
        type: String,
        default: '',
        required: 'Class Name is required'
    },
    description: String,

    startTime: Date,
    endTime: Date,
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});