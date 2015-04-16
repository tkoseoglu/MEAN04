/**
 * Created by Kemal on 04/15/15.
 */
var mongoose = require('mongoose');


var CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        default: '',
        required: 'Course Name is required'
    },
    description: String,
    startTime: String,
    endTime: String,
    people:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Person'
    }],
    dateModified: Date,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', CourseSchema);