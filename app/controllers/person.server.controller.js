/**
 * Created by Kemal on 04/15/15.
 */
var Person = require('./../models/person');

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

exports.getPeople = function(req,res){
    // use mongoose to get all nerds in the database
    Person.find(function (err, persons) {
        if (err)
            res.send(err);
        res.json(persons); // return all nerds in JSON format
    });
};

exports.getOne = function(req,res){
    var id = req.params.id;
    console.log('Person Id ' + id);

    Person.findById(id).exec(function (err, person) {
        if (err) {
            var message = getErrorMessage(err);
            console.log('Error ' + message);
            return res.send(message);
        }
        res.json(person);
    });
};

exports.save = function(req,res){
    console.log('Person Id ' + req.body._id);
    console.log('Person Name ' + req.body.fullName);

    Person.findOne({_id: req.body._id}, function (err, dbPerson) {

        if (err) {
            var message = getErrorMessage(err);
            console.log('Error ' + message);
            return res.send(message);
        }
        else if (!dbPerson) {
            //user with uiUsername not found. Let's create a new user.
            console.log('Creating new Person');
            dbPerson = new Person();
            dbPerson.dateCreated = Date.now();
        }

        dbPerson.fullName = req.body.fullName;
        dbPerson.phoneNumber = req.body.phoneNumber;
        dbPerson.email = req.body.email;
        dbPerson.dateModified = Date.now();

        dbPerson.save(function (err, person) {
            if (err) {
                var message = getErrorMessage(err);
                console.log('Person save error ' + message);
                return res.send(message);
            } else {
                console.log('Person saved');
                res.send(true);
            }
        });
    });
};

exports.delete = function(req,res){
    var id = req.params.id;
    console.log('Person Id to delete ' + id);
    if (id) {
        Person.findOneAndRemove({_id: id}, function (err) {
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

exports.initialize = function(req,res){
    console.log('Creating some test persons');

    var person1 = new Person({
        fullName: 'Kemal Tolga Koseoglu',
        phoneNumber:'(949) 243-6632',
        email:'tkoseglu@live.com',
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
            res.json("Database initialized");
        }
    });
};