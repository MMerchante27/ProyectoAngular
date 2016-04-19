angular.module('pelisBabel').service('modificarAlquiler', ['authService', "APIClient","paths", function(authService, APIClient, paths){

	this.changeRented = function(movie, bool){
		var usuarioAutenticado = authService.getUserAuth();
        console.log("PASO POR AQUI");
        if(bool == true){
            movie.rent_user = usuarioAutenticado;
            console.log(movie);
            //lo que quiero es cambiar el "rented" por el usuario que está autenticado y ha dado al botón
        }

        else{
            movie.rent_user = "";
        }

        APIClient.modifyMovie(movie).then(
            function(data){
                console.log("PASO POR AQUI2");
            },
            function(data){
                console.log("error");
            }
        );
        return true;
    }
}])