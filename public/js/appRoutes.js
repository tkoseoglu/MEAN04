/**
 * Created by Kemal on 02/03/15.
 */
// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'js/views/home.html',
            controller: 'homeController'
        })

        // nerds page that will use the NerdController
        .when('/people', {
            templateUrl: 'js/views/people.html',
            controller: 'peopleController'
        })

        .when('/person', {
            templateUrl: 'js/views/person.html',
            controller: 'personController'
        })

        .when('/person/:id', {
            templateUrl: 'js/views/person.html',
            controller: 'personController'
        })

        // nerds page that will use the NerdController
        .when('/courses', {
            templateUrl: 'js/views/courses.html',
            controller: 'coursesController'
        })

        .when('/course', {
            templateUrl: 'js/views/course.html',
            controller: 'courseController'
        })

        .when('/course/:id', {
            templateUrl: 'js/views/course.html',
            controller: 'courseController'
        })

        .otherwise({
            redirectTo: '/'
        });

    //with this we don't need to have # in the URL. The problem is, page refreshing aren't working. It required
    //url rewriting on the server side, so...
    //$locationProvider.html5Mode(true);

}]);
