angular.module("pelisBabel").service("APIClient", 
	["$http", "$q", "apiPaths", "URL", function($http, $q, apiPaths, URL){

		this.apiRequest = function(url){
			// Crear el objeto diferido
			var deferred = $q.defer();
			// Hacer trabajo asíncrono
			$http.get(url).then(

				//petición ok 
			
				function(response){
					// resolver la promesa
					deferred.resolve(response.data);
				},
				//pretición KO
				function(response){
					// rechazar la promesa
					deferred.reject(response.data);
				}

			);

			// devolver la promesa
			return deferred.promise;
		}

		this.getMovies = function(){
			return this.apiRequest(apiPaths.movies);
			
		};

		this.getMovie = function(movieId){
			var url = URL.resolve(apiPaths.movieDetail, {id: movieId});
			return this.apiRequest(url);
		}

		this.createMovie = function(movie){
			var deferred = $q.defer();
			$http.post(apiPaths.movies, movie).then(
				function(response){
					deferred.resolve(response.data);
				},
				function(response){
					deferred.reject(response.data)
				}
			)
			// devolver la promesa
			return deferred.promise;
		}
		
		this.modifyMovie = function(movie){
			var deferred = $q.defer();

			var url = URL.resolve(apiPaths.movieDetail, {id: movie.id});

			$http.put(url, movie).then(
				function(response){
					deferred.resolve(response.data);
				},
				function(response){
					deferred.reject(response.data);
				}
			)
			return deferred.promise;
		}
}]

);