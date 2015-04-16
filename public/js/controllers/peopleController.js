/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/peopleController.js
(function(){
    'use strict';
    helloWorldApp.controller('peopleController', function peopleController($scope, personService){
        $scope.header = 'People';
        $scope.people=[];

        personService.getAll().then(function(results){
            $scope.people = results;
        });

    });
}());