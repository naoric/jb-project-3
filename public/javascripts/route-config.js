angular.module('MyYoutubeList')

.config(['$routeProvider', ConfigAngularRouter]);


function ConfigAngularRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: ['User', '$scope', HomeController]
        });
}

// in another home.controller.js

function HomeController(User, $scope) {
    $scope.user = {};

    $scope.registerInServer = function() {
        User.register($scope.user)
            .then(function(response) {
                console.log('received from the server', response);
            });

    };

}