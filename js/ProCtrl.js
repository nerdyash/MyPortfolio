angular.module('portfolio')
    .controller('ProCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/project.json').then(function (response) {
            $scope.pro = response.data;
        });
    }]);