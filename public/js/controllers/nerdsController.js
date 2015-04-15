/**
 * Created by Kemal on 02/03/15.
 */
// public/js/controllers/nerdsController.js
(function(){
    'use strict';
    helloWorldApp.controller('nerdsController', function nerdsController($scope, nerdService){
        $scope.header = 'Nerds';
        $scope.nerds=[];

        nerdService.getNerds().then(function(results){
            $scope.nerds = results;
        });

    });
}());