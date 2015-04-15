/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/nerdController.js
(function () {
    'use strict';
    helloWorldApp.controller('nerdController', function nerdController($scope, $routeParams, $location, nerdService) {
        $scope.header = 'New Nerd';
        $scope.nerd = {
            name: ''
        };
        $scope.form = {};
        $scope.isBusy = false;

        if ($routeParams.id) {
            $scope.isBusy = true;
            nerdService.getNerd($routeParams.id).then(function (result) {
                $scope.isBusy = false;
                $scope.nerd = angular.copy(result);
                $scope.header = 'Edit ' + $scope.nerd.name;
            });
        }

        $scope.saveNerd = function () {
            $scope.isBusy = true;
            nerdService.saveNerd($scope.nerd).then(function (result) {
                $scope.isBusy = false;
                if (result === true)
                    toastr.success("Ok!", 'Save');
                else
                    toastr.error(result, 'Save');

                $scope.nerd = {};
                $location.path('/nerds');
            });

        };

        $scope.deleteNerd = function () {
            $scope.isBusy = true;
            nerdService.deleteNerd($scope.nerd).then(function (result) {
                $scope.isBusy = false;
                if (result === true)
                    toastr.success("Ok!", 'Delete');
                else
                    toastr.error(result, 'Delete');

                $scope.nerd = {};
                $location.path('/nerds');
            });
        };

    });
}());