angular.module("pelisBabel").directive('movieItemList', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	model: "=model",
		 	isTheUser: "&",
		 	// Para pasar métodos:
		 	//Tendré que poner el código a ejecutar cuando en la directiva yo llame al getDetailUrl
		 }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		restrict: "AE",
		// template: '',
		templateUrl: 'views/MovieItem.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),

	};
});