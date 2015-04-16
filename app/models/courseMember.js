/**
 * Created by Kemal on 04/15/15.
 */
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('CourseMember', {
    courseId:Number,
    personId:Number,
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});