/**
 * Created by Kemal on 04/15/15.
 */
// app/routes.js
var server = require('../controllers/server.init.controller.js');

module.exports = function (app) {

    //init
    app.route('/api/init')
        .get(server.init);

};