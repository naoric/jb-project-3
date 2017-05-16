var app = angular.module('MyYoutubeList', ['ngRoute']);

app.factory('User', ['$http', UserFactory]);

function UserFactory($http) {
    return {
        register: function(user) {
            return $http.post('/api/register', user);
        }
    };
}