angular.module("pelisBabel").service('logService', ["$rootScope",
    function($rootScope) {

        return {
            subscribe: function(scope, callback) {
                var handler = $rootScope.$on('notifying-service-event', callback);
                console.log("holi");
            },

            notify: function() {
                $rootScope.$emit('notifying-service-event');
            }
        };

        // var LOGIN_STATE = "loginState";
        // var LOGIN_UPDATE = "loginUpdate";

        // var editLog = function(state) {
        //     console.log(LOGIN_STATE);
        //     $rootScope.$broadcast(LOGIN_STATE, {
        //         state: state
        //     });

        // };

        // var onEditLog = function($scope, handler) {
        //     console.log("holi");
        //     $scope.$on(LOGIN_STATE, function(event, args) {
        //         handler(args.state);
        //     });
        // };

        // var saveLog = function(state){
        //     logService.editLog(state);
        // }
        // return {
        //     editLog: editLog,
        //     onEditLog: onEditLog,
        //     saveLog:saveLog


        // };
    }
]);
