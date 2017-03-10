var app = angular.module('portfolio', ['ngRoute', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
                controller: 'HomeCtrl'
            })
            .when('/education', {
                templateUrl:'view/education.html',
                controller: 'EduCtrl'
            })
            .when('/contact', {
                templateUrl: 'view/contact.html'
            })
            .when('/project', {
                templateUrl: 'view/project.html',
                controller: 'ProCtrl'
            })
            .when('/experience', {
                templateUrl:'view/experience.html',
                controller: 'ExpCtrl'
            })

            .otherwise({redirectTo: '/'});
    }]);
