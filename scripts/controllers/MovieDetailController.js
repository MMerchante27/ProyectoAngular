angular.module("pelisBabel").controller("MovieDetailController", ["$scope", "$sce", "$routeParams", "APIClient", "paths", "$location", function($scope, $sce, $routeParams, APIClient, paths, $location) {

    // scope init

    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    $scope.$emit("ChangeTitle", "Loading...");
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    // controller init
    APIClient.getMovie($routeParams.id).then(
        // Película encontrada
        function(movie) {
            $scope.model = movie;
            $scope.uiState = 'ideal';
            $scope.$emit("ChangeTitle", $scope.model.title);
        },
        // Película no encontrada
        function(error) {
            // TODO: improve error management
            $location.url(paths.notFound);
        }
    );
}]);
