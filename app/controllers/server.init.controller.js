/**
 * Created by Kemal on 04/15/15.
 */
var Person = require('./../models/person');
var Course = require('./../models/course');

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


exports.init = function (req, res) {

    var returnMessage = '';
    console.log('Creating some test people');
    var person1 = new Person({
        fullName: 'Kemal Tolga Koseoglu',
        phoneNumber: '(949) 243-6632',
        email: 'tkoseglu@live.com',
        dateModified: Date.now(),
        dateCreated: Date.now()
    });
    person1.save(function (err, dbPerson) {
        if (err) {
            var message = getErrorMessage(err);
            console.log('Error initializing ' + message);
            return res.send(message);
        }
        else {
            returnMessage += "People document initialize; ";
        }
    });


    console.log('Creating some test courses');
    var course1 = new Course({
        courseName: 'AngularJs 101',
        description: 'An introduction to Angularjs...',
        startTime: "1 PM",
        endTime: "4:30 PM",
        dateModified: Date.now(),
        dateCreated: Date.now()
    });
    course1.save(function (err, dbCourse) {

        if (err) {
            var message = getErrorMessage(err);
            console.log('Error initializing ' + message);
            return res.send(message);
        }
        else {
            returnMessage += "Courses document initialize; ";
            res.json(returnMessage);
        }
    });

};