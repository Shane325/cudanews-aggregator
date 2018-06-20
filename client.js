CudaNewsApp = angular.module('CudaNewsApp', ['CudaNewsApp.controllers', 'smart-table']);
 
angular.module('CudaNewsApp.controllers', []).controller('CudaNewsController',  ['$scope', '$http', function($scope, $http) {
 $scope.loading = false;
 $scope.getData = function() {
    $scope.loading = true;
    $http.get('http://localhost:8080/api/articles')
        .then(function(response){
             $scope.news = response.data;
             console.log(response.data);
             $scope.loading = false;
     });
 }

 $scope.getData();

}]);
