// app/routes.js
var person = require('../controllers/person.server.controller.js');

module.exports = function (app) {

    //all
    app.route('/api/people')
        .get(person.getAll);

    //get one
    app.route('/api/person/:id')
        .get(person.getOne);

    //save
    app.route('/api/person')
        .post(person.save);

    //delete one
    app.route('/api/person/:id')
        .delete(person.delete);


};