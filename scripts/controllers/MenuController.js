angular.module("pelisBabel").controller("MenuController", ["$scope", "$location", "$rootScope", "paths", "logService",
    function($scope, $location,  $rootScope, paths, logService) {

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

        // $rootScope.$broadcast('rootScope:broadcast', 'Broadcast'); // $rootScope.$on && $scope.$on

        logService.subscribe($scope, function somethingChanged() {
            $scope.userState = "logged";
        });


        //Segunda manera
        // var onEditLogHandler = function(state){
        //     console.log("hola");
        //     $scope.userState = state;
        // }

        // logService.onEditLog($scope, onEditLogHandler);

        // $scope.onSave = function(state){
        //     logService.onSave(state);
        // }
        // $scope


    }
]);
