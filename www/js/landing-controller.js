angular.module(‘myApp.controllers’) 
.controller(‘LandingController’, function($http, $scope, $log) {
  this.authenticate = function(email, password) {
    $http.post('https://192.168.1.102:3000/api/v1/authenticate', {
      email: email,
      password: password
    }).then(function(response) {
      window.localStorage['authToken'] = response.data.token;
    }, function(error) {
      alert('Incorrect password - please try again.')
      $log.log(error);       
    });
  }
});