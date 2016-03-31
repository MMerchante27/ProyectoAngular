angular.module("pelisBabel").controller("AppController", ["$scope", "$location", "paths", "authService",
    function($scope, $location, paths, authService) {
        var controller = this;
        //Controller properties
        controller.titles = {};
        controller.titles[paths.login] = "Login";
        controller.titles[paths.movies] = "Movies List";
        controller.titles[paths.newMovie] = "New Movie";
        controller.titles[paths.myMovies] = "My Movies";
        controller.titles[paths.logout] = "Logout";

        // Model init
        $scope.model = { //Representación modelo
            title: ""
        };


        //Scope event listeners
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) { //.$on capturar evento 
            if (authService.getUserAuth()) {
                $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
            }
            else $location.path(paths.login);
        });

        $scope.$on("ChangeTitle", function(evt, title) {
            $scope.model.title = title;
        });



    }
]);
