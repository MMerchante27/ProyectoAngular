angular.module("pelisBabel").controller('LogoutController', ['$scope', "$location", "$rootScope", "paths", "logService", "authService",
    function($scope, $location, $rootScope, paths, logService, authService) {

        //Scope init
        $scope.model = {};
        $scope.uiState = 'loading';


        $scope.exitUser = function() {
            logService.notifyLogout();
        };

        logService.subscribeLogout($scope, function somethingChanged() {
            console.log("He cambiado a no-logged");
            authService.logoutUser();
            $location.url(paths.login);

        });



    }
]);
