//- app
//----- models/
//---------- person.js <!-- the nerd model to handle CRUD -->
//----- person.server.routes.js
//- config
//----- db.js
//- node_modules <!-- created by npm install -->
//- public <!-- all frontend and angular stuff -->
//----- css
//----- js
//---------- controllers <!-- angular controllers -->
//---------- services <!-- angular services -->
    //----- views
    //---------- home.html
    //---------- people.html
    //---------- geek.html
//---------- app.js <!-- angular application -->
//---------- appRoutes.js <!-- angular routes -->
//----- img
//----- libs <!-- created by bower install -->

//----- index.html
//- .bowerrc <!-- tells bower where to put files (public/libs) -->
//- bower.json <!-- tells bower which files we need -->
//- package.json <!-- tells npm which packages we need -->
//- server.js <!-- set up our node application -->


// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes/person.server.routes.js')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;