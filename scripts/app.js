// Defino el módulo "moviedb"
angular.module("pelisBabel", ["ngRoute", "URL"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {
        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.login, {
            templateUrl: 'views/Login.html'
        }).when(paths.logout, {
            templateUrl: 'views/Logout.html'
        }).when(paths.movies, {
            templateUrl: 'views/MoviesList.html'
        }).when(paths.newMovie, {
            templateUrl: 'views/NewMovie.html',
        }).when(paths.myMovies, {
            templateUrl: 'views/MyMoviesList.html',
        }).when(paths.myRentedMovies, {
            templateUrl: 'views/MyRentedList.html',
        }).when(paths.movieDetail, {
            templateUrl: 'views/MovieDetail.html',
        }).when(paths.home, {
            redirectTo: paths.login
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);
