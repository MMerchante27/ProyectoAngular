angular.module("pelisBabel").controller("MenuController", 	
	["$scope", "$location", "paths", function($scope, $location, paths) {

		//Scope init
		$scope.model = {
			selectedItem:paths.movies
		};

		$scope.paths = paths;

		//Scope methods
		

		$scope.getClassForItem = function(item){
			if($scope.model.selectedItem == item){
				return "active";
			} else {
				return "";	
			}
		};

		//Scope Watchers

		$scope.$on("$locationChangeSuccess",function(evt, currentRoute){ //.$on capturar evento 
			$scope.model.selectedItem = $location.path();
		});

	}]
);