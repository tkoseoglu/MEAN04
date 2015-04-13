/**
 * Created by Kemal on 02/03/15.
 */
// public/js/services/nerdService.js

(function () {
    'use strict';
    helloWorldApp.factory('nerdService', function ($http, $log, $q) {
        return {
            getNerds: function () {
                console.time('Getting Nerds');
                return $http({
                    method: 'GET',
                    url: '/api/nerds'
                }).
                    then(function (response) {
                        console.timeEnd('Getting Nerds');
                        return response.data;
                    });
            },
            saveNerd: function (vm) {
                console.time('Saving Nerd');
                return $http({
                    method: 'POST',
                    data:vm,
                    url: '/api/nerds/'
                }).
                    then(function (response) {
                        console.timeEnd('Saving Nerd');
                        return response.data;
                    });
            }
        };
    });
}());