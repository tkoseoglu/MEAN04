/**
 * Created by Kemal on 02/03/15.
 */
// public/js/services/personService.js

(function () {
    'use strict';
    helloWorldApp.factory('courseService', function ($http, $log, $q) {
        return {
            getAll: function () {
                console.time('Getting Courses');
                return $http({
                    method: 'GET',
                    url: '/api/courses'
                }).
                    then(function (response) {
                        console.timeEnd('Getting Courses');
                        return response.data;
                    });
            },
            get: function (id) {
                console.time('Getting Course ' + id);
                return $http({
                    method: 'GET',
                    url: '/api/course/' + id
                }).
                    then(function (response) {
                        console.timeEnd('Getting Course ' + id);
                        return response.data;
                    });
            },
            save: function (vm) {
                console.time('Saving Course ' + vm._id);
                return $http({
                    method: 'POST',
                    data: vm,
                    url: '/api/course/'
                }).
                    then(function (response) {
                        console.timeEnd('Saving Course ' + vm._id);
                        return response.data;
                    });
            },
            delete: function (vm) {
                console.time('Deleting Course ' + vm._id);
                return $http({
                    method: 'DELETE',
                    data: vm,
                    url: '/api/course/' + vm._id
                }).
                    then(function (response) {
                        console.timeEnd('Deleting Course ' + vm._id);
                        return response.data;
                    });
            }
        };
    });
}());