/**
 * Created by Kemal on 04/15/15.
 */
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

exports.getAll = function(req,res){
    // use mongoose to get all nerds in the database
    Course.find(function (err, courses) {
        if (err)
            res.send(err);
        res.json(courses); // return all nerds in JSON format
    });
};

exports.getOne = function(req,res){
    var id = req.params.id;
    console.log('Class Id ' + id);

    Course.findById(id).exec(function (err, dbCourse) {
        if (err) {
            var message = getErrorMessage(err);
            console.log('Error ' + message);
            return res.send(message);
        }
        res.json(dbCourse);
    });
};

exports.save = function(req,res){
    console.log('Course Id ' + req.body._id);
    console.log('Course Name ' + req.body.className);

    Course.findOne({_id: req.body._id}, function (err, dbCourse) {

        if (err) {
            var message = getErrorMessage(err);
            console.log('Error ' + message);
            return res.send(message);
        }
        else if (!dbCourse) {
            //user with uiUsername not found. Let's create a new user.
            console.log('Creating new Person');
            dbCourse = new Course();
            dbCourse.dateCreated = Date.now();
        }

        dbCourse.fullName = req.body.className;
        dbCourse.description = req.body.description;
        dbCourse.dateModified = Date.now();

        dbCourse.save(function (err, course) {
            if (err) {
                var message = getErrorMessage(err);
                console.log('Course save error ' + message);
                return res.send(message);
            } else {
                console.log('Course saved');
                res.send(true);
            }
        });
    });
};

exports.delete = function(req,res){
    var id = req.params.id;
    console.log('Course Id to delete ' + id);
    if (id) {
        Course.findOneAndRemove({_id: id}, function (err) {
            if (err) {
                var message = getErrorMessage(err);
                console.log('Error ' + message);
                return res.send(message);
            }
            res.json(true);
        });
    }
    else {
        res.json('No id provided');
    }
};

