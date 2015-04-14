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
        .when('/nerds', {
            templateUrl: 'js/views/nerds.html',
            controller: 'nerdsController'
        })

        .when('/nerd', {
            templateUrl: 'js/views/nerd.html',
            controller: 'nerdController'
        })

        .otherwise({
            redirectTo: '/'
        });

    //with this we don't need to have # in the URL
    $locationProvider.html5Mode(true);

}]);
