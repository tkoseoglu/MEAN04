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

        .when('/nerd/:id', {
            templateUrl: 'js/views/nerd.html',
            controller: 'nerdController'
        })

        .otherwise({
            redirectTo: '/'
        });

    //with this we don't need to have # in the URL. The problem is, page refreshing aren't working. It required
    //url rewriting on the server side, so...
    //$locationProvider.html5Mode(true);

}]);
