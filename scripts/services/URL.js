angular.module('URL', []).service("URL", ["$log", function($log){

	this.resolve = function(url, params){
		var finalURL = [];
		var urlParts = url.split("/");
		for(var i in urlParts){
			// En javascript este for es la forma abreviada de hacer un for(int i = 0; i < lo que sea ; i++)
			var urlPart = urlParts[i];
			if(urlPart.substr(0, 1) == ":"){
				//convierte :id en id
				var paramName = urlPart.substr(1);
				var paramValue = params[paramName] || null;
				if(paramValue == null){
					$log.error("URL.resolve error: ", paramName, "not found in params dict. Check your 'params' value bro");
					return;
				}
				finalURL.push(paramValue);
			}
			else{
				finalURL.push(urlPart);
			}
		}
		return finalURL.join("/");
	};
}]);
