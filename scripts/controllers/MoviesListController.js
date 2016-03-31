angular.module("pelisBabel").controller('MoviesListController', ['$scope', "APIClient", function($scope, APIClient){
	
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

}]);