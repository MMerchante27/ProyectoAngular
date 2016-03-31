angular.module("pelisBabel").controller('MoviesListController', ['$scope', "paths", "$location", "APIClient", "$sce", "authService", "modificarAlquiler", function($scope, paths, $location, APIClient, $sce, authService, modificarAlquiler){
	
    var usuarioAutenticado = authService.getUserAuth();

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

	// Scope init
	$scope.model = [];

    $scope.uiState = 'loading';

	APIClient.getMovies().then(
        // promesa resuelta
        function(data) {
        	$scope.model = data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        //promesa rechazada
        function(data) {
            $scope.uiState = "error";
        }
    )

    $scope.isTheUser = function(usuarioAComprobar){
        if(usuarioAComprobar == usuarioAutenticado){
            return true;
        }
        else{
            return false;
        }
    }

    $scope.alquilar = function(movie){
        modificarAlquiler.changeRented(movie, true);
    }

    $scope.verPeli = function (movie){
        return false;
    }

}]);