/**
 * Created by Kemal on 02/03/15.
 */
// public/js/services/personService.js

(function () {
    'use strict';
    helloWorldApp.factory('personService', function ($http, $log, $q) {
        return {
            getAll: function () {
                console.time('Getting People');
                return $http({
                    method: 'GET',
                    url: '/api/people'
                }).
                    then(function (response) {
                        console.timeEnd('Getting People');
                        return response.data;
                    });
            },
            get: function (id) {
                console.time('Getting Person ' + id);
                return $http({
                    method: 'GET',
                    url: '/api/person/' + id
                }).
                    then(function (response) {
                        console.timeEnd('Getting Person ' + id);
                        return response.data;
                    });
            },
            save: function (vm) {
                console.time('Saving Person ' + vm._id);
                return $http({
                    method: 'POST',
                    data: vm,
                    url: '/api/person/'
                }).
                    then(function (response) {
                        console.timeEnd('Saving Person ' + vm._id);
                        return response.data;
                    });
            },
            delete: function (vm) {
                console.time('Deleting Person ' + vm._id);
                return $http({
                    method: 'DELETE',
                    data: vm,
                    url: '/api/person/' + vm._id
                }).
                    then(function (response) {
                        console.timeEnd('Deleting Person ' + vm._id);
                        return response.data;
                    });
            }
        };
    });
}());