angular.module("pelisBabel").controller('MoviesListController', ['$scope',"$filter", "paths", "$location", "APIClient", "$sce", "authService", "modificarAlquiler",
    function($scope,$filter, paths, $location, APIClient, $sce, authService, modificarAlquiler) {

        $scope.uiState = 'loading';

        var usuarioAutenticado = authService.getUserAuth();

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        // Scope init
        $scope.model = [];


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

        $scope.isTheUser = function(usuarioAComprobar) {
            if (usuarioAComprobar == usuarioAutenticado) {
                return true;
            } else {
                return false;
            }
        }

        $scope.changeRented = function(movie, bool) {
            console.log("PASO POR AQUI");
            if (bool == true) {
                movie.rent_user = usuarioAutenticado;
                //lo que quiero es cambiar el "rented" por el usuario que está autenticado y ha dado al botón
            } else {
                movie.rent_user = "";
                //lo que quiero es quitar que "rented_user" es ""
            }

            APIClient.modifyMovie(movie).then(
                function(data) {
                    $location.url(paths.movies);
                },
                function(data) {
                    $scope.uiState = "error";
                }
            )
        }

        $scope.alquilar = function(movie) {
            var date = new Date();
            date = $filter('date')(date, "yyyy/MM/dd");
            movie.rent_date = date;
            modificarAlquiler.changeRented(movie, true);
        }

        $scope.verPeli = function(movie) {
            return false;
        }

    }
]);
