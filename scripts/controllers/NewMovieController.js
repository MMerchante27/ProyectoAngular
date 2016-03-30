angular.module("pelisBabel").controller('NewMovieController', ['$scope',"APIClient", function($scope, APIClient) {

	// Scope init
	$scope.model = {};

    $scope.saveMovie = function() {
        APIClient.createMovie($scope.model).then(
            function(movie) {
                $scope.model = {};
            },
            function(error) {
                console.log("Error al guardar la pelicula");
            }
        )
    }
}]);
