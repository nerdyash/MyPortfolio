angular.module('portfolio')
.controller('ExpCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('json/experience.json').then(function (response) {
        $scope.exp = response.data;
    })
}]);