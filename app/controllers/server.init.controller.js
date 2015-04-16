/**
 * Created by Kemal on 04/15/15.
 */

var Person = require('./../models/person'),
    Course = require('./../models/course');

var getErrorMessage = function (err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

var createSampleCourses = function () {

    console.log('Creating courses');
    var courses = [new Course({
        courseName: 'AngularJs 101',
        description: 'An introduction to Angularjs...',
        startTime: "1 PM",
        endTime: "4:30 PM",
        dateModified: Date.now(),
        dateCreated: Date.now()
    }), new Course({
        courseName: 'Mean 301',
        description: 'An advanced course for MEAN...',
        startTime: "8 AM",
        endTime: "10 AM",
        dateModified: Date.now(),
        dateCreated: Date.now()
    })];
    return courses;
};

var createSamplePeople = function () {

    console.log('Creating people');

    var people = [new Person({
        fullName: 'James Smith',
        phoneNumber: '(222) 545-3434',
        email: 'smith@live.com',
        dateModified: Date.now(),
        dateCreated: Date.now()
    }), new Person({
        fullName: 'Michael Rover',
        phoneNumber: '(949) 243-6632',
        email: 'mrover@live.com',
        dateModified: Date.now(),
        dateCreated: Date.now()
    })];

    return people;

};

exports.init = function (req, res) {

    var returnMessage = 'Start;';
    var sampleCourses = createSampleCourses();
    var samplePeople = createSamplePeople();

    sampleCourses.forEach(function (jsonCourse) {
        jsonCourse.people = samplePeople;
        jsonCourse.save(function (err, dbCourse) {
            if (!err) {
                returnMessage += "Courses saved; ";
            }
        });
    });

    samplePeople.forEach(function (jsonPerson) {
        jsonPerson.courses = sampleCourses;
        jsonPerson.save(function (err, dbPerson) {
            if (!err) {
                returnMessage += "Person saved; ";
            }
        });
    });

    res.json(returnMessage);

};

