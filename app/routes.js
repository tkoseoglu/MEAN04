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

    app.get('/api/nerds', function (req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.post('/api/nerds', function (req, res) {

        var userContext = req.user;
        console.log('Save; Current Context ' + userContext);

        var uiId = req.body._id;

        if (userContext && uiId) {

            Nerd.findOne({_id: uiId}, function (err, dbNerd) {

                if (err) {
                    return res.send(getErrorMessage(err));
                }
                else if (!dbNerd) {
                    //user with uiUsername not found. Let's create a new user.
                    dbNerd = new Nerd();
                    dbNerd.dateCreated = Date.now();
                }

                dbNerd.name = req.body.name;
                dbNerd.dateModified = Date.now();

                dbNerd.save(function (err, user) {
                    if (err) {
                        return res.send(getErrorMessage(err));
                    } else {
                        res.send(true);
                    }
                });

            });
        }
        else {
            console.log('User session invalid or expired');
            return res.send(false);
        }
    });

    app.get('/api/init', function (req, res) {

        console.log('Creating some test nerds');

        var nerd1 = new Nerd({
            name: 'Jeff'
        });

        nerd1.save(function (err, dbUser) {

            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            }
            else {
                res.json("Database initialized");
            }
        });

    });

};