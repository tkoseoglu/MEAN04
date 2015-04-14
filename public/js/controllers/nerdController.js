/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/nerdController.js
(function () {
    'use strict';
    helloWorldApp.controller('nerdController', function nerdController($scope, nerdService) {
        $scope.header = 'New Nerd';
        $scope.nerd = {
            name: ''
        };
        $scope.form = {};
        $scope.isBusy = false;

        $scope.saveNerd = function () {
            $scope.isBusy = true;

            nerdService.saveNerd($scope.nerd).then(function(result){

                $scope.isBusy = false;
            });

        };

    });
}());