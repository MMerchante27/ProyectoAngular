angular.module("pelisBabel").controller('NewMovieController', ['$scope',"APIClient", "paths", "$location", "authService", function($scope, APIClient, paths, $location, authService) {

    var usuarioAutenticado = authService.getUserAuth();

	// Scope init
	$scope.model = {};

    $scope.saveMovie = function() {

        $scope.model.create_user = usuarioAutenticado;
        $scope.model.rent_user = "";
        $scope.model.create_date = "2016/01/01";
        APIClient.createMovie($scope.model).then(
            function(movie) {
                $location.path(paths.movies);
            },
            function(error) {
                console.log("Error al guardar la pelicula");
            }
        )
    }
}]);
