angular.module("pelisBabel", ['ngRoute', "URL"]).config(
	// solicitamos que se nos inyecten cosas para así configurarlas
	["$routeProvider", "paths", function($routeProvider, paths){

		// configuro las URLs de la aplicación

		$routeProvider.when(paths.movies, {
			templateUrl: 'views/MoviesList.html'
		}).when(paths.newMovie, {
			templateUrl: 'views/NewMovie.html'
		}).when(paths.movieDetail, {
			controller : 'MovieDetailController',
			templateUrl: 'views/MediaItemDetail.html'
		}).when(paths.login, {
			redirectTo: paths.login
		}).otherwise({
			templateUrl: 'views/404.html'
		})
	}]

); 