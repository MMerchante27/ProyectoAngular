angular.module("pelisBabel").controller('LogoutController', ['$scope', "$location", "$rootScope", "paths", "logService",
    function($scope, $location, $rootScope, paths, logService) {

        //Scope init
        $scope.model = {};
      

        //Scope methods
        // $scope.saveUser = function() {
        //     logService.notify();
        //     // $scope.userState = "logged";
        //     // var state = logService.changeLog($scope.userState);
        //     // $location.url(paths.notFound);
        //     // $scope.$emit("ChangeLog",state);

        //     // $rootScope.$on('rootScope:broadcast', function(event,data){
        //     //     console.log(data); // broadcast!
        //     // });


        //     // Segunda prueba
        //     //     var state = $scope.userState;
        //     //     console.log(state);
        //     //     var onEdit = function(state) {
        //     //         if (state == "no-logged") {
        //     //             state = "logged";
        //     //         }
        //     //         logService.editLog(state);
        //     //         return;

        //     //     }
        //     // }
        //     // $scope.saveMovie = function() {
        //     //     APIClient.createMovie($scope.model).then(
        //     //         function(movie) {
        //     //             $scope.successMessage = "Movie saved! <a href=\"#/movies/" + movie.id + "\"> View new movie detail</a>";
        //     //             $scope.model = {};
        //     //             $scope.movieForm.$setPristine(); 
        //     //         },
        //     //         function(error) {
        //     //             $scope.errorMessage = "Fatal error. The end is near.";

        //     //         }

        //     //     )
        // };
        // logService.subscribe($scope, function somethingChanged() {
        //     console.log("holi2");
        // });

    }
]);
