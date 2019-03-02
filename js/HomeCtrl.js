angular.module('portfolio')
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('json/home.json').then(function (response) {
        $scope.basic = response.data;
    });
}]);