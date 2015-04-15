// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function (app) {

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

    //all
    app.get('/api/nerds', function (req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    //get one
    app.get('/api/nerd/:id', function (req, res) {

        var id = req.params.id;
        console.log('Nerd Id ' + id);

        Nerd.findById(id).exec(function (err, nerd) {
            if (err) {
                var message = getErrorMessage(err);
                console.log('Error ' + message);
                return res.send(message);
            }
            res.json(nerd);
        });
    });

    //save one
    app.post('/api/nerd', function (req, res) {

        console.log('Nerd Id ' + req.body._id);
        console.log('Nerd Name ' + req.body.name);

        Nerd.findOne({_id: req.body._id}, function (err, dbNerd) {

            if (err) {
                var message = getErrorMessage(err);
                console.log('Error ' + message);
                return res.send(message);
            }
            else if (!dbNerd) {
                //user with uiUsername not found. Let's create a new user.
                console.log('Creating new Nerd');
                dbNerd = new Nerd();
                dbNerd.dateCreated = Date.now();
            }

            dbNerd.name = req.body.name;
            dbNerd.dateModified = Date.now();

            dbNerd.save(function (err, user) {
                if (err) {
                    var message = getErrorMessage(err);
                    console.log('Nerd saved error ' + message);
                    return res.send(message);
                } else {
                    console.log('Nerd saved');
                    res.send(true);
                }
            });
        });
    });

    //delete one
    app.delete('/api/nerd/:id', function (req, res) {

        var id = req.params.id;
        console.log('Nerd Id to delete ' + id);
        if(id){
            Nerd.findOneAndRemove({_id: id}, function (err) {
                if (err) {
                    var message = getErrorMessage(err);
                    console.log('Error ' + message);
                    return res.send(message);
                }
                res.json(true);
            });
        }
        else{
            res.json('No id provided');
        }

    });

    //init
    app.get('/api/init', function (req, res) {

        console.log('Creating some test nerds');

        var nerd1 = new Nerd({
            name: 'Jeff'
        });

        nerd1.save(function (err, dbUser) {

            if (err) {

                var message = getErrorMessage(err);
                console.log('Error initializing ' + message);

                return res.status(400).send({
                    message: message
                });
            }
            else {
                res.json("Database initialized");
            }
        });

    });

};