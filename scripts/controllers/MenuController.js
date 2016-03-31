angular.module("pelisBabel").controller("MenuController", ["$scope", "$location", "$rootScope", "paths", "logService",
    function($scope, $location, $rootScope, paths, logService) {

        //Scope init
        $scope.model = {
            selectedItem: paths.movies
        };

        $scope.userState = "no-logged";
        $scope.paths = paths;

        //Scope methods


        $scope.getClassForItem = function(item) {
            if ($scope.model.selectedItem == item) {
                return "active";
            } else {
                return "";
            }
        };

        //Scope Watchers


        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) { //.$on capturar evento 
            $scope.model.selectedItem = $location.path();
        });

        logService.subscribeLogin($scope, function somethingChanged() {

            $scope.userState = "logged";
        });

        logService.subscribeLogout($scope, function somethingChanged() {
            
            $scope.userState = "no-logged";
        });


    }
]);
