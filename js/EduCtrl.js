angular.module('portfolio')
.controller('EduCtrl',['$scope', '$http', function ($scope, $http) {
    $http.get('json/education.json').then(function (response) {
        $scope.edu = response.data;
    });
    $http.get('json/skills.json').then(function (response) {
        $scope.skills = response.data;
    })
}]);