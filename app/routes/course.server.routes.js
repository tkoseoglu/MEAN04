/**
 * Created by Kemal on 04/15/15.
 */
// app/routes.js
var course = require('../controllers/course.server.controller.js');

module.exports = function (app) {

    //all
    app.route('/api/courses')
        .get(course.getAll);

    //get one
    app.route('/api/course/:id')
        .get(course.getOne);

    //save
    app.route('/api/course')
        .post(course.save);

    //delete one
    app.route('/api/course/:id')
        .delete(course.delete);


};