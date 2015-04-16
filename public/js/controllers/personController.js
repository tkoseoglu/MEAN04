/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/personController.js
(function () {
    'use strict';
    helloWorldApp.controller('personController', function personController($scope, $routeParams, $location, personService, courseService) {
        $scope.header = 'New Person';
        $scope.person = {
            fullName: '',
            phoneNumber: '',
            email: ''
        };
        $scope.courses=[];
        $scope.form = {};
        $scope.isBusy = false;

        if ($routeParams.id) {
            $scope.isBusy = true;
            personService.get($routeParams.id).then(function (result) {
                $scope.isBusy = false;
                $scope.person = angular.copy(result);
                $scope.header = 'Edit ' + $scope.person.fullName;
            });
        }

        courseService.getAll().then(function(results){
            $scope.courses = results;
        });

        $scope.save = function () {
            $scope.isBusy = true;
            personService.save($scope.person).then(function (result) {
                $scope.isBusy = false;
                if (result === true)
                    toastr.success("Ok!", 'Save');
                else
                    toastr.error(result, 'Save');

                $scope.person = {};
                $location.path('/people');
            });

        };

        $scope.delete = function () {
            $scope.isBusy = true;
            personService.delete($scope.person).then(function (result) {
                $scope.isBusy = false;
                if (result === true)
                    toastr.success("Ok!", 'Delete');
                else
                    toastr.error(result, 'Delete');

                $scope.person = {};
                $location.path('/people');
            });
        };

    });
}());