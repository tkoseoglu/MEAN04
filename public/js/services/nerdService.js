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
            getNerd: function (id) {
                console.time('Getting Nerd ' + id);
                return $http({
                    method: 'GET',
                    url: '/api/nerd/' + id
                }).
                    then(function (response) {
                        console.timeEnd('Getting Nerd ' + id);
                        return response.data;
                    });
            },
            saveNerd: function (vm) {
                console.time('Saving Nerd ' + vm._id);
                return $http({
                    method: 'POST',
                    data: vm,
                    url: '/api/nerd/'
                }).
                    then(function (response) {
                        console.timeEnd('Saving Nerd ' + vm._id);
                        return response.data;
                    });
            },
            deleteNerd: function (vm) {
                console.time('Deleting Nerd ' + vm._id);
                return $http({
                    method: 'DELETE',
                    data: vm,
                    url: '/api/nerd/' + vm._id
                }).
                    then(function (response) {
                        console.timeEnd('Deleting Nerd ' + vm._id);
                        return response.data;
                    });
            }
        };
    });
}());