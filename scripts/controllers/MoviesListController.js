angular.module("pelisBabel").controller('MoviesListController', ['URL', 'apiPaths', '$scope', "$filter", "paths", "$location", "APIClient", "$sce", "authService", "modificarAlquiler",
    function(URL, apiPaths, $scope, $filter, paths, $location, APIClient, $sce, authService, modificarAlquiler) {


        var usuarioAutenticado = authService.getUserAuth();
        $scope.uiState = 'loading';

        $scope.table = 'false';
        $scope.noTable = 'true';

        // Scope init
        $scope.model = [];

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

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


        $scope.desalquilar = function(movie) {
            var url = URL.resolve(paths.movieDetail, { id: movie.id });
            if (movie.create_user == usuarioAutenticado) {
                $location.path(url);
            } else {
                modificarAlquiler.changeRented(movie, false);
                $location.path(url);
            }
        }


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

        $scope.verPeli = function(movie) {
            var url = URL.resolve(paths.movieDetail, { id: movie.id });
            $location.path(url);
        }

        $scope.gridTable = function() {

            if($scope.noTable == 'true'){
                $scope.table = 'true';
                $scope.noTable = 'false';
            }
            else{
                $scope.table = 'false';
                $scope.noTable = 'true';
            }
        }

        $scope.alquilar = function(movie) {
            var date = new Date();
            date = $filter('date')(date, "yyyy/MM/dd");
            movie.rent_date = date;
            modificarAlquiler.changeRented(movie, true);
        }

    }
]);
