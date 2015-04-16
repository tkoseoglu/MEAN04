/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/coursesController.js
(function () {
    'use strict';
    helloWorldApp.controller('coursesController', function coursesController($scope, $routeParams, $location, courseService) {
        $scope.header = 'Courses';
        $scope.courses=[];

        courseService.getAll().then(function(results){
            $scope.courses = results;
        });

    });
}());