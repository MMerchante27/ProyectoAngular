angular.module("pelisBabel").service('authService', ["$window",

    function($window) {
        this.saveUserAuth = function(user) {
            $window.localStorage['user'] = user;
        }

        this.getUserAuth = function() {
            return $window.localStorage['user'];
        }

        this.logoutUser =function(){
        	$window.localStorage.removeItem('user');
        }

    }
]);
