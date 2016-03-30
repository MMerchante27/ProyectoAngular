angular.module("pelisBabel").controller('LoginFormController', ['$scope', "$location", "paths", function($scope, $location, paths) {

    //Scope init
    $scope.model = {};
    //Scope methods
    $scope.saveUser = function() {
            $location.url(paths.notFound);
        }
        // $scope.saveMovie = function() {
        //     APIClient.createMovie($scope.model).then(
        //         function(movie) {
        //             $scope.successMessage = "Movie saved! <a href=\"#/movies/" + movie.id + "\"> View new movie detail</a>";
        //             $scope.model = {};
        //             $scope.movieForm.$setPristine(); 
        //         },
        //         function(error) {
        //             $scope.errorMessage = "Fatal error. The end is near.";

    //         }

    //     )
    // };

}]);
