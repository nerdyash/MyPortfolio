var app = angular.module('portfolio', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
                controller: 'HomeCtrl'
            })
            .when('/education', {
                templateUrl:'view/education.html',
                controller: 'EduCtrl'
            })
            .when('/experience', {
                templateUrl: 'view/experience.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
